# Friend-Finder
"Friend Finder" a compatibility-based application. This full-stack site will take in results from users input, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## Live Link
```
insert link
```

## About
-Server.js file sets up the Express server, specifying the port number, the npm packages that need to be loaded, and also the routes, which we have externalized.
-There are 2 separate HTML files (home.html and survey.html) that serve as the front-end portion of the code.
-Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object.
-Finally a modal is then toggled, displaying the the best match to the person who just took the survey

## Technologies Used 
- HTML
- Bootstrap
- Javascript
- node.js
- Express.js
- jQuery

