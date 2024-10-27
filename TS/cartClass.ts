type CC = {name:string, Price:string, Rating:string,}


class CartlocalStorage {
     private cartData:CC[];
     constructor() {
          this.InitializeStorage();
          this.cartData = this.LoadData()
     }
     private InitializeStorage():void { // Initialize the local storage if it's there or not
          if (!localStorage.getItem("cart")){
               localStorage.setItem("cart", JSON.stringify([]));
               console.log("successfully created cart");

          }
     }
     private LoadData() {
          let data:(CC[] | []) = JSON.parse(localStorage.getItem("cart") || "[]");
          return data
     }
     public getSize() {
          return this.cartData.length
     }

}


export default CartlocalStorage;