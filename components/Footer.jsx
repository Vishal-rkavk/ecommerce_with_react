import React from 'react';
import { AiFillInstagram, AiOutlineTwitter,AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 VR Electronics All rights reserverd</p>
      <p className="icons">
         <a href="https://www.instagram.com/vishalreddy.in/">
          <AiFillInstagram className="icon" size={30} />          
        </a>
        <a href="https://twitter.com/Vishalreddy123">
          <AiOutlineTwitter className="icon" size={30} />          
        </a>
        <a href="https://www.linkedin.com/in/vishal-/">
          <AiFillLinkedin className="icon" size={30} />          
        </a>
      </p>
    </div>
  )
}

export default Footer