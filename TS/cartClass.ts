class CartlocalStorage {
     constructor() {
          this.InitializeStorage();
     }
     private InitializeStorage():void { // Initialize the local storage if it's there or not
          if (!localStorage.getItem("cart")){
               localStorage.setItem("cart", JSON.stringify([]));
               console.log("successfully created cart");
               
          }
     }

}


export default CartlocalStorage;