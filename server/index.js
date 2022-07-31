const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");   

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    user: "", //kendi userın defaultu root
    host: "",
    password: "",  //kendi sifren
    database: "", //kendi db name


});


app.post('/products', (req,res) => {
 
    const name = req.body.name;
    const releaseDate =  req.body.releaseDate;
    const rating =  req.body.rating;
    const trailerUrl =  req.body.trailerUrl;
    //console.log(req);
    db.query('INSERT INTO product (name, rating,release_date,trailer_url) VALUES (?,?,?,?)',
        [name,rating,releaseDate,trailerUrl] , 
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

app.listen(3001,()=>{

    console.log("Connection succeed")
});