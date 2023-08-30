var app = require('express')
var express = require('express')  
var app = express()

app.use(express.static("public"))

app.get("/registration", function (req, res){
    res.sendFile(__dirname + "/public/" + "registration.html")
})

var admin = require("firebase-admin");

var serviceAccount = require("./key.json");

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore} = require('firebase-admin/firestore');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();

app.get("/reg", function (req, res){
    db.collection('tarun').add({
       FullName: req.query.username,
       Email: req.query.email,
       Password: req.query.password
    })
    .then(()=>{
        res.redirect("/login.html")
    })
})

app.get("/login", function (req, res){
    res.sendFile(__dirname + "/public/" + "login.html")
})

app.get("/signin", function (req, res){
    db.collection('tarun')
    .where("Email", "==", req.query.email)
    .where("Password", "==", req.query.password)
    .get()
    .then((data)=>{
        if(data.empty){
            res.send("not Successful")
        }
        else{
            res.redirect("/web.html")
        }
    })
})
app.listen(3000, function () {  
console.log('Example app listening on port 3000!');
})



  


