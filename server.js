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


//-----FRIENDS ARRAY (DATA)---
var friendsArray = [
  {
    name:"Ahmed",
    photo:"#",
    scores:[
        5,
        1, 
        4, 
        6, 
        1
      ]
  }, 
  {
    name:"bob",
    photo:"#",
    scores:[
        5,
        1, 
        4, 
        6, 
        1
      ]
  }, 
  {
    name:"linda",
    photo:"#",
    scores:[
        5,
        1, 
        4, 
        6, 
        1
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
//--------

//---API ROUTES----
//Display all friends
app.get("/api/friends", function(req, res) {
  return res.json(friendsArray);
})

//Add new friend (incoming survey results)
app.post("/api/friends", function(req, res) {
  var newAdd = req.body;

  var scores = [];
  scores = req.body.q1
  console.log(scores);
  


  friendsArray.push(newAdd);
  res.json(newAdd);
})
//------------

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
  