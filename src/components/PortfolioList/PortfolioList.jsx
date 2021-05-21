import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class PortfolioList extends Component {
  state = {
    listOfPortfolios: [],
  };

  getAllPortfolios = () => {
    axios.get('http://localhost:5000/api/portfolios')
    .then((responseFromApi) =>{
      console.log(responseFromApi.data)
      this.setState({
        listOfPortfolios: responseFromApi.data,
      });

    }).catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getAllPortfolios()

  }

  render() {
    
    return <div>
       <h1 className='intro'>Dive into our Talent</h1>
       <div className="container">
      <div className="section">

      {this.state.listOfPortfolios.map((portfolioItem) => {
        return (

<Link to={`/recruitment/${portfolioItem._id}`}> 
<div id="app" className="columns">

<div v-for="card in cardData"  className="column is-half" key={portfolioItem._id}>
            <div className="card large" >
              <div className="card-image">
                <figure className="image is-5by4">
                  <img src={portfolioItem.imageUrl} alt="profile-photo"/>
                </figure>

                </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                  </div>
                  <div className="media-content">
                    <p className="title is-4 no-padding">{portfolioItem.name}</p>
                      
                    <p className="subtitle is-6">{portfolioItem.role}</p>
                  </div>
                </div>
                <div className="content">
                  {portfolioItem.about}
                  <div className="background-icon"><span className="icon-twitter"></span></div>
                </div>
              </div>
            </div>
            </div>
            </div>        
          
</Link>
)

})}
</div>
</div>
</div>


  }
};

export default PortfolioList;


