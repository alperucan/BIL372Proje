import React , { useEffect } from "react";
import "./MoviePage.css"
import { useState } from "react";
//import {getProductId} from "../Product/product"
import Axios from 'axios'

const MoviePage = () =>{
    //console.log(window.location.pathname)
    var url = window.location.pathname
    var Movie_ID = url.split("/")[2]
    
    console.log("MMMM ID " +Movie_ID) 

    const[U_Id,setU_Id] = useState("");
    const[ID,setID] = useState("");
    const[P_Id,setP_Id] = useState("");
    const[Text,setText] = useState("");
    const[Date,setDate] = useState(""); 

    const[reviewList,setReviewList] = useState([]);
    const addReviewCurrentMovie = () =>
    {
        
        Axios.post("http://localhost:3001/productReview",{Text:Text,ID:Movie_ID})
        .then(()=>{
            //hemen eklemiyor 
            setReviewList(
                [...reviewList,
                {
                   
                    Text:Text,
                    Movie_ID:ID
                   
                },
            ]);
        });
        console.log("Text: " + Text)
        console.log("Movie_Id: " + ID)
    }
   




    const getReviews = () =>
    {

        Axios.get(`http://localhost:3001/allproductReview`).then((response) => {
            setReviewList(response.data);
            //console.log(response.data);
            
        });
    }
    
    useEffect(() => {
        setID(Movie_ID)
        getReviews();
     }, []) 
     
    return(
            <div>
                <form>
                    <div className="input-container">
                        <input type="text" 
                            onChange={(event) => {setText(event.target.value)}}
                         required=""/>
                        <label>Text</label>
                    </div>

                    <button type="button" onClick={addReviewCurrentMovie} className="btn">Add Review</button>
                </form>

            
            <div class="container" >
            
            {
            reviewList.map( (val) =>
                {
                console.log("val.ID: " +val.ID + "Movie ID " + Movie_ID)
                if(val.ID == Movie_ID)   {
                    return (
                        
                        <div  class="movie-card" >
                            
                            <div >
                            

                                <div class="movie-content">
                                    <div class="movie-content-header">
                                        
                                        <h3 class="movie-title">User Id : {val.U_ID} </h3>
                                    
                                    </div>
                                    <div class="movie-info">
                                        
                                        <div class="info-section">
                                            <label>Yorum</label>
                                            <span>{val.Text}</span>
                                        </div>
                                
                                    </div>
                                </div>
                                <button class="btn">Update</button>
                                <button class="btn">Delete</button>
                            </div>
                        </div>
                        
                        );
            
                    }
                }
                    )
                
            }
            
        </div>
            
            </div>


    )
}
export default MoviePage


