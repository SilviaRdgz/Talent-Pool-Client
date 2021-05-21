
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoMotion from '../../images/TMU-logo-V02.png'
import AuthService from '../../services/AuthService.js';


class Home extends Component {
  state = { loggedInUser: null };
 
  service = new AuthService();
 
  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps['userInSession'] });
  }
 

  render() {

    if (this.state.loggedInUser) {

      return (

<div>
<div className="hero-body">
            <div className="container has-text-centered">
                <div className="columns is-vcentered">
                    <div className="column is-5">
                        <figure className="image is-4by3">
                            <img src={LogoMotion} alt="Description"/>
                        </figure>
                    </div>
                    <div className="column is-6 is-offset-1">
                        <h1 className="intro-title">
                        TALENT POOL
                        </h1>
                        <h2 className="headline">
                        Defining the next tech generation.
                        </h2>
                        <br/>
                        
                        <p className="has-text-centered">
                        
                        <Link to='/talent-dashboard' className='btn' style={{marginLeft:'1%'}}>I'm Talent</Link>
                        <Link to='/portfolios' className='btn'>I'm Recruiting </Link>
          
                        </p>
                    </div>
                </div>
            </div>
        </div>
  
</div>

        
      );

    } else {
      return (

        <div>
<div className="hero-body">
            <div className="container has-text-centered">
                <div className="columns is-vcentered">
                    <div className="column is-5">
                        <figure className="image is-4by3">
                            <img src={LogoMotion} alt="Description"/>
                        </figure>
                    </div>



                    
                    <div className="column is-6 is-offset-1">
                        <h1 className="intro">
                        TALENT POOL
                        </h1>
                        <h2 className="headline">
                        Defining the next tech generation.
                        </h2>
                        <br/>
                        <p className="has-text-centered">
                        <Link to='/talent-dashboard' className='btn' style={{marginLeft:'1%'}}>I'm Talent</Link>
                        <Link to='/portfolios' className='btn'>I'm Recruiting </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
  
</div>


      );
    }
    
  }
  
}

export default Home;




