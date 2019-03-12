var request = require("request");
var pw = require('./secrets');


console.log("Welcome to the GitHub Avatar Downloader!")

function getRepoContributors(repoOwner, repoName, cb){
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'pmckeegan',
      'Authorization': 'GITHUB_TOKEN'
    }
  };
  request(options, function(err, res, body) {
    //cb(err, body);

    var url = JSON.parse(body, function (key, location){
      if (key == "avatar_url"){
        cb(key, location);
       console.log("Avatar URL: ", location);
     }
   });

    //cb(url.avatar_url);
  });
}

getRepoContributors("jquery", "jquery", function(err, result){
  //console.log("errors:", err);
  //console.log("Results:", result);
});

