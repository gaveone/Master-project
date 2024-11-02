


class CartlocalStorage {
     private cartData: { id: string, count: number }[] = [];
     constructor() {
          // Initialize local storage and fetch the existing cart data
          this.InitializeStorage();

     }
     private InitializeStorage(): void {
          // Check if "cart" exists in localStorage, if not, initialize it
          if (!localStorage.getItem("cart")) {
               localStorage.setItem("cart", JSON.stringify([]));

          } else {
               let data: ({ id: string, count: number }[] | []) = JSON.parse(localStorage.getItem("cart") || "[]");
               this.cartData = data;
          }
     }
     public getSize() {
          //  Update the cardData state
          this.InitializeStorage()

          let sun = 0
          this.cartData.forEach((data) => {
               sun += data.count
          })

          return sun
     }
     public update(id: string, type: "increment" | "decrement") {
          //  Update the cardData state
          this.InitializeStorage()

          const newCartDataIN = this.cartData.map(item => {
               if (item.id === id) {
                    item.count = type === "increment" ? item.count += 1 : item.count -= 1;
               }
               return item;
          })
          localStorage.setItem("cart", JSON.stringify(newCartDataIN))

     }
     public add(item: { id: string, count: number }) {
          //  Update the cardData state
          this.InitializeStorage()

          const existingItem = this.cartData.find(cart => cart.id === item.id);
          if (existingItem) {
               existingItem.count = existingItem.count += 1;
          } else {
               this.cartData.push(item)
          }
          localStorage.setItem("cart", JSON.stringify(this.cartData))

     }
     public Delete(item: string) {
          localStorage.setItem("cart", JSON.stringify([...this.cartData.filter(oldItem => oldItem.id !== item)]));

     }


}


export default CartlocalStorage;