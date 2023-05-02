import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/navbar.css";
import Logo from './Logo';

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          {/* <img src="./logo-chef.jpg" classNameName='logo'></img> */}
          <Logo/>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >   
              <li className="listyle">
              <NavLink className={"navigations  active"}  to="/">
                      ACCUEIL
                  </NavLink>
              </li>
              <li className="listyle">
                  <NavLink className={"navigations"} to="/recettes">
                      RECETTES
                  </NavLink>
              </li>
              <li className="listyle">
              <NavLink  className={"navigations"} to="/contact">
                      CONTACT
                  </NavLink>
               
              </li>
             
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}
  

export default Navbar;
