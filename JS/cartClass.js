class CartlocalStorage {
    cartData;
    constructor() {
        this.InitializeStorage();
        this.cartData = this.LoadData();
    }
    InitializeStorage() {
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", JSON.stringify([]));
            console.log("successfully created cart");
        }
    }
    LoadData() {
        let data = JSON.parse(localStorage.getItem("cart") || "[]");
        return data;
    }
    getSize() {
        return this.cartData.length;
    }
    update() {
        // Get the ID of the object and the new object to update
    }
    add() {
    }
}
export default CartlocalStorage;
