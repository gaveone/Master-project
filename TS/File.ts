// This class will automatically detect the type of file and return a suitable object to be used
class FileConverter {
     constructor() { }
     /**
      * This will automatically detect what type of file and converted to basic 64 with the necessary key value pairs
      */
     public async InitFile(FL: File) {
          let Final = "";
          console.log(FL);
          const AudioType = ["audio/mpeg", "audio/wav", "audio/webm", "audio/mp4"]
          if (AudioType.includes(FL.type)) {// Check if the file is an audio file

          } else {//if it's not, it's a generic file like txt document PDF
              return  await this.Base64file(FL)
          }
          return Final;

     }
     private fileSize(bytes: number) {
          if (bytes < 1e3) {
               return `${bytes} bytes`;
          } else if (bytes >= 1e3 && bytes < 1e6) {
               return `${(bytes / 1e3).toFixed(1)} KB`;
          } else if (bytes >= 1e6 && bytes < 1e9) {
               return `${(bytes / 1e6).toFixed(1)} MB`;
          } else {
               return `${(bytes / 1e9).toFixed(1)} GB`;
          }
     }
     private Base64file(item: File): Promise<string> {
          return new Promise((resolve, reject) => {  // Promise to return the Base64  string if not, throw an error
               let reader = new FileReader()
               reader.readAsDataURL(item);
               reader.onload = () => {
                    resolve(reader.result as string)
               }
               reader.onerror = (e) => {
                     console.log("fail to convert file to B64");
                    
               }
          })

     }
}

export default FileConverter;
