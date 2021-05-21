import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Logo from '../../images/Webp.net-resizeimage.png'
import AuthService from '../../services/AuthService.js';

import 'bulma/css/bulma.css';

const Navbar = ({ userInSession, setUser }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const service = new AuthService();
  // KEEP AN EYE ON THE UPDATES OF THIS COMPONENT'S PROPS
  useEffect(() => {
    setLoggedInUser(userInSession);
  }, [userInSession]);

  // FUNCTION TO LOG USER OUT
  const logoutUser = () => {
    service
      .logout()
      .then(() => {
        setLoggedInUser(null);
        setUser(null);
      })
      .catch((err) => console.error(err));
  };

  return loggedInUser ? (
    <nav className="navbar is-transparent">
             <div className="navbar-brand">
             <Link to='/'>
             <a className="navbar-item" href="#">
             <img src={Logo} width="163px" height="77px"/>
             </a>
             </Link>
               </div>
             <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
            
              <button className="button is-primary">
                  <strong>
                  <Link to={'/talent-dashboard'}>Dashboard</Link>
                 </strong>
               </button>
               <button className="button is-light">
                <Link to='/login'>Login</Link>
              </button>  
                <Link to='/'>
               <button className="button is-light" onClick={() => logoutUser()}>Logout</button>
               </Link>  
               
                </div>
                </div>
                </div>
                <div>
              </div>
    </nav>
                
         ) : (

          <nav className="navbar is-transparent">
          <div className="navbar-brand">
          <Link to='/'>
             <a className="navbar-item" href="#">
             <img src={Logo} width="163px" height="77px"/>
             </a>
             </Link>
         
            </div>
            <div className="navbar-end">
         <div className="navbar-item">
           <div className="buttons">
             <button className="button is-primary" >
               <strong>
               <Link to='/signup'>SignUp</Link>
               </strong>
             </button>
             <button className="button is-light">
             <Link to='/login'>Login</Link>
             </button>
          </div>
          </div>
          </div>
          </nav>
        
        );
      }

export default Navbar;