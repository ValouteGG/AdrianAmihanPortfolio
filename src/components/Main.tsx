import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import Avatar from '../assets/images/Avatar.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={Avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ValouteGG" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/adrian-philip-amihan-1b1a05361/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Adrian Philip V Amihan</h1>
          <p>Computer Science Major</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ValouteGG" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/adrian-philip-amihan-1b1a05361/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;