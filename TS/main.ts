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

const elements:(HTMLDivElement[]) = Array.from(document.querySelectorAll('[data-my-elements]'));
elements.forEach((item , index) =>{
     item.addEventListener("click", ()=>{
          console.log("elements:", index);
          elements[index].remove();
          

     })
})


// dynamic variables
if(cartCount) {
     cartCount.textContent = `${cart.getSize()}`
     cartCount.style.color = "red"
}






// Dynamic Dom element

// Get all product to show in the front end
async function gellData() {
     try {
          const items = await database.getAllItem();
          console.log("Retrieved items:", items);
     } catch (error) {
          console.error("Failed to retrieve items:", error);
     }

}
gellData()

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





