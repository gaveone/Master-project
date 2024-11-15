import Auth from "./Utility/Authentication.js";
import { pageTransition } from "./Utility/Utilities.js";
// This will handle the transition effect
pageTransition();
const authentication = new Auth();
const loggedBtu = document.querySelector("[data-loggedBtu]");
const loggedIN = document.querySelector("[data-loggedIN]");
const dataErrorMessage = document.querySelector("[data-errorMessage]");
function Validate(email) {
    // https://support.boldsign.com/kb/article/15962/how-to-create-regular-expressions-regex-for-email-address-validation
    const emailRegex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
        return true;
    }
    return false;
}
loggedBtu?.addEventListener("click", () => {
    if (loggedIN) {
        const inputValue = loggedIN.value;
        if (inputValue) { // If we have inputs change the border back to the original and logged user in
            const Condition = Validate(inputValue);
            if (Condition) {
                loggedIN.style.border = " 1px solid var(--accent)";
                authentication.LoginAuth(inputValue);
                if (dataErrorMessage) {
                    dataErrorMessage.innerHTML = "";
                }
            }
            else {
                if (dataErrorMessage) {
                    dataErrorMessage.innerHTML = "INVALID EMAIL";
                }
            }
        }
        else { // if there's no input, don't log us in and change the border colour red
            loggedIN.style.border = " 1px solid red";
        }
    }
});
