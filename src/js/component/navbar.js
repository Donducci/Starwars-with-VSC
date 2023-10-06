import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const {store, actions}= useContext (Context)
	return (
    
		<nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">
		<img style={{"width": "5rem"}} src="https://pngimg.com/d/star_wars_logo_PNG34.png"/>
	</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </a>
          <ul className="dropdown-menu">
          {store.favorites.map ((item, index) => {
            return(
            <li><a className="dropdown-item" href="#">{item.name}</a></li>
        )})}
          </ul>
        </li>
        
      </ul>
        
      
    </div>
  </div>
</nav>
	);
};
