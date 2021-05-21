import React, { useState } from "react";
import './App.css';
import 'bulma/css/bulma.css';
import { Switch, Route, Redirect } from "react-router-dom";
import AuthService from './services/AuthService';
import ProtectedRoute from "./components/Auth/ProtectedRoutes";
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import SignUp from './components/Auth/SignUp.jsx';
import LogIn from './components/Auth/Login.jsx';
import PortfolioDetails from './components/CRUD/PortfolioDetails.jsx';
import AddPortfolio from './components/CRUD/AddPortfolio.jsx';
import EditPortfolio from './components/CRUD/EditPortfolio.jsx';
import SinglePortfolio from "./components/RecruiterDashboard/SinglePortfolio";
import TalentDashboard from './components/TalentDashboard/TalentDashboard.jsx'
import PortfolioList from "./components/PortfolioList/PortfolioList";



function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);

  const service = new AuthService();

  // CHECK IF USER IS LOGGED IN BY CONFIRMING WITH THE BACKEND
  const fetchUserFromBE = () => {
    if (loggedInUser === null) {
      service
        .isLoggedIn()
        .then((response) => {
          setLoggedInUser(response);
        })
        .catch((err) => {
          setLoggedInUser(false);
        });
    }
  };

  // SET THE GLOBAL APP STATE WITH THE LOGGED IN USER
  const setTheUserToGlobalState = (userObj) => setLoggedInUser(userObj);

  // CALL THE AUTHENTICATION CHECK EVERY TIME THE APP LOADS
  fetchUserFromBE();


  return loggedInUser ? (

    <div className='App'>
    <Navbar userInSession={loggedInUser} setUser={setTheUserToGlobalState}/>
   
    <Switch>
    <Route exact path="/login" render={() => <Redirect to='/talent-dashboard' />}/>
    <Route exact path="/signup" render={() => <Redirect to='/talent-dashboard' />}/>


    <ProtectedRoute 
    user={loggedInUser}
    exact path="/talent-dashboard" 
    component={TalentDashboard} >
    </ProtectedRoute>

    <Route exact path="/my-portfolio" render={() => <Redirect to={`/portfolios/${loggedInUser._id}`} />}/>


    <ProtectedRoute
    user={loggedInUser} 
    exact path="/add"
    component={AddPortfolio}>
    </ProtectedRoute>

    <ProtectedRoute
    user={loggedInUser} 
    exact path="/edit-portfolio"
    component={EditPortfolio}>
    </ProtectedRoute>

    <ProtectedRoute 
    user={loggedInUser}
    exact path="/portfolios/:id"
    component={PortfolioDetails}>
    </ProtectedRoute>

    <Route exact path="/portfolios" component={PortfolioList} />
    <Route exact path="/" component={Home} />
    <Route exact path="/recruitment/:id" component={SinglePortfolio} />


    </Switch>
    </div>
  ) : (
    
    <div className="App">
      <Navbar userInSession={loggedInUser} setUser={setTheUserToGlobalState} />
      
      <Switch>
      <Route
          path="/signup"
          render={() => <SignUp setUser={setTheUserToGlobalState} />}
         
        />
        <Route
          path="/login"
          render={() => <LogIn setUser={setTheUserToGlobalState} />}
        />
      <Route exact path="/" component={Home} />

      <Route 
    exact path="/portfolios/:id"
    component={PortfolioDetails}>
    </Route>
    <Route exact path="/portfolios" component={PortfolioList} />
    <Route exact path="/recruitment/:id" component={SinglePortfolio} />

    <Route exact path="/talent-dashboard" component={TalentDashboard} />


    
    </Switch>
    
    </div>
  
  );
}

export default App;


