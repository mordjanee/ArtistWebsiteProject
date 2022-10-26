const express = require('express')
const app = express();
const port = 7000;

///////////////////////////////////////////////////////////////
//SECTION 1 SENDING ALL THE WEB PAGE FILES STORED IN A DIRECTORY
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form/form.html");
});

//////////////////////////////////////////////////////////////
//SECTION 2 APP LISTENING ON THE SPECIFIED PORT 
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}!`)
});


//////////////////////////////////////////////////////////////