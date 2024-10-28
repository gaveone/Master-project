class IndexedDBX {
    db = null;
    constructor() {
        //   Initialize the database and create the bucket
        this.InitialsStore().catch((e) => { console.error("Database initialization failed", e); });
    }
    // Initialize a schema to store all Product
    async InitialsStore() {
        return new Promise((resolve, reject) => {
            console.log("start--- InitialsStore");
            const openRequest = indexedDB.open("harmonyHub", 1); // Create the database
            openRequest.onupgradeneeded = (e) => {
                //  cast target IDBOpenDBRequest 
                const db = e.target.result;
                console.log("start--- onupgradeneeded");
                this.db = db;
                // Check if we have this database
                if (!this.db.objectStoreNames.contains("store")) {
                    // If we do not have this database, we will create the database
                    this.db.createObjectStore("store", { keyPath: "id" });
                }
            };
            // Successful open the Bucket
            openRequest.onsuccess = (e) => {
                // This will initialize the database if successful
                this.db = e.target.result;
                resolve(this.db);
            };
            //  failed to open bucket
            openRequest.onerror = (e) => {
                console.error("fail to open database", e);
                reject(e);
            };
        });
    }
    /**
     * Add new item to the indexDB database
     */
    async addItem(data) {
        console.log("attempt to add item");
        if (!this.db) {
            await this.InitialsStore();
        }
        else {
            const storageDB = this.db;
            const tx = storageDB.transaction("store", "readwrite");
            const store = tx.objectStore("store");
            console.log("adding something");
            const addRequest = store.add(data);
            addRequest.onsuccess = () => {
                console.log("Item successfully added:", data);
                // Retrieve the item immediately after adding it
                const getRequest = store.get(data.id);
                getRequest.onsuccess = (event) => {
                    const retrievedData = event.target.result;
                    console.log("Retrieved item:", retrievedData);
                };
                getRequest.onerror = (e) => {
                    console.error("Failed to retrieve item after adding:", e);
                };
            };
            addRequest.onerror = (e) => {
                console.error("Failed to add item. It may already exist:", e);
            };
            // Listen for transaction completion
            tx.oncomplete = () => {
                console.log("Transaction completed successfully.");
            };
            tx.onerror = (e) => {
                console.error("Transaction failed:", e);
            };
        }
    }
}
export default IndexedDBX;
