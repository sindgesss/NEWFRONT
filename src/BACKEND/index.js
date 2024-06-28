const express=require('express');
const app=express();
const cors=require('cors');
const {MongoClient} = require('mongodb');


let user=[]
let db='';
app.use(cors());
app.use(express.json());
//let usey=[{"name":"john",'email':"hello@gmai.com",'userName':"johny"},{"name":"vishnu",'emil':"vishnu.cse21@gmail.com",'userName':"hello"},{'name':'sooraj','email':'sooraj@gmail.com','username':'sooraj'}]
//let p=[{"Product_name":"car","description":"A car is a vehicle used for travelling.","Pname":"BMW"}]



async function mongoConnect() {
    let client = new MongoClient('mongodb+srv://anshif:nesRoWgW5SqAD0yF@cluster0.8dtglzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    await client.connect();
    db = client.db('test');
   ;
 }

 app.get('/users', async function (req, res) {
    let output = await db.collection('user').find({"username":"v"},{"passward":"1"}).toArray();
    res.json(output);
});

//app.post('/navbaar', function(req, res) {
  //  console.log(req.body);
  //  user.push(req.body);
//});
app.post('/login', async function (req, res) {
    console.log(req.body);
    let output = await db.collection('user').find({"username": req.body.username}).toArray();
     console.log(output);
     if(output.length == 0) {
        return  res.json('username not found')
     } else {
        if(output[0].passward == req.body.passward) {
            return res.json(output[0])
        }
        return res.json('username not found')
     }


});
app.post('/navbaar', async function(req, res) {
    let output = await db.collection('user').insertOne(req.body);
    console.log(req.body);
})


app.get('/users',function(req,res){

    res.json((user))

})
//app.get('/car',function(req,res){
  //  res.json(p)
//});


//app.post('/navbaar',function(req,res){
  //  console.log(req.body);
   // user.push(req.body);
//});
//app.listen(5001,function(){
  //  console.log("listening on port 5001");
//})

app.listen(5004, function() {
    console.log('server is ready, listening on port 5004');
    mongoConnect();
});