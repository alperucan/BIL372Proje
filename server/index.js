const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");   

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({

    user:'root',
    host:'localhost',
    password:'a61a32u1998',
    database: "mydb", //kendi db name


});


app.post('/products', (req,res) => {
 
    const name = req.body.name;
    const releaseDate =  req.body.releaseDate;
    const rating =  req.body.rating;
    
    const imageUrl =  req.body.imageUrl;
    //console.log(name)
    console.log(req);
    db.query('INSERT INTO product (name,rating,release_date,image_url) VALUES (?,?,?,?)',
        [name,rating,releaseDate,imageUrl] ,
        (err,result) => {

            if(err)
            {
                console.log(err)
            }else
            {
                res.send("Values Inserted");
            }
        }
         )
}) ;

app.post('/productReview', (req,res) => {
 
    const text = req.body.text;
    const ID = req.body.Id;

    //user ıd cekilip alıncak
    const U_ID =1;
    console.log(req)
    db.query('INSERT INTO review (U_ID,ID,Text) VALUES (1,?,?)',
        [U_ID,text,ID] ,
        (err,result) => {

            if(err)
            {
                console.log(err)
                console.log(text + ID + U_ID)
            }else
            {
                res.send("Values Inserted");
            }
        }
         )
}) ;
 app.post('/persons', (req,res) => {
 
    const Pname = req.body.Pname;
    const Lname = req.body.Lname;
    const Sex = req.body.Sex;
    const Bdate = req.body.Bdate;
   
    //console.log(imageUrl)
    //console.log(req);
    db.query('INSERT INTO person (Pname,Lname,Sex,Bdate) VALUES (?,?,?,?)',
        [Pname,Lname,Sex,Bdate] ,
        (err,result) => {

            if(err)
            {
                console.log(err)
            }else
            {
                res.send("Values Inserted");
            }
        }
         )
}) ; 

app.get('/allproductReview', (req,res) => {
   
    db.query('SELECT * FROM review ',(err,result) => {

        if(err)
        {
            console.log(err)
        }else
        {
            res.send(result);
        }
    } )
    
  /*   db.query('SELECT * FROM review WHERE ID = ? ',[req.body.Id],(err,result) => {

        if(err)
        {
            console.log(err)
        }else
        {
            res.send(result);
        }
    } )
 */
})



app.get('/allproducts', (req,res) => {
 
    
    db.query('SELECT * FROM product ',(err,result) => {

        if(err)
        {
            console.log(err)
        }else
        {
            res.send(result);
        }
    } )

})


app.get('/allpersons', (req,res) => {
 
    
    db.query('SELECT * FROM person ',(err,result) => {

        if(err)
        {
            console.log(err)
        }else
        {
            res.send(result);
        }
    } )

})




app.delete('/delete/:Id', (req,res) => {

    console.log(req.params.Id)
    db.query('DELETE FROM product WHERE Id = ?',req.params.Id,(err,result) => {

        if(err)
        {
            console.log(err)
        }else
        {
            res.send(result);
        }
    } )

})

app.listen(3001,()=>{

    console.log("Connection succeed")
});