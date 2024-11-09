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
     while (SegmentCount != 3) {

          for (let index = 0; index <= 7; index++) {
               let SegmentType = rand(0, 2);
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
     
     const instrumentObjects = [
          {
               name: "Guitar",
               description: "The Guitar is a versatile string instrument used in many genres, known for its rich tones and ability to produce chords and melodies.",
               video: "https://utfs.io/f/Zsz1ooNINCLv06kZxgFyiDYaoGfzwXTJlrRd6qs5VvPCZBbj",
               audio: "https://utfs.io/f/Zsz1ooNINCLv06kZxgFyiDYaoGfzwXTJlrRd6qs5VvPCZBbj"
          },
          {
               name: "Piano",
               description: "The Piano is a popular keyboard instrument capable of playing both melody and harmony, often used in classical, jazz, and popular music.",
               video: "https://utfs.io/f/Zsz1ooNINCLvoEEUq4Uv1vO0hGYMfab4kXjts2eDE6CJSPow",
               audio: "https://utfs.io/f/Zsz1ooNINCLvoEEUq4Uv1vO0hGYMfab4kXjts2eDE6CJSPow"
          },
          {
               name: "Violin",
               description: "The Violin is a high-pitched string instrument played with a bow, widely used in classical and folk music.",
               video: "https://utfs.io/f/Zsz1ooNINCLvOLmfU8GmSH0aEP1eClc5Tx2Gz3bM8oIXnkjO",
               audio: "https://utfs.io/f/Zsz1ooNINCLvOLmfU8GmSH0aEP1eClc5Tx2Gz3bM8oIXnkjO"
          },
          {
               name: "Drums",
               description: "The Drums are percussion instruments that provide rhythm and energy, essential to genres like rock, jazz, and pop.",
               video: "https://utfs.io/f/Zsz1ooNINCLvpqXHiBkQrWL705uGfZHKSPEJMi2eNg1jVBcD",
               audio: "https://utfs.io/f/Zsz1ooNINCLvpqXHiBkQrWL705uGfZHKSPEJMi2eNg1jVBcD"
          },
          {
               name: "Flute",
               description: "The Flute is a woodwind instrument that produces a soft, airy sound and is often used in classical, folk, and jazz music.",
               video: "https://utfs.io/f/Zsz1ooNINCLvu89m3qIrNq36sYKV9FwGPxtAhXHJ0e2mE4iD",
               audio: "https://utfs.io/f/Zsz1ooNINCLvu89m3qIrNq36sYKV9FwGPxtAhXHJ0e2mE4iD"
          },
          {
               name: "Saxophone",
               description: "The Saxophone is a brass woodwind instrument known for its expressive sound, commonly used in jazz and pop music.",
               video: "https://utfs.io/f/Zsz1ooNINCLvsrlcZUfhSBZLkHiPjOCqgoh4GvY1nzVxT5lE",
               audio: "https://utfs.io/f/Zsz1ooNINCLvsrlcZUfhSBZLkHiPjOCqgoh4GvY1nzVxT5lE"
          },
          {
               name: "Trumpet",
               description: "The Trumpet is a high-pitched brass instrument known for its bright, powerful sound, often used in jazz, classical, and marching band music.",
               video: "https://utfs.io/f/Zsz1ooNINCLvoUmxebv1vO0hGYMfab4kXjts2eDE6CJSPowz4",
               audio: "https://utfs.io/f/Zsz1ooNINCLvoUmxebv1vO0hGYMfab4kXjts2eDE6CJSPowz4"
          },
          {
               name: "Cello",
               description: "The Cello is a large string instrument with a deep, rich tone, often used in classical and orchestral music.",
               video: "https://utfs.io/f/Zsz1ooNINCLvoHWcN1v1vO0hGYMfab4kXjts2eDE6CJSPowz",
               audio: "https://utfs.io/f/Zsz1ooNINCLvoHWcN1v1vO0hGYMfab4kXjts2eDE6CJSPowz"
          },
          {
               name: "Clarinet",
               description: "The Clarinet is a woodwind instrument with a smooth, mellow sound, commonly found in classical and jazz music.",
               video: "https://utfs.io/f/Zsz1ooNINCLvMzcIjkxn9dO6LaCe8pxZXkSwuqmYUiHQR14z",
               audio: "https://utfs.io/f/Zsz1ooNINCLvMzcIjkxn9dO6LaCe8pxZXkSwuqmYUiHQR14z"
          },
          {
               name: "Bass Guitar",
               description: "The Bass Guitar is a string instrument with a deep sound, providing the foundation and rhythm in rock, jazz, and funk music.",
               video: "https://utfs.io/f/Zsz1ooNINCLvqn987rjygIO73AkFVxY5bu8nialPLfvsRUpc",
               audio: "https://utfs.io/f/Zsz1ooNINCLvqn987rjygIO73AkFVxY5bu8nialPLfvsRUpc"
          },
          {
               name: "Ukulele",
               description: "The Ukulele is a small string instrument from Hawaii, known for its bright, cheerful sound.",
               video: "https://utfs.io/f/Zsz1ooNINCLvqJ1YbFWjygIO73AkFVxY5bu8nialPLfvsRUp",
               audio: "https://utfs.io/f/Zsz1ooNINCLvqJ1YbFWjygIO73AkFVxY5bu8nialPLfvsRUp"
          },
          {
               name: "Harp",
               description: "The Harp is a large, multi-string instrument that produces a soothing, ethereal sound, commonly used in classical and folk music.",
               video: "https://utfs.io/f/Zsz1ooNINCLvoUmxebv1vO0hGYMfab4kXjts2eDE6CJSPowz",
               audio: "https://utfs.io/f/Zsz1ooNINCLvoUmxebv1vO0hGYMfab4kXjts2eDE6CJSPowz"
          },
          {
               name: "Banjo",
               description: "The Banjo is a string instrument with a distinctive twangy sound, often associated with folk, bluegrass, and country music.",
               video: "https://utfs.io/f/Zsz1ooNINCLv5wQlYWVX3pFOgDd8r0UGM29CBv7heHnIyzJ4",
               audio: "https://utfs.io/f/Zsz1ooNINCLv5wQlYWVX3pFOgDd8r0UGM29CBv7heHnIyzJ4"
          },
          {
               name: "Accordion",
               description: "The Accordion is a portable keyboard instrument with a distinctive, reedy sound, commonly used in folk and traditional music.",
               video: "https://utfs.io/f/Zsz1ooNINCLvOFFiY1GmSH0aEP1eClc5Tx2Gz3bM8oIXnkjO",
               audio: "https://utfs.io/f/Zsz1ooNINCLvOFFiY1GmSH0aEP1eClc5Tx2Gz3bM8oIXnkjO"
          },
          {
               name: "Synthesizer",
               description: "The Synthesizer is an electronic instrument capable of producing a wide range of sounds, often used in electronic, pop, and experimental music.",
                video: "https://utfs.io/f/Zsz1ooNINCLvZKZjxBNINCLv7bDmHT0zunMs6QrcSRw8xFJP",
               audio: "https://utfs.io/f/Zsz1ooNINCLvZKZjxBNINCLv7bDmHT0zunMs6QrcSRw8xFJP"
          }
     ];

     // Select a random instrument name
     const nameRaw = instrumentObjects[rand(0, instrumentObjects.length - 1)];

     // Get an image URL for the selected instrument
     const url = await getImg(nameRaw.name);

     // Return a promise that resolves to a product object
     return new Promise<product>((resolver, Reject) => {

          // Generate random values for product details
          const name = nameRaw.name + `${rand(2, 560)}`;
          const price = rand(100, 2450);
          const rate = rand(0, 5);
          const Description =nameRaw.description;
          const Image = url; // Use fetched URL from getImg function
          const Video = nameRaw.video;
          const Audio = nameRaw.audio;

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

function sleep() {
     return new Promise((resolve, reject) => {
          setTimeout(resolve, 600)
     })

}



// Page transition, animation
export async function pageTransition() {
     const body = document.querySelector("body");
     if (body) {
          body.classList.add("pageTransition")
          await sleep()
          body.classList.remove("pageTransition")
     }

}
