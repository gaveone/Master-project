// Import database and utility functions
import IndexedDBX from "./Utility/database.js";
import { dummyData } from "./Utility/Utilities.js";
// Initialize the database instance
const database = new IndexedDBX();
// Function to generate and add sample data to the database
async function fakeData() {
    // Loop to create 20 sample products and add each to the database
    for (let index = 0; index < 20; index++) {
        const item = await dummyData(1);
        await database.addItem(item);
    }
}
// Function to check initialization status and populate database if needed
function Initialize() {
    // Retrieve initialization status from localStorage or set to "false" if not present
    let InitializeItems = JSON.parse(localStorage.getItem("Initialize") || "false");
    // If database is not initialized, populate with sample data
    if (!InitializeItems) {
        fakeData().then(() => {
            // Set initialization status to "true" to prevent re-population on next load
            localStorage.setItem("Initialize", "true");
        });
    }
}
// Call the initialization function when the page loads
Initialize();
