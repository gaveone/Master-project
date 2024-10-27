class CartlocalStorage {
    constructor() {
        this.InitializeStorage();
    }
    InitializeStorage() {
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", JSON.stringify([]));
            console.log("successfully created cart");
        }
    }
}
export default CartlocalStorage;
