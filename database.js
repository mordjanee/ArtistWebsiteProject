// Step 1  MAke sure your postgres database is on

// Install pg npm i pg

//Connection code

const Client= require('pg').Pool

//const connectionString='postgressql://username:password@localhost:5432/databasename'
const connectionString='postgressql://mordjane:boudahmane3@localhost:5432/artistproject'

//Creating Client
const client= new Client({
    connectionString:connectionString
})
client.connect()






exports.client = client