import CartlocalStorage from "./cartClass.js";
console.log("test");
var cart = new CartlocalStorage();
const cartCount = document.querySelector("[data-Cart-count]");
if (cartCount) {
    cartCount.textContent = cart.getSize().toString();
}
