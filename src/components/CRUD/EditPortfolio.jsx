import React, { Component, useHistory } from "react";
import UploadService from '../../services/UploadService.js'
import PortfolioService from "../../services/PortfolioService";

const initialState = {
  name: "",
  role: '',
  about: "",
  email: '',
  imageUrl: "",
};

class EditPortfolio extends Component {
    state = {
      name: this.props.location.state.portfolio.name,
      about: this.props.location.state.portfolio.about,
      role: this.props.location.state.portfolio.role,
      email: this.props.location.state.portfolio.email,
      imageUrl: '',
      disableSubmitButton: false
  } 

  // HANDLE INPUT CHANGES
  handleInputChanges = (event) => {
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  // HANDLE FORM SUBMISSION
  handleFormSubmit = (event) => {
    event.preventDefault();
    const service = new PortfolioService();
    const { name, about, role, email, imageUrl } = this.state;
    const { _id, imageUrl: existingImageUrl } = this.props.location.state.portfolio;

    let data = {name, about, role, email}


    if(imageUrl) {
      data.imageUrl = imageUrl;
    } else {
      data.imageUrl = existingImageUrl;
    }

    service.updatePortfolio(_id, data)
    .then((response) => {
      console.log("response", response)
      this.setState(initialState);
     
    })
    .catch(err => console.error(err))

  };


   handleFileUpload = (event) => {
    const file = event.target.files[0]
    
    this.setState({...this.state, disableSubmitButton: true})

    const uploadData = new FormData();
    uploadData.append('imageUrl', event.target.files[0]);
    const service = new UploadService(); 
    service
      .handleUpload(uploadData)
      .then(response => {
        this.setState({...this.state, imageUrl: response.secure_url, disableSubmitButton: false });
      })
      .catch(err => {
        console.log('Error while uploading the file: ', err);
      });
  };


  render() {
    return this.props.location.state && (
      <div>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered"></div>

          <form className="box" onSubmit={this.handleFormSubmit}>
      <div className="field">
  <label className="label">Full Name</label>
  <div className="control">
    <input 
    className="input" 
    type="text" 
    placeholder="Text input"
    name="name"
    value={this.state.name}
    onChange={(e) => this.handleInputChanges(e)}
    />
  </div>
</div>

<div className="field">
  <label className="label">Role</label>
  <div className="control">
    <input 
    className="input" 
    type="text" 
    placeholder="Text input"
    name="role"
    value={this.state.role}
    onChange={(e) => this.handleInputChanges(e)}
    />
  </div>
</div>

<div className="field">
  <label className="label">Email</label>
  <div className="control has-icons-left has-icons-right">
    <input 
    className="input is-info" 
    type="email" 
    placeholder="@"
    name="email"
    value={this.state.email}
    onChange={(e) => this.handleInputChanges(e)}
     />
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-exclamation-triangle"></i>
    </span>
  </div>
</div>

<div className="field">
  <label className="label">About me</label>
  <div className="control">
    <textarea 
    className="textarea" 
    placeholder="Textarea"
    name="about"
    value={this.state.about}
    onChange={(e) => this.handleInputChanges(e)}
    ></textarea>
  </div>
</div>
<br/>
<div className="file">
  <label className="file-label">
    <input 
    className="file-input"
    type="file" 
    name="imageUrl"
    onChange={(e) => this.handleFileUpload(e)}
      
     />
    <span className="file-cta">
      <span className="file-icon">
        <i className="fas fa-upload"></i>
      </span>
      <span className="file-label">
        Choose a profile photo…
      </span>
    </span>
  </label>
</div>
<br/>
<div className="field is-grouped">
  <div className="control">
  {this.state.disableSubmitButton ? (
    <button className="button is-link" title="Disabled button" disabled>Submit</button>
  ) : (
    <button className="button is-link">Submit</button>
  )
  }
  </div>
  <div className="control">
    <button className="button is-link is-light">Cancel</button>
  </div>
</div>
</form>
      </div>
      </div>
      </div>
    );
  }
}

export default EditPortfolio;