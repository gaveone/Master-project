


class CartlocalStorage {
     public cartData: { id: string, count: number }[] = [];
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
          let newCartDataINE: { id: string, count: number }[] = []

          this.cartData.forEach((data) => {
               if (data.id === id) {
                    data.count = type === "increment" ? data.count += 1 : data.count -= 1;
               }
               if (data.count !== 0 || data.count < 0) {
                    newCartDataINE.push(data)
               }

          })

          localStorage.setItem("cart", JSON.stringify(newCartDataINE))
          window.location.reload()

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
          //  Update the cardData state
          this.InitializeStorage()
          localStorage.setItem("cart", JSON.stringify([...this.cartData.filter(oldItem => oldItem.id !== item)]));

          
     }


     public clear() {
          //  Update the cardData state
          this.InitializeStorage()
          localStorage.setItem("cart", JSON.stringify([]));

          
     }


}


export default CartlocalStorage;