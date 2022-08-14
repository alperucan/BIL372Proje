
import './App.css';
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom"
import Header from './components/Header/Header'
import Home from "./pages/home/home"
import Product from "./pages/Product/product"

import Person from "./pages/Persons/Person"
import User from "./pages/Users/user"
import Review from "./pages/Reviews/Review"
import MoviePage from "./pages/MoviePage/MoviePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
///TODO
//<Route path="movie/create" element={<h1>Movie add page</h1>}> </Route>
//<Route path="movie/read" element={<h1>Movie search page</h1>}> </Route>
//<Route path="movie/update" element={<h1>Movie update page</h1>}> </Route>
//<Route path="movie/delete" element={<h1>Movie delete page</h1>}> </Route>

function App() {
  return (
    <div className="App">
        <Router>

          <Header />
         
            <Routes>
                  <Route index element={<Home/>}> </Route>
                  <Route path="products" element={<Product/>}> </Route>
                  <Route path="persons" element={<Person/>}> </Route>
                  <Route path="users" element={<User/>}> </Route>
                  <Route path="reviews" element={<Review/>}> </Route>
                  <Route path="login" element={<Login/>}> </Route>
                  <Route path="register" element={<Register/>}> </Route>
                  <Route path="products/:id" element={<MoviePage/>}></Route>
                  <Route path="/*" element={<h1>Error page</h1>}> </Route>
            </Routes>

        
            
        </Router>  
    </div>
  );
}

export default App;
