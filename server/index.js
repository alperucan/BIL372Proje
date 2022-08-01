const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");   

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    
    user: "root", //kendi userın defaultu root
    host: "localhost",
    password: "a61a32u1998",  //kendi sifren
    database: "mydb", //kendi db name


});


app.post('/products', (req,res) => {
 
    const name = req.body.name;
    const releaseDate =  req.body.releaseDate;
    const rating =  req.body.rating;
    
    const imageUrl =  req.body.imageUrl;
    //console.log(imageUrl)
    //console.log(req);
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

app.delete('/delete/:id', (req,res) => {
 
    const id = req.params.id;
    console.log(req)
    db.query('DELETE * FROM product WHERE id=?',id,(err,result) => {

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