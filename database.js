// Step 1  MAke sure your postgres database is on

// Install pg npm i pg

//Connection code

const {Pool,Client}= require('pg')

//const connectionString='postgressql://username:password@localhost:5432/databasename'
const connectionString='postgressql://luis_s5_progweb:azertyuiop^$*@localhost:5432/indiangirltest'

//indiangirltest is a database
//indiangirltest=# \c indiangirltest luis_s5_progweb;
//Mot de passe pour l'utilisateur luis_s5_progweb :
//Vous êtes maintenant connecté à la base de données « indiangirltest » en tant qu'utilisateur « luis_s5_progweb ».



//Creating Client
const client= new Client({
    connectionString:connectionString
})

client.connect()
client.query('select * from stud;', (err, res) => {
    console.log(err, res)
    //client.end()
})

//client.connect()
client.query("insert into stud values (22, 'lola');", (err, res) => {
    console.log(err, res)
    //client.end()
})

//client.connect()
client.query('select * from stud;', (err, res) => {
    console.log(err, res)
    client.end() // client.end() has to be in the client.query !!!!!!!!!!!!!!!!!
})

