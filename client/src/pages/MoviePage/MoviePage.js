import React , { useEffect } from "react";
import "./MoviePage.css"
import { useState } from "react";
//import {getProductId} from "../Product/product"
import Axios from 'axios'

const MoviePage = () =>{
    const[productList,setProductList] = useState([]);

    const[movieIdd,setMovieId]=useState(0);
    //setMovieId(getProductId)
    console.log(movieIdd)
    const getProducts =() =>{

        Axios.get('http://localhost:3001/allproducts').then((response) => {
            setProductList(response.data);
            //console.log(response.data);

        });
    };
    useEffect(() => {
        getProducts();
    }, [])
    return(
            <div>
                <form>

                    <div className="input-container">
                        <input type="text" onChange={(event) => {
                            setRating(event.target.value)
                        }} required=""/>
                        <label>Rating </label>
                    </div>
                    <div className="input-container">
                        <input type="text" onChange={(event) => {
                            setText(event.target.value)
                        }} required=""/>
                        <label>Text</label>
                    </div>

                    <button type="button" className="btn">Addhbfdghfdhdgfd Review</button>
                </form>
            </div>


    )
}
export default MoviePage


