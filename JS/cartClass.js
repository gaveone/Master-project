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
}
export default CartlocalStorage;
