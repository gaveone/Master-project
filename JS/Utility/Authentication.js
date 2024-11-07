// Simple website authentication using sessions
class Auth {
    user = null;
    constructor() {
        // The constructor will check if we're logged in then redirect the user to the right location
    }
    LoginAuth(email) {
        // Check if there's a user logged in
        // If there's no user logged in, we will log that user in with the email 
        if (!this.user) {
            sessionStorage.setItem("authentication", email);
            setTimeout(function () { }, 1000);
            if (sessionStorage.getItem("authentication") === email) {
                this.user = email;
                console.log("auth ====", this.user);
                window.location.href = "index.html";
            }
        }
        else {
            // Redirect the user back to the homepage or the index page
            window.location.href = "index.html";
        }
    }
    LogoutAuth() {
        // Remove the session then return the user back to the login page
        sessionStorage.clear();
        location.reload();
    }
}
export default Auth;