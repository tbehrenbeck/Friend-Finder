var path = require("path");

//---HTML ROUTES----

function htmlRoutes(app) {        
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
};

module.exports = htmlRoutes;
