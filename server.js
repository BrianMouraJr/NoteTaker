const express = require('express');
const app = express();
const PORT = 3001;
const htmlRoutes = require('./routes/htmlroutes')
const apiRoutes = require('./routes/apiroutes')

// top to bottom, html routes on bottom else catchall line blocks /api,apiroutes 
app.use(express.json());
app.use(express.urlencoded({extended:true})) //encode special characters so that its readable to the server
app.use(express.static("public")) //server telling web browser what folder to treat as root, look for index.html here
app.use("/api",apiRoutes)
app.use(htmlRoutes)


app.listen(PORT, () => 
console.log(`Listening at http://localhost:${PORT}`));


