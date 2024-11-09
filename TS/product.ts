import IndexedDBX from "./Utility/database.js";


const database = new IndexedDBX();
const urlParams = new URLSearchParams(window.location.search);



const Video: HTMLVideoElement | null = document.querySelector("[data-video]")

const Name: HTMLHeadingElement | null = document.querySelector("[data-name]")

const Description: HTMLHeadingElement | null = document.querySelector("[data-description]")
console.log("test in the product GS");





async function loadData() {
     const id = urlParams.get("id")
     console.log(id);
     

     if (id) {
          try {
               const item = await database.GetUnique(id)


               if (Video && Name && Description && item) {
                    // Video.setAttribute("src", item.Video || "");
                    Video.src = item.Video;
                    Name.textContent = item.name || "No Name Available";
                    Description.textContent = item.Description || "No Description Available";
               } else {
                    console.log("something went wrong");

               }
          } catch (error) {
               console.error("Failed to retrieve item from database:", error);

          }


     }

}


loadData()
