import React from "react";
import "./product.css"
import { useState } from "react";
import Axios from 'axios'


const Product = () =>
{
    const[name,setName] = useState("");

    const[releaseDate,setReleaseDate] = useState("");
    
    const[rating,setRating] = useState(0);
    
    const[trailerUrl,setTrailerUrl] = useState("");
    
    const addProduct = () =>
    {

        Axios.post('http://localhost:3001/products',{name:name,releaseDate:releaseDate,rating:rating,trailerUrl:trailerUrl})
        .then(()=>{
            
            console.log(name+ " "+ releaseDate+ " "+ rating + " " + trailerUrl +" success");
        });
    }
   
    return (
        <div class="box">
        <form>
            
            <div class="input-container">
                <input type="text" onChange={(event) => {setName(event.target.value)}} required=""/>
                <label>Name</label>		
            </div>
            <div class="input-container">
                <input type="text" onChange={(event) => {setReleaseDate(event.target.value)}} required=""/>
                <label>Release Date</label>		
            </div>
            <div class="input-container">
                <input type="text" onChange={(event) => {setRating(event.target.value)}} required=""/>
                <label>Rating</label>		
            </div>
            <div class="input-container">		
                <input type="text" onChange={(event) => {setTrailerUrl(event.target.value)}} required=""/>
                <label>Trailer URL</label>
            </div>
                <button type="button" onClick={addProduct} class="btn">Add Product</button>
                
                
        </form>	
    </div>

    )

}

export default Product