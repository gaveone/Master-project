import CartlocalStorage from "./Utility/cartClass.js";
import { dummyData } from "./Utility/Utilities.js";
import FileConverter from "./Utility/File.js";
import IndexedDBX from "./Utility/database.js";
console.log("test====");
//  all in initialization of instances
const cart = new CartlocalStorage();
const database = new IndexedDBX();
const fileInit = new FileConverter();
// All dom selections
const cartCount = document.querySelector("[data-Cart-count]");
const input = document.querySelector("[data-Input-Test]");
const dataTest = document.querySelector("[data-T-Test]");
const DIV = document.querySelector("[data-op]");
const PorductList = document.querySelector("[data-PorductList]");
const CartAddBtu = document.querySelector("[data-Add-ToCart]");
// Dynamic Dom element
function Product({ id, Price, Header, img }) {
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
     
     
     `;
}
//  Add event business for every single product
// Get all product to show in the front end
async function gellData() {
    try {
        const items = await database.getAllItem();
        if (PorductList) {
            items.forEach((item, index) => {
                PorductList.insertAdjacentHTML("beforeend", Product({ id: item.id, Price: item.price, Header: item.name, img: item.Image }));
            });
            // After I did all the product add event listening for every single Add to cart button
            const AddToCartBtu = Array.from(document.querySelectorAll("[data-add-cart]"));
            AddToCartBtu.forEach((element) => {
                element.addEventListener("click", (event) => {
                    const btu = event.target;
                    const idP = btu.getAttribute("data-add-cart");
                    if (idP) {
                        cart.add({ id: idP, count: 0 });
                    }
                });
            });
            if (cartCount) {
                cartCount.textContent = `${cart.getSize()}`;
            }
        }
    }
    catch (error) {
        console.error("Failed to retrieve items:", error);
    }
}
gellData();
// Handle the main audio play
// All testing code below
// Disfunction creates dummy data so immediately you run the local 
//server. Comment out the function call so it doesn't create too many
async function fakeData() {
    for (let index = 0; index < 20; index++) {
        await database.addItem(dummyData());
    }
}
// fakeData()
