type product = {
     id: string
     name: string,
     price: number,
     rate: number,
     Description: string,
     Image: string,
     Video: string,
     Audio: string,
}

class IndexedDBX {

     private dbReady: Promise<IDBDatabase | null>;  // Allow me to wait for the data to load

     constructor() {
          //   Initialize the database and create the bucket
          this.dbReady = this.InitialsStore()
     }
     // Initialize a schema to store all Product
     private async InitialsStore() {
          return new Promise<IDBDatabase | null>((resolve, reject) => {

               const openRequest = indexedDB.open("harmonyHub", 1); // Create the Bucket
               openRequest.onupgradeneeded = (e) => {
                    //  cast target IDBOpenDBRequest 
                    const db = (e.target as IDBOpenDBRequest).result;


                    // Check if we have this database called  "store"
                    if (!db.objectStoreNames.contains("store")) {
                         // If we do not have this database, we will create the database
                         db.createObjectStore("store", { keyPath: "id" })
                    }

               }
               // Successful open the Bucket
               openRequest.onsuccess = (e) => {
                    // This will initialize the database if successful

                    resolve((e.target as IDBOpenDBRequest).result);
               }
               //  failed to open bucket
               openRequest.onerror = (e) => {
                    console.error("fail to open database", e);
                    reject(e)

               }

          })

     }
     /** 
      * Add new item to the indexDB database
      */
     public async addItem(data: product) {
          const db = await this.dbReady; // Ensure the database is initialized
          if (!db) {
               await this.InitialsStore()
          } else {
               const tx = db.transaction("store", "readwrite")
               const store = tx.objectStore("store")

               const addRequest = store.add(data)

               addRequest.onsuccess = () => {
                    console.log("Item successfully added:", data);

               };

               addRequest.onerror = (e) => {
                    console.error("Failed to add item. It may already exist:", e);
               };

          }

     }
     // This will delete an item in the index DB
     public async deleteItem(id: string) {
          const db = await this.dbReady; // Ensure the database is initialized
          if (!db) {
               await this.InitialsStore()
          } else {
               const tx = db.transaction("store", "readwrite")
               const store = tx.objectStore("store")
               const deleteI = store.delete(id);
               deleteI.onsuccess = () => {
                    console.log("Item successfully delete:", deleteI);

               }
               deleteI.onerror = (e) => {
                    console.error("failed to  item ", e);
               }

          }
     }
     // Get all items in the store for display
     public async getAllItem() {

          const db = await this.dbReady; // Ensure the database is initialized
          if (!db) { // if there's no DB initialize the DB
               this.InitialsStore()
          }

          return new Promise<product[] | []>((resolve, reject) => {
               if (db) {

                    const tx = db.transaction("store", "readonly")
                    const store = tx.objectStore("store");



                    const getAllI = store.getAll()
                    getAllI.onsuccess = (evt) => {
                         const items = getAllI.result
                         resolve(items); // Resolve with the actual items

                    }
                    getAllI.onerror = (e) => {
                         console.error("Failed to get all items:", e);
                         reject(e);

                    }
                    tx.oncomplete = () => console.log("getAllItem transaction completed.");
                    tx.onerror = (e) => {
                         console.error("getAllItem transaction failed:", e);
                         reject(e);
                    };
               } else {
                    reject("Database not initialized");
               }


          })
     }

     public async GetUnique(id: string) {
          const db = await this.dbReady; // Ensure the database is initialized
          if (!db) {
               this.InitialsStore()

          }
          return new Promise<product | null>((resolve, reject) => {
               if (db) {
                    const tx = db.transaction("store", "readonly")
                    const store = tx.objectStore("store");
                    const getItem = store.get(id)
                    getItem.onsuccess = (evt) => {
                         console.log("successfully retrieved item");
                         resolve(getItem.result as product);

                    }
                    getItem.onerror = (e) => {
                         reject(null);
                    }

               } else {
                    reject(null);
               }


          })
     }


}

export default IndexedDBX