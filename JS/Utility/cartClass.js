class CartlocalStorage {
    cartData = [];
    constructor() {
        // Initialize local storage and fetch the existing cart data
        this.InitializeStorage();
    }
    InitializeStorage() {
        // Check if "cart" exists in localStorage, if not, initialize it
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", JSON.stringify([]));
        }
        else {
            let data = JSON.parse(localStorage.getItem("cart") || "[]");
            this.cartData = data;
        }
    }
    getSize() {
        //  Update the cardData state
        this.InitializeStorage();
        return this.cartData.length;
    }
    update(id, type) {
        //  Update the cardData state
        this.InitializeStorage();
        const newCartDataIN = this.cartData.map(item => {
            if (item.id === id) {
                item.count = type === "increment" ? item.count += 1 : item.count -= 1;
            }
            return item;
        });
        localStorage.setItem("cart", JSON.stringify(newCartDataIN));
    }
    add(item) {
        //  Update the cardData state
        this.InitializeStorage();
        const existingItem = this.cartData.find(cart => cart.id === item.id);
        if (existingItem) {
            existingItem.count = existingItem.count += 1;
        }
        else {
            this.cartData.push(item);
        }
        localStorage.setItem("cart", JSON.stringify(this.cartData));
    }
    Delete(item) {
        localStorage.setItem("cart", JSON.stringify([...this.cartData.filter(oldItem => oldItem.id !== item)]));
    }
}
export default CartlocalStorage;
