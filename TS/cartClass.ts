


class CartlocalStorage {
     private cartData:string[];
     constructor() { // initialize the local storage and fetch the dealer
          this.InitializeStorage();
          this.cartData = this.LoadData()
     }
     private InitializeStorage():void { // Initialize the local storage if it's there or not
          if (!localStorage.getItem("cart")){
               localStorage.setItem("cart", JSON.stringify([]));
               console.log("successfully created cart");

          }
     }
     private LoadData() {// Update the cart state
          let data:(string[] | []) = JSON.parse(localStorage.getItem("cart") || "[]");
          return data
     }
     public getSize() {
          return this.cartData.length
     }
     public update(){
          // Get the ID of the object and the new object to update


     }
     public add(){

     }


}


export default CartlocalStorage;