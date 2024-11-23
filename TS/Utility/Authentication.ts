

// Simple website authentication using sessions

import { pageTransition } from "./Utilities.js";

const routes = {
     login: "./HTML/login.html",
     index: "index.html",
};
class Auth {
     public user: string | null = sessionStorage.getItem("authentication");

     constructor() {
          const user = sessionStorage.getItem("authentication");
          const currentUrl = window.location.href;
      
          console.log("Current URL:", currentUrl);
          console.log("User Session:", user);
      
          if (!user && (currentUrl.includes("index.html") || currentUrl.includes("cartPage.html"))) {
              console.log("Redirecting to login page");
              window.location.href = routes.login;
              return;
          }
      
          if (user && currentUrl.includes("login")) {
              console.log("User is logged in, redirecting to the homepage");
              window.location.href = routes.index;
             
          }
      }
      

      public LoginAuth(email: string) {
          if (!this.user) {
              sessionStorage.setItem("authentication", email);
              this.user = sessionStorage.getItem("authentication");
              console.log("User authenticated:", this.user);
          }
          // Redirect the user to the homepage
          window.location.href = routes.index;
      }
      
     public LogoutAuth() {
          // Remove the session then return the user back to the login page
          sessionStorage.clear();
          location.reload()
     }
}




export default Auth;