import axios from "axios";
import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import UploadService from "../../services/UploadService.js";
import PortfolioService from '../../services/PortfolioService';
import AuthService from '../../services/AuthService.js';

const initialState = {
  name: "",
  role: '',
  about: "",
  email: '',
  imageUrl: "",

};

const AddPortfolio = () => { 
  
  const [formState, setFormState] = useState(initialState);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const History = useHistory();
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const service = new PortfolioService(); 
    service
      .createPortfolio(formState)
      .then(() => {
        setFormState(initialState);
        History.push('/talent-dashboard')
        
      })
      .catch((err) => console.error(err));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0]

    const uploadData = new FormData();
    uploadData.append('imageUrl', event.target.files[0]);
    const service = new UploadService(); 
    service
      .handleUpload(uploadData)
      .then(response => {
        setFormState({...formState, imageUrl: response.secure_url });
      })
      .catch(err => {
        console.log('Error while uploading the file: ', err);
      });
  };


  return (
    <div>
      <div>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered"></div>

          <form className="box" onSubmit={handleFormSubmit}>
      <div className="field">
  <label className="label">Full Name</label>
  <div className="control">
    <input 
    className="input" 
    type="text" 
    name="name"
    value={formState.name}
    onChange={handleInputChange}
    required
    />
  </div>
</div>

<div className="field">
  <label className="label">Role</label>
  <div className="control">
    <input 
    className="input" 
    type="text"
    name="role"
    value={formState.role}
    onChange={handleInputChange}
    required
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
    value={formState.email}
    onChange={handleInputChange}
    required
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
    placeholder="Pitch yourself!"
    name="about"
    value={formState.about}
    onChange={handleInputChange} 
    required>
    </textarea>
  </div>
</div>

<br/>
<div className="file">
  <label className="file-label">
    <input 
    className="file-input" 
    type="file" 
    name="imageUrl"
    onChange={handleFileUpload}
    required

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
  {formState.imageUrl ? (
    
    <button  className='button is-link'>Submit</button>
    
  ) : (
    <button  className='button is-link' title="Disabled button" disabled>Submit
  </button>

  )
   }
  
  </div>
</div>
</form>
      </div>
      </div>
      </div>
      </div>
  ) 

};

export default AddPortfolio;