


class CartlocalStorage {
     private cartData:string[] =[];
     constructor() { // initialize the local storage and fetch the dealer
          this.InitializeStorage();
          
     }
     private InitializeStorage():void { // Initialize the local storage if it's there or not
          if (!localStorage.getItem("cart")){
               localStorage.setItem("cart", JSON.stringify([]));
               console.log("successfully created cart");

          }else{
               let data:(string[] | []) = JSON.parse(localStorage.getItem("cart") || "[]");
               this.cartData = data;
          }
     }
     public getSize() {
          return this.cartData.length
     }
     public update(){
          // Get the ID of the object and the new object to update


     }
     public add(item:string){
          localStorage.setItem("cart", JSON.stringify([...this.cartData , item]));
     }
     public Delete(item:string){
          localStorage.setItem("cart", JSON.stringify([...this.cartData.filter(oldItem => oldItem !== item)]));

     }


}


export default CartlocalStorage;