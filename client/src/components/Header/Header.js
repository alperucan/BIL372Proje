import React from "react";
import "./Header.css"
import {Link} from "react-router-dom"

const Header = () =>
{
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://w7.pngwing.com/pngs/970/565/png-transparent-movie-projector-film-cinema-cine-angle-photography-logo.png" /></Link>
                <Link to="/products" style={{textDecoration: "none"}}><span>Products</span></Link>
                <Link to="/reviews" style={{textDecoration: "none"}}><span>Reviews</span></Link>
                <Link to="/persons" style={{textDecoration: "none"}}><span>Persons</span></Link>
                <Link to="/users" style={{textDecoration: "none"}}><span>User Profile</span></Link>
                <div >
                    <Link to="/login" style={{textDecoration: "none"}}><span>Login</span></Link>
                    <Link to="/register" style={{textDecoration: "none"}}><span>Register</span></Link>
                </div>

            </div>
            
        </div>  

    )

}
export default Header