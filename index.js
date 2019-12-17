
const fs = require("fs");
const {Storage} = require('@google-cloud/storage');

const storage = new Storage({
  projectId: 'omega-pivot-258100',
  keyFilename: './aca-311-b9d26fb6068b.json'
})


storage.bucket("astyers_aca-class_my_hard_drive").upload("./bruce.jpg", {
    gzip: true,
    metadata: {
        cacheControl: 'public, max-age=31536000',
    },
}).then(()=>{
    console.log("file uploaded")
});