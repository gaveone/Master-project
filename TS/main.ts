import CartlocalStorage from "./Utility/cartClass.js";
import { dummyData, IdGenerator, Timeformat } from "./Utility/Utilities.js";
import FileConverter from "./Utility/File.js";
import IndexedDBX from "./Utility/database.js";


console.log("test====");
//  all in initialization of instances
const cart = new CartlocalStorage();
const database = new IndexedDBX();
const fileInit = new FileConverter();

// All dom selections
const cartCount: HTMLHeadingElement | null = document.querySelector("[data-Cart-count]");
const input: HTMLInputElement | null = document.querySelector("[data-Input-Test]");
const dataTest: HTMLButtonElement | null = document.querySelector("[data-T-Test]");
const DIV: HTMLDivElement | null = document.querySelector("[data-op]");
const PorductList: HTMLDivElement | null = document.querySelector("[data-PorductList]");
const CartAddBtu: HTMLButtonElement | null = document.querySelector("[data-Add-ToCart]");









// Dynamic Dom element
function Product({ id, Price, Header, img }: { id: string, Price: number, Header: string, img: string }) {
     return `
     <div data-Item-Container class="itemContainer">
                         <a href="Product.html?id${id}">
                              <div class="itemImage">
                                   <img data-Item-Image src="${img}" alt="">

                              </div>
                         </a>

                         <div class="itemContent">
                              <a href="Product.html?id${id}">
                                   <p data-Item-Header class="itemTitle">${Header}</p>
                              </a>

                              <div class="itemDetails">
                                   <a  href="Product.html?id${id}">
                                         <p class="itemPrice"  data-Item-Price>$${Price}</p>
                                   </a>
                                  
                                   <button data-add-cart=${id}>add to cart</button>
                              </div>

                         </div>
                    </div>
     
     
     `

}
//  Add event business for every single product
// Display the cart counter immediately
if (cartCount) {
     cartCount.textContent = `${cart.getSize()}`;
}








// Fetch all products from the database and display them on the front end
async function gellData() {
     try {
          // Retrieve all items from the database
          const items = await database.getAllItem();

          // Check if the product list container exists
          if (PorductList) {
               // Insert each product into the DOM
               items.forEach((item) => {
                    PorductList.insertAdjacentHTML("beforeend", Product({
                         id: item.id,
                         Price: item.price,
                         Header: item.name,
                         img: item.Image
                    }));
               });

               // Add click event listeners to each "Add to Cart" button
               const AddToCartBtn: HTMLButtonElement[] = Array.from(document.querySelectorAll("[data-add-cart]"));
               AddToCartBtn.forEach((element) => {
                    element.addEventListener("click", (event) => {
                         const btn = event.target as HTMLButtonElement;
                         const id = btn.getAttribute("data-add-cart");

                         // Add product to cart if the ID exists
                         if (id) {
                              cart.add({ id: id, count: 1 });
                              // Refresh the page
                              if (cartCount) {
                                   cartCount.textContent = `${cart.getSize()}`;
                              }
                         }
                    });
               });

               
               
               // Refresh the page
              
          }
     } catch (error) {
          console.error("Failed to retrieve items:", error);
     }

     // Update the cart count display
    
}

gellData();

// Handle the main audio play





// This function generates and inserts dummy product data into the database for testing purposes.
// It should only be run once when setting up a local server environment to populate initial data.
// Uncomment the function call below if you need to re-seed the database with sample products,
// but remember to comment it out again after running to avoid creating duplicate entries.

async function fakeData() {
     // Loop to create 20 sample products by calling the dummyData function
     // and adding each product to the database with the addItem method.
     for (let index = 0; index < 20; index++) {
          await database.addItem(dummyData());
     }
}

// Uncomment the line below to run the function once
// fakeData()




