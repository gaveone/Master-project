//  Random number generator from the minimum to the maximum range
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// ID generator
export function IdGenerator() {
    let id = "";
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
    let Special = ["!", "$", "*", "%", "&"];
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
            id += "-";
        }
        SegmentCount++;
    }
    return id;
}
// Convert an integer/ seconds to a time format 00:00
export function Timeformat(params) {
    const seconds = params % 60;
    const Minute = Math.floor(params / 60);
    return `${Minute == 0 ? "00" : Minute}:${seconds < 10 ? ("0" + seconds) : seconds} `;
}
// Generate dummy data
export function dummyData() {
    const instruments = [
        "Guitar",
        "Piano",
        "Violin",
        "Drums",
        "Flute",
        "Saxophone",
        "Trumpet",
        "Cello",
        "Clarinet",
        "Bass Guitar",
        "Ukulele",
        "Harp",
        "Banjo",
        "Accordion",
        "Synthesizer"
    ];
    const name = instruments[rand(0, instruments.length - 1)] + `${rand(2, 560)}`;
    const price = rand(100, 2450);
    const rate = rand(0, 5);
    const Description = "";
    const Image = "https://random-image-pepebigotes.vercel.app/api/random-image";
    const Video = "";
    const Audio = "";
    return {
        id: IdGenerator(),
        name: name,
        price: price,
        rate: rate,
        Description: Description,
        Image: Image,
        Video: Video,
        Audio: Audio
    };
}
