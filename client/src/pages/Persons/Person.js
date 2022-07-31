import React from "react";
import "./Person.css"
import { useState } from "react";

const Person = () =>
{
    const[pname,setPName] = useState("");
    const[lname,setLName] = useState("");

    const[sex,setSex] = useState("");
    
    const[bdate,setBDate] = useState(0);
    
    
  
    return (
        <div class="box">
        <form>
            
            <div class="input-container">
                <input type="text" onChange={(event) => {setPName(event.target.value)}} required=""/>
                <label>First Name </label>		
            </div>
            <div class="input-container">
                <input type="text" onChange={(event) => {setLName(event.target.value)}} required=""/>
                <label>Last Name</label>		
            </div>
            <div class="input-container">
                <input type="text" onChange={(event) => {setSex(event.target.value)}} required=""/>
                <label>Sex</label>		
            </div>
            <div class="input-container">		
                <input type="text" onChange={(event) => {setBDate(event.target.value)}} required=""/>
                <label>Birth Date</label>
            </div>
                <button type="button"  class="btn">Add Person</button>
        </form>	
    </div>

    )

}

export default Person