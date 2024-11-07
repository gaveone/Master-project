import CartlocalStorage from "./Utility/cartClass.js";
import IndexedDBX from "./Utility/database.js";
// Select cart list HTML element
const cartlist = document.querySelector("[data-cartlist]");
// Initialize instances of cart and database classes
const CART = new CartlocalStorage();
const Database = new IndexedDBX();
// Function to create a cart item card with provided details
function cartCard(name, rating, Price, img, id, Quantity) {
    return `
     <div class="product">
       <!-- Image container with a link to product page -->
       <a href="Product.html?id${id}">
         <div class="cartImgBox">
           <img src="${img}" alt="" />
         </div>
       </a>
       <!-- Product name, rating, and price -->
       <div class="cartDetailsBox">
         <div class="cartDetailsBoxSub">
           <a href="Product.html?id${id}" class="Cname"> ${name}</a>
           <a href="Product.html?id${id}" class="Crating">${rating}/5</a>
         </div>
         <a href="Product.html?id${id}" class="Cprice">$${Price}</a>
       </div>
       <!-- Quantity control buttons -->
       <div class="quantityControlBox">
           <div class="mutationsBox">
               <button data-id="${id}" data-increase class="buttonD">+</button>
               <p>${Quantity}</p>
               <button data-id="${id}" data-decrease class="buttonD">-</button>
           </div>
       </div>
     </div>
     `;
}
console.log("yest"); // Debug log to confirm script execution
// Function to fetch and display cart items
async function FetchCart() {
    console.log("start FetchCart"); // Debug log to confirm function start
    // Initialize total cost of all items in the cart
    let TotalCostOfGoods = 0;
    // Fetch all cart items from the local cart data
    const items = await Promise.all(CART.cartData.map(async (item) => {
        const getProduct = await Database.GetUnique(item.id);
        if (getProduct) {
            return { ...getProduct, Quantity: item.count }; // Return product with quantity if found in database
        }
        return null; // Return null if product not found
    }));
    // Append each item to the DOM and calculate total cost
    items.forEach(item => {
        if (item && cartlist) {
            TotalCostOfGoods += item.price * item.Quantity;
            cartlist.insertAdjacentHTML("beforeend", cartCard(item.name, item.rate, item.price, item.Image, item.id, item.Quantity));
        }
    });
    // Select buttons for increasing and decreasing quantity
    const IncrementList = Array.from(document.querySelectorAll("[data-increase]"));
    const DecrementList = Array.from(document.querySelectorAll("[data-decrease]"));
    const totalCost = document.querySelector("[data-total-cost]");
    // Set up increment buttons to update cart quantities
    IncrementList.forEach(Increment => {
        Increment.addEventListener("click", (e) => {
            const ProductID = Increment.dataset.id;
            if (ProductID) {
                console.log("Increment ---> ", ProductID);
                CART.update(ProductID, "increment"); // Call cart update for increment
            }
        });
    });
    // Set up decrement buttons to update cart quantities
    DecrementList.forEach(Decrement => {
        Decrement.addEventListener("click", (e) => {
            const ProductID = Decrement.dataset.id;
            if (ProductID) {
                CART.update(ProductID, "decrement"); // Call cart update for decrement
            }
        });
    });
    // Display the total cost of all goods in the cart
    if (totalCost) {
        totalCost.textContent = `$ ${Intl.NumberFormat().format(TotalCostOfGoods)}`;
    }
}
// Test function to execute FetchCart and log results
async function test() {
    try {
        const allCartProduct = await FetchCart();
        console.log(allCartProduct); // Log fetched cart data
    }
    catch (error) {
        console.log(error); // Log any errors encountered
    }
}
test(); // Execute test function
