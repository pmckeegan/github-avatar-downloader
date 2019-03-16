var request = require("request");
var pw = require('./secrets');
//var downloadImageByURL = ("requests");
var fs = require('fs');

console.log("Welcome to the GitHub Avatar Downloader!")

function getRepoContributors(repoOwner, repoName, cb){
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'pmckeegan',
      'Authorization': 'GITHUB_TOKEN'
    }
  };
for (var i = 0; i < body.length; i++){
var url = JSON.parse(body, function (key, location){
      if (key == "avatar_url"){
        console.log(location);
}
});
}

request(options, function(err, res, body) {
  cb(err, body);
});


  getRepoContributors("jquery", "jquery", function(err, result){

  console.log("errors:", err);
  console.log("Results:", result);
});

function downloadImageByURL(url, filePath) {
  console.log (url + filePath);
    request
    .get(url + filePath)
    .on("error", function(err) {
      throw err;
    })
    .on('response', function(response) {
      //console.log(response);
    })
    .pipe(fs.createWriteStream(filePath))
}
downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "kvirani.jpg")
//console.log(downloadImageByURL);