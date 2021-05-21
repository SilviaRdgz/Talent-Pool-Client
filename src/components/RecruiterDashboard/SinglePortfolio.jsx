import React, { useState, useEffect } from 'react';
import PortfolioService from "../../services/PortfolioService";

const SinglePortfolio = (props) => {


const [details, setDetails] = useState({});


  const getSinglePortfolio = () => {
  const { id } = props.match.params;
  const service = new PortfolioService();
  service
    .getOnePortfolioForRecruiter(id)
    .then((responseFromApi) => setDetails(responseFromApi))
    .catch((error) => {
      console.error(error);
    });
};

useEffect(getSinglePortfolio, [props.match.params]);

    return (

  <div>
    <section className="hero is-link is-fullheight is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container">Hello! I am
        <h1 className="title is-1">
        {details.name}
        </h1>
        <h2 className="subtitle is-3">
        {details.role}
        </h2>
      </div>
    </div>
  </section>

  <section className="section" id="about">

    <div className="section-heading">
      <h3 className="title is-2">About Me</h3>
      <div className="container">
        <p>{details.about}</p>
      </div>
    </div>
        <br/>
        <br/>
    <div className="columns has-same-height is-gapless">
      <div className="column">
        <div className="card">
          <div className="card-content">
            <h3 className="title is-4">Profile</h3>

            <div className="content">
              <table className="table-profile">
                <tr>
                  <th colspan="1"></th>
                  <th colspan="2"></th>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{details.contact}</td>
                </tr>
              </table>
            </div>
            <br/>
            <div className="buttons has-addons is-centered">
            <span style={{marginRight:'3%'}}>
            <button href="#" className="button is-primary" >Github</button>
            </span>
            <span>
            <button href="#" className="button is-primary">LinkedIn</button>
            </span>
            </div>
          </div>
        </div>
      </div>
      <div className="column">

        <div className="card" style={{marginRight:'2%', marginLeft: '2%'}}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={details.imageUrl}  alt="Placeholder image"/>
            </figure>
          </div>
        </div>
      </div>
      <div className="column">

        <div className="card">
          <div className="card-content skills-content">
            <h3 className="title is-4">Skills</h3>
            <div className="content">

              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>JavaScript:</strong>
                      <br/>
                      <progress className="progress is-primary" value="90" max="100"></progress>
                    </p>
                  </div>
                  </div>
              </article>

              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>Vue.js:</strong>
                      <br/>
                      <progress className="progress is-primary" value="90" max="100"></progress>
                    </p>
                  </div>
                </div>
              </article>

              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>Node.js:</strong>
                      <br/>
                      <progress className="progress is-primary" value="75" max="100"></progress>
                    </p>
                  </div>
                </div>
              </article>

              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>HTML5/CSS3</strong>
                      <br/>
                      <progress className="progress is-primary" value="95" max="100"></progress>
                    </p>
                  </div>
                </div>
              </article>

              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>Databases</strong>
                      <br/>
                      <progress className="progress is-primary" value="66" max="100"></progress>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

   <br/>
        <div className="tags custom-tags">
          <span className="tag is-light">Node.js</span><span className="tag is-light">Express.js</span><span className="tag is-light">VueJS</span><span
            className="tag is-light">JavaScript</span><span className="tag is-light">HTML5</span><span className="tag is-light">Canvas</span><span
            className="tag is-light">CSS3</span><span className="tag is-light">Bulma</span><span className="tag is-light">Bootstrap</span><span
            className="tag is-light">jQuery</span><span className="tag is-light">Pug</span><span className="tag is-light">Stylus</span><span
            className="tag is-light">SASS/SCSS</span><span className="tag is-light">Webpack</span><span className="tag is-light">Git</span><span
            className="tag is-light">ASP.NET Web Forms</span><span className="tag is-light">MSSQL</span><span className="tag is-light">MongoDB</span><span
            className="tag is-light">Apache Cordova</span><span className="tag is-light">Chrome Extensions</span>
        </div> 

  <section className="section" id="services">
    <div className="section-heading">
      <h3 className="title is-2">Services</h3>
    </div>
    <br/>
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="box">
            <div className="content">
              <h4 className="title is-5">Front End Web Development</h4>
              Develop Front End using latest standards with HTML5/CSS3 with added funtionality using JavaScript and
              Vue.js.
            </div>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="content">
              <h4 className="title is-5">Back End Web Development</h4>
              Develop Back End application/service using Node.js or ASP .NET and SQL server or Mongo DB databases.
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>

  <section className="section" id="resume">
    <div className="section-heading">
      <h3 className="title is-2">Resume</h3>
      <a href="#">
        <span className="icon">
          <i className="fas fa-file-alt"></i>
        </span>
        <span className="button is-primary is-large">Download PDF</span>
      </a>
    </div>
  </section>

  
  <section className="section" id="contact">
    <div className="container">
      <div className="section-heading">
        <h3 className="title is-2">Get in touch</h3>
      </div>
      <br/>

      <div className="columns">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input className="input" type="email" value=""/>
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" ></textarea>
              </div>
            </div>

            <div className="field is-grouped has-text-centered">
              <div className="control">
                <button className="button is-primary is-medium">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  </div>
     
    )
}

export default SinglePortfolio;