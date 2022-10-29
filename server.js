////////////////////////////Step 1 Rendering your html page////////////////////////////////////////////

const express=require('express');
const app=express();
const port= 9000;

const bodyParser=require('body-parser'); 
const database=require(__dirname+'/database')




app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render(__dirname + "/views/form.ejs",{test : "ok"});
});

app.post('/', (req, res)=> {
  let payload = req.body.payload.trim();
  res.render("form", {test:payload});
});


app.use(bodyParser.urlencoded({extended: false}))
app.get('/submit',function(req,res){
  console.log("Data Saved");
})


////////////////////////////Step 2 Connection with Postgres////////////////////////////////////////////

const {Pool,Client}= require('pg');

const connectionString='postgressql://mordjane:boudahmane3@localhost:5432/artistproject'


const client= new Client({
    connectionString:connectionString
})

////////////////////////////Step 3  Inserting the values////////////////////////////////////////////

app.post("/",(req,res)=>{
    const {f_name,mail,phone}=req.body
    client.connect()
    client.query('INSERT INTO form VALUES ($1, $2, $3)', [f_name, mail,phone], (err,res)=> {
        console.log(err,res);
        client.end() 
        //alert("Data Saved");
    })
   
    res.render(__dirname + "/views/form.ejs",{test:"test ici"});
  })


  /*app.get("/artists", (req, res) => {
    const sql = "SELECT * FROM Artists ORDER BY Name";
    pool.query(sql, [], (err, result) => {
      if (err) {
        return console.error(err.message);
      }
      res.render("artists", { model: result.rows });
    });
  });*/




app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port} !`)
  });

app.post('/connect',(req,res)=>{
  console.log(req.body.mail)
  res.render('\connect.ejs',{})
})

app.get("/login",(req, res) => {
  res.render("\admin.ejs")
})

app.get("/about",(req, res) => {
  res.render("\about.ejs")
})

app.get("/artists", (req, res) => {
  database.client.query('select * from artists', (err, res) => {
    console.log(err, res)
    //client.end()
})
  
});
