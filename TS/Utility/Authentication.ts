

// Simple website authentication using sessions

import { pageTransition } from "./Utilities.js";

const routes = {
     login: "./HTML/login.html",
     index: "./index.html",
};
class Auth {
     public user: string | null = sessionStorage.getItem("authentication");

     constructor() {
          // The constructor will check if we're logged in then redirect the user to the right location
          const oldUrl = window.location.href;
          console.log(oldUrl);
          console.log("user ==>", sessionStorage.getItem("authentication"));


          if (!sessionStorage.getItem("authentication") && (oldUrl.includes("index.html") || oldUrl.includes("cartPage.html"))) {

               window.location.href = routes.login;


          }
          // Check if the user is in the login route and we have a user take them to the homepage
          if (oldUrl.includes("login") && sessionStorage.getItem("authentication")) {
               console.log("user is logged in take them to the homepage");
               window.location.href = routes.index;

          }



     }

     public LoginAuth(email: string) {

          // Check if there's a user logged in

          // If there's no user logged in, we will log that user in with the email 

          if (!this.user) {
               sessionStorage.setItem("authentication", email);
               setTimeout(function () { }, 1000)
               if (sessionStorage.getItem("authentication") === email) {
                    this.user = email;
                    console.log("auth ====", this.user);
                    window.location.href = routes.index;
               }
          } else {
               // Redirect the user back to the homepage or the index page
               window.location.href = routes.index;

          }

     }
     public LogoutAuth() {
          // Remove the session then return the user back to the login page
          sessionStorage.clear();
          location.reload()
     }
}




export default Auth;