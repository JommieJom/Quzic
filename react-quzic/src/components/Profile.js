import React from 'react';
import './Profile.scss';
import defaultImg from '../img_avatar.png';


export class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        image: {defaultImg}
      };
      this.onImageChange = this.onImageChange.bind(this);
  
    }
    onImageChange = event => {
      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        this.setState({
          image: URL.createObjectURL(img)
        });
      }
    };
  
    render() {
      return (
        <div className="base-container-profile" ref={this.props.containerRef}>
          <div className="profile">PROFILE</div>
          <div className="profile-content">
            
            <div className="profile-image">
            <img src={this.state.image}/>
            <input type="file" name="myImage" onChange={this.onImageChange} />
            </div>
  
            <div className="profile-form">
              <div className="profile-form-group">
                <label>Username: </label>
              </div>
  
              <div className="profile-form-group">
                <label>Title: </label>
              </div>
  
              <div className="profile-form-group">
                <label>Registration Date: </label>
              </div>
  
              <div className="profile-form-group">
                <label>Rank: </label>
              </div>
  
            </div>
          </div>
          <div className="profile-footer">
            <button type="button" className="save-btn">
              SAVE
            </button>
          </div>
        </div>
      );
    }
  }

  export default Profile;
  