import CartlocalStorage from "./cartClass.js";
import { IdGenerator, Timeformat } from "./Utilities.js";
import FileConverter from "./File.js";
import IndexedDBX from "./database.js";


console.log("test");
// Initialize CartlocalStorage and IndexedDBX once
const cart = new CartlocalStorage();
const database = new IndexedDBX();


console.log(IdGenerator());




const cartCount: HTMLHeadingElement | null = document.querySelector("[data-Cart-count]");
const input: HTMLInputElement | null = document.querySelector("[data-Input-Test]");
const dataTest: HTMLButtonElement | null = document.querySelector("[data-T-Test]");

dataTest?.addEventListener("click", async () => {
     try {
          console.log("click successful");
          
          await database.addItem({ id: IdGenerator(), name: "ggggg" });
     } catch (error) {
          console.error("Failed to add item to database:", error);
     }

})

if (cartCount) {
     cartCount.textContent = cart.getSize().toString();
}

if (input) {
     input.addEventListener("input", async (e) => {
          const fileInit = new FileConverter();
          const inputFiles = (e.target as HTMLInputElement).files;
          if (inputFiles) {
               const listFile = Array.from(inputFiles);
               try {
                    // console.log( await fileInit.InitFile(listFile[0]));

               } catch (error) {
                    console.log(error);
               }



          }

     })
}




console.log(Timeformat(500));




