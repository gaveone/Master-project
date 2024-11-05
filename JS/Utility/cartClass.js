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
        let sun = 0;
        this.cartData.forEach((data) => {
            sun += data.count;
        });
        return sun;
    }
    update(id, type) {
        //  Update the cardData state
        this.InitializeStorage();
        let newCartDataINE = [];
        this.cartData.forEach((data) => {
            if (data.id === id) {
                data.count = type === "increment" ? data.count += 1 : data.count -= 1;
            }
            if (data.count !== 0 || data.count < 0) {
                newCartDataINE.push(data);
            }
        });
        localStorage.setItem("cart", JSON.stringify(newCartDataINE));
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
        //  Update the cardData state
        this.InitializeStorage();
        localStorage.setItem("cart", JSON.stringify([...this.cartData.filter(oldItem => oldItem.id !== item)]));
    }
}
export default CartlocalStorage;
