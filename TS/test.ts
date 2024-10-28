import CartlocalStorage from "./cartClass.js";
import { IdGenerator } from "./Utilities.js";


console.log("test");
var cart = new CartlocalStorage();
console.log(IdGenerator());


const cartCount:HTMLHeadingElement | null = document.querySelector("[data-Cart-count]");
if (cartCount) {
     cartCount.textContent = cart.getSize().toString();
}
