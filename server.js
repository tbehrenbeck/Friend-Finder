// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//-----FRIENDS ARRAY----
var friendsArray = [
  {
    name:"tina",
    photo:"#",
    scores:[
        5,
        1, 
        4, 
        2, 
        3
      ]
  },
  {
    name:"bob",
    photo:"#",
    scores:[
        2,
        2, 
        4, 
        1, 
        5
      ]
  }, 
  {
    name:"linda",
    photo:"#",
    scores:[
        1,
        1, 
        4, 
        4, 
        2
      ]
  }
]

//---HTML ROUTES----
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

//---API ROUTES----
//Display all friends
app.get("/api/friends", function(req, res) {
  return res.json(friendsArray);
});

//Add new friend (incoming survey results)
app.post("/api/friends", function(req, res) {
  var newAdd = req.body;

  var userResponses = newAdd.scores;
  //console.log(userResponses);

    for (var i = 0; i < friendsArray.length; i++) {
      //console.log('friend = ' + JSON.stringify(friendsArray[i]));

      var diff = 0;
      var compareArr= [];
      for (var j = 0; j < userResponses.length; j++) {
        diff += Math.abs(friendsArray[i].scores[j] - userResponses[j]);
      };
      
    };
    compareArr.push(diff);
      console.log(compareArr) ///change this
  
    friendsArray.push(newAdd);
    res.json(newAdd);
  });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
  