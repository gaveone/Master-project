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



//  Random number generator from the minimum to the maximum range
function rand(min: number, max: number): number {
     return Math.floor(Math.random() * (max - min + 1) + min);
}



// ID generator

export function IdGenerator() {
     let id: string = "";
     let SegmentCount = 0;
     // Uppercase alphabet
     const uppercaseAlphabet = [
          "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
          "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
     ];
     // Lowercase alphabet
     const lowercaseAlphabet = [
          "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
          "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
     ];
     //  Special characters
     let Special = ["!", "$", "*", "%", "&"]
     while (SegmentCount != 3) {

          for (let index = 0; index <= 7; index++) {
               let SegmentType = rand(0, 3);
               switch (SegmentType) {
                    case 0: {
                         id += uppercaseAlphabet[rand(0, 25)];
                         break;
                    }
                    case 1: {
                         id += lowercaseAlphabet[rand(0, 25)];
                         break;
                    }
                    case 2: {
                         id += Special[rand(0, 4)];
                         break;
                    }
                    case 3: {
                         id += rand(0, 9).toString();
                         break;
                    }

               }

          }

          if (SegmentCount < 2) {
               id += "-"

          }
          SegmentCount++;

     }
     return id;

}


// Convert an integer/ seconds to a time format 00:00
export function Timeformat(params: number) {
     const seconds = params % 60;
     const Minute = Math.floor(params / 60);
     return `${Minute == 0 ? "00" : Minute}:${seconds < 10 ? ("0" + seconds) : seconds} `

}


// Async function to get an image of a specified instrument from Unsplash
async function getImg(instrument: string) {

     // Return a promise to handle asynchronous fetch operation
     return new Promise<string>((resolver, Reject) => {

          // Fetch an image based on the instrument search term from Unsplash API
          fetch(`https://api.unsplash.com/search/photos?query=${instrument}&client_id=${"g0fQ7uOurfINiHhAOMPGwLZWRPwpvBizMbvkPMQ9PSE"}`)

               // Convert the response to JSON format
               .then(res => res.json())

               // Resolve the promise with the first image's URL if found
               .then(res => resolver(res.results[0].urls.regular))

               // Reject the promise if there's an error in fetching or parsing
               .catch(err => Reject(err));
     });
}



// Generate dummy data for a product with an instrument image
export async function dummyData(index: number) {

     // List of instruments to choose randomly
     const instruments = [
          "Guitar", "Piano", "Violin", "Drums", "Flute",
          "Saxophone", "Trumpet", "Cello", "Clarinet", "Bass Guitar",
          "Ukulele", "Harp", "Banjo", "Accordion", "Synthesizer"
     ];

     // Select a random instrument name
     const nameRaw = instruments[rand(0, instruments.length - 1)];

     // Get an image URL for the selected instrument
     const url = await getImg(nameRaw);

     // Return a promise that resolves to a product object
     return new Promise<product>((resolver, Reject) => {

          // Generate random values for product details
          const name = nameRaw + `${rand(2, 560)}`;
          const price = rand(100, 2450);
          const rate = rand(0, 5);
          const Description = "";
          const Image = url; // Use fetched URL from getImg function
          const Video = "";
          const Audio = "";

          // Resolve the promise with the created product object
          resolver({
               id: IdGenerator(),
               name: name,
               price: price,
               rate: rate,
               Description: Description,
               Image: Image,
               Video: Video,
               Audio: Audio
          });

     });
}
