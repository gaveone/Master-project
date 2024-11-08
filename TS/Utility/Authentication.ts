

// Simple website authentication using sessions

import { pageTransition } from "./Utilities.js";

class Auth {
     public  user:string |null = null;

     constructor() {
          // The constructor will check if we're logged in then redirect the user to the right location
          const oldUrl = window.location.href ;
          console.log(oldUrl);
          
          if (!sessionStorage.getItem("authentication")){

               window.location.href = "login.html";
               
               
          }
          

          
     }

     public LoginAuth(email:string) {

          // Check if there's a user logged in

          // If there's no user logged in, we will log that user in with the email 

          if (!this.user) {
               sessionStorage.setItem("authentication", email);
               setTimeout(function() {} , 1000) 
               if (sessionStorage.getItem("authentication") === email){
                    this.user =email;
                    console.log("auth ====", this.user);
                    window.location.href = "index.html";
               }
          }else{
               // Redirect the user back to the homepage or the index page
               window.location.href = "index.html";

          }
          
     }
     public  LogoutAuth() {
          // Remove the session then return the user back to the login page
          sessionStorage.clear();
          location.reload()
     }
}



export default Auth;