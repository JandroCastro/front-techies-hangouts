import React from "react";
import logoLinkedin from "../img/linkedin.svg"
import logoFacebook from "../img/facebook.svg"
import logoTwitter from "../img/twitter.svg"
import logoInstagram from "../img/instagram.svg"

export function ProfileInfo() {
  return (
    <React.Fragment>
      <div>
        <ul className="infoperfil">
          <li>Category</li>
          <li>Edad</li>
          <li>Position</li>
          <li>AboutMe</li>
        </ul>
      </div>
      <div id="enlacesRRSS">
      <li> <a  href="https://www.instagram.com/">
        <img src={logoInstagram} alt="logo insta"/>
        </a></li>
        <li>
          <a href="https://www.linkedin.com/">
            <img src={logoLinkedin}alt="logo linkedin" />
          </a>
          </li>
          <li>
      <a href="https://www.facebook.com/">
       <img src={logoFacebook} alt="logo facebook"/>
       </a>
      </li>
      <li><a href="https://www.twitter.com/">
        <img src={logoTwitter} alt="logo twitter"/>
        </a></li>
        
      </div>
    </React.Fragment>
  );
}
