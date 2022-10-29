const express = require('express')
const app = express();
const port = 7000;

app.set("view engine", "ejs");

const knex= require('knex')({
    client: 'pg',
    connection:{
        user: 'mordjane',
        host: 'localhost',
        database: 'artistproject',
        password: 'boudahmane3',
        port:5432
    }
})


/*app.get("/form", (req, res)=>{
    knex.select().from("artists").then((results) =>{
        res.render("form.ejs", {aShoes: results});
    })
});*/

///////////////////////////////////////////////////////////////
//SECTION 1 SENDING ALL THE WEB PAGE FILES STORED IN A DIRECTORY
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.render(__dirname + "/views/form.ejs");
});


///////////un test_

app.get("/login",(req, res) => {
  res.render(__dirname + "/views/admin.ejs")
});

app.post('/connect',(req,res)=>{
  console.log(req.body.mail)

  res.render(__dirname + '/views/connect',{})
});

//VIEW JS
app.set("view engine", "ejs");
const path = require("path");

app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  // res.send("Bonjour le monde...");
  res.render("index");
});
//////////////////////////////////////////////////////////////
//SECTION 2 APP LISTENING ON THE SPECIFIED PORT 
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}!`)
});


//////////////////////////////////////////////////////////////