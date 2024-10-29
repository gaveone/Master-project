import CartlocalStorage from "./cartClass.js";
import { dummyData, Timeformat } from "./Utilities.js";
import FileConverter from "./File.js";
import IndexedDBX from "./database.js";
console.log("test");
//  all in initialization of instances
const cart = new CartlocalStorage();
const database = new IndexedDBX();
const fileInit = new FileConverter();
// All dom selections
const cartCount = document.querySelector("[data-Cart-count]");
const input = document.querySelector("[data-Input-Test]");
const dataTest = document.querySelector("[data-T-Test]");
// dynamic variables
// Dynamic Dom element
// Get all product to show in the front end
async function gellData() {
    try {
        const items = await database.getAllItem();
        console.log("Retrieved items:", items);
    }
    catch (error) {
        console.error("Failed to retrieve items:", error);
    }
}
// Output
gellData();
// Handle the main audio play
// All testing code below
//  Make fake data
async function fakeData() {
    for (let index = 0; index < 20; index++) {
        await database.addItem(dummyData());
    }
}
// fakeData()
if (cartCount) {
    cartCount.textContent = cart.getSize().toString();
}
if (input) {
    input.addEventListener("input", async (e) => {
        const inputFiles = e.target.files;
        if (inputFiles) {
            const listFile = Array.from(inputFiles);
            try {
                // console.log( await fileInit.InitFile(listFile[0]));
            }
            catch (error) {
                console.log(error);
            }
        }
    });
}
console.log(Timeformat(500));
