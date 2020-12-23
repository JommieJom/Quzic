import React from 'react';
import './user-profile.scss';
import { Profile } from './index-userprofile';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  render() {
    const { isLogginActive } = this.state;
    return (
      <div className="UserProfile">
        <div className="userprofile">
          <div className="container-userprofile" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Profile containerRef={ref => (this.current = ref)} />
            )}
            
          </div>
          
        </div>
      </div>
    );
  }
}



export default UserProfile;