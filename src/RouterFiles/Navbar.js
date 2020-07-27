import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CartContext } from '../RouterFiles/ContextApi'; 
const Navbar = () => {
  const { state: {cart} } = useContext(CartContext);
  return (
    <div>
      <header class="mb-2">
        <nav class="navbar navbar-expand-lg navbar-light bg-light nav-styles d-flex justify-content-around ">
      
        <Link to="/" class="navbar-brand " href="#">
            <img
              src="https://www.mrbrownbakery.com/media/wysiwyg/milano/default/png_brown_logo.png"
              width="250"
              height="42"
              alt="" className="img-fluid"
            />
          </Link>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
         
          <Link to='/' class="nav-link text-warning mx-5 px-5" href="#">
            Home
          </Link>
          <Link to="/Cakes" class="nav-link mx-5 px-5 text-warning" href="#">
            Cakes
          </Link>
          <Link to="/Breads" class="nav-link text-warning mx-5 px-5" href="#">
            Breads
          </Link>
          <Link to="/CreamlessCakes" class="nav-link text-warning mx-5 px-5" href="#">
            CreamlessCakes
          </Link>
          <Link to="/Cart" class="nav-link mx-5 px-5 text-warning" href="#">
          <span class="material-icons"></span> Cart({cart.length})
          </Link>
          
          </div>
                        
        </nav>
      </header>

    

    </div>
  );
};

export default Navbar;
