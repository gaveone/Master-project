class CartlocalStorage {
    cartData = [];
    constructor() {
        this.InitializeStorage();
    }
    InitializeStorage() {
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", JSON.stringify([]));
        }
        else {
            let data = JSON.parse(localStorage.getItem("cart") || "[]");
            this.cartData = data;
        }
    }
    getSize() {
        return this.cartData.length;
    }
    update() {
        // Get the ID of the object and the new object to update
    }
    add(item) {
        localStorage.setItem("cart", JSON.stringify([...this.cartData, item]));
    }
    Delete(item) {
        localStorage.setItem("cart", JSON.stringify([...this.cartData.filter(oldItem => oldItem !== item)]));
    }
}
export default CartlocalStorage;
