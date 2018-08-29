//Display all friends
applicationCache.get("/api/friends", function(req, res) {
    return res.json(friends);
})

//Add new friend (incoming survey results)
app.post("/api/friends", function(req, res) {
    var newfriend = req.body;

    newfriend.routeName= newfriend.name.replace(/\s+/g, "").toLowercase();

    console.log(newfriend);
    
    //push newfriend to friend array

    res.json(newfriend);
})
