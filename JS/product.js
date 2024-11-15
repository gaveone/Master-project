import Auth from "./Utility/Authentication.js";
import IndexedDBX from "./Utility/database.js";
import { pageTransition } from "./Utility/Utilities.js";
const database = new IndexedDBX();
const urlParams = new URLSearchParams(window.location.search);
const authentication = new Auth();
const Video = document.querySelector("[data-video]");
const Name = document.querySelector("[data-name]");
const Description = document.querySelector("[data-description]");
// This will handle the transition effect
pageTransition();
async function loadData() {
    const id = urlParams.get("id");
    console.log(id);
    if (id) {
        try {
            const item = await database.GetUnique(id);
            if (Video && Name && Description && item) {
                // Video.setAttribute("src", item.Video || "");
                Video.src = item.Video;
                Name.textContent = item.name || "No Name Available";
                Description.textContent = item.Description || "No Description Available";
            }
            else {
                console.log("something went wrong");
            }
        }
        catch (error) {
            console.error("Failed to retrieve item from database:", error);
        }
    }
}
loadData();
