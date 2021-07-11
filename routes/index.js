var express = require('express');
var router = express.Router();
const request = require('request');

var fs = require("fs");
const http = require("http");
var JSZip = require("jszip");

/* GET home page. */
router.get('/', async function (req, res, next) {

  let filePath = "OfficePlan.zip";
  let urlFilePath = "http://148.251.76.241/lod3/obj/OBJ.zip";
  let imagePath = "http://seika.id/images/logo.png";

  let image = null;
  await http.get(imagePath, function (res) {
    image = res;
    console.log(image);
  });



  // var req = http.get(urlFilePath, function (res) {
  //   if (res.statusCode !== 200) {
  //     console.log(res.statusCode);
  //     // handle error
  //     return;
  //   }
  //   var data = [], dataLen = 0;

  //   // don't set the encoding, it will break everything !
  //   // or, if you must, set it to null. In that case the chunk will be a string.

  //   res.on("data", function (chunk) {
  //     data.push(chunk);
  //     dataLen += chunk.length;

  //     console.log(chunk);

  //   });

  //   res.on("end", function () {
  //     var buf = Buffer.concat(data);

  //     // here we go !
  //     JSZip.loadAsync(buf).then(function (zip) {

  //       var zip = new JSZip();
  //       zip.loadAsync(data).then(function (contents) {
  //         Object.keys(contents.files).forEach(function (filename) {
  //           console.log(filename);
  //         });
  //       });

  //       return zip;
  //     }).then(function (text) {
  //       console.log(text);
  //     });
  //   });
  // });

  // fs.readFile(filePath, function (err, data) {
  //   if (!err) {
  //     var zip = new JSZip();
  //     zip.loadAsync(data).then(function (contents) {
  //       Object.keys(contents.files).forEach(function (filename) {
  //         console.log(filename);
  //       });
  //     });
  //   }else{
  //     console.log(err);
  //   }
  // });

});

router.get('/image/path', function (req, res, next) {
  let url = 'https://seika.id/images/logo.png';
  request.get(url).pipe(res);
});

module.exports = router;
