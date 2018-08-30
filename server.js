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
    photo:"https://thechive.files.wordpress.com/2018/03/i-met-a-mysterious-stranger-in-venice-beach-long-ago-6-photos-1.jpg?quality=85&strip=info&w=954&zoom=2",
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
    photo:"https://thechive.files.wordpress.com/2018/03/i-met-a-mysterious-stranger-in-venice-beach-long-ago-6-photos-1.jpg?quality=85&strip=info&w=954&zoom=2",
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
    photo:"https://thechive.files.wordpress.com/2018/03/i-met-a-mysterious-stranger-in-venice-beach-long-ago-6-photos-1.jpg?quality=85&strip=info&w=954&zoom=2",
    scores:[
        1,
        1, 
        4, 
        1, 
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
    
    // console.log(compareArr);
    // console.log(Math.min(...compareArr));
    
    var matchIndex= compareArr.indexOf(Math.min(...compareArr))
    
    var bestMatch = friendsArray[matchIndex];
    //console.log(bestMatch);

    friendsArray.push(newAdd);
    res.json(bestMatch);
  });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
  