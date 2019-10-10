const fs = require("fs");
const {Storage} = require('@google-cloud/storage');

const storage = new Storage({
  projectId: 'aca-311',
  keyFilename: './aca-311-d864d06c299f.json'
})

const bucket = storage.bucket('aca-311-files');


//const {file} = req.files;
const gcsname = new Date().getTime() + 'myfilename.jpg';
const files = bucket.file(gcsname);

fs.createReadStream('./bruce.jpg')
.pipe(files.createWriteStream({
    metadata: {
      contentType: 'image/jpeg'
    }
}))
.on("error", (err) => {
    console.log(err);
})
.on('finish', () => {
    console.log('success');
});
