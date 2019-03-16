
//set app requirements, global variables.
var request = require("request");
var fs = require("fs");
var pw = require("./secrets");
var input = process.argv.slice(2);

//begin
console.log("Welcome to the GitHub Avatar Downloader!");

//find image filepaths
function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url:"https://api.github.com/repos/" +
        repoOwner +
        "/" +
        repoName +
        "/contributors",
//authentication for GitHub
    headers: {
      "User-Agent": "pmckeegan",
      "Authorization": "GITHUB_TOKEN"
    } 
  };
 //parse user data
  request(options, function(err, res, body) {
    var data = JSON.parse(body);
      cb(err, data);
  });
}
//get files
getRepoContributors(input[0], input[1], function(err, result) {
        
  if (!input[0] || !input[1]) {
    console.log("please add the user and repo name you'd like to use.");
  } else {
    for (var i = 0; i < result.length; i++) {
      downloadImageByURL(
      result[i].avatar_url,
      "./avatars/" + result[i].login + ".jpg");
    }
  }
    console.log("errors:", err);
});
    function downloadImageByURL(url, filePath) {
    request(url).pipe(fs.createWriteStream(filePath));
}


