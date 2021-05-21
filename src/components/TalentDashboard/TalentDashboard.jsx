import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";



const TalentDashboard = ({ loggedInUser}) => {

    const [onlineUser, setOnlineUser] = useState(null);

    const service = new AuthService();
    useEffect(() => {
      setOnlineUser(loggedInUser);
    }, [loggedInUser]);

    return !onlineUser ? (
        <div>

<div className="hero-body">
                <div className="container has-text-centered">
                    <div className="column is-6 is-offset-3">
                        <h1 className="intro">
                        Welcome !
                        </h1>
                        <br/>
                        <h2 className="content">
                        and congratulations on completing your training! 🥳 Now, let's help you finding a job. To connect with talent scouters, please upload your resume. We will make sure you get the spotlight.
                        </h2>
                        <br/>
                        <Link to='/login'><button className='button is-primary'>Login to add resume</button></Link>
                    </div>
                </div>
            </div>
        </div>
    ) : (

<div className="hero-body">
    <div className="container has-text-centered">
    <div className="column is-6 is-offset-3">
     <h1 className="intro"> My dashboard
</h1>
        <br/>
<div>
<Link to='/add' className='content' style={{textDecoration: 'underline'}}>Add Resume</Link>
</div>
<br/>
<div>
<Link to='/my-portfolio' className='content' style={{textDecoration: 'underline'}}>View my resume</Link>
</div>
<br/>
<div>
<Link to='/portfolios' className='content' style={{textDecoration: 'underline'}}>View Talent Pool</Link>
</div>
<br/>
</div>
</div>
</div>

    )
}

export default TalentDashboard;


