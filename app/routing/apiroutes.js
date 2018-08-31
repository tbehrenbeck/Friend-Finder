var friendsArray = require("../data/friends");
var bodyParser = require("body-parser");

//---API ROUTES----

function apiRoutes(app) {
    //Display all friends
    app.get("/api/friends", function(req, res) {
        return res.json(friendsArray);
    });
  
    //Add new friend (incoming survey results)
    app.post("/api/friends", function(req, res) {
    var newAdd = req.body;
  
    var userResponses = newAdd.scores;
    //console.log(userResponses);
  
      var compareArr= [];
      for (var i = 0; i < friendsArray.length; i++) {
        //console.log('friend = ' + JSON.stringify(friendsArray[i]));
  
        var diff = 0;
        
        for (var j = 0; j < userResponses.length; j++) {
          diff += Math.abs(friendsArray[i].scores[j] - userResponses[j]);
        };
        compareArr.push(diff);
        //console.log(compareArr)
      };
      
      var matchIndex= compareArr.indexOf(Math.min(...compareArr))
      
      var bestMatch = friendsArray[matchIndex];
      //console.log(bestMatch);
  
      friendsArray.push(newAdd);
      res.json(bestMatch);
    });
};

module.exports = apiRoutes;

