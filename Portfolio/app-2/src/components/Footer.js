import React from 'react';
import { faGithub} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="w-100 mt-auto text-dark p-4">
        <div className="container text-center mb-5">
          <a href='https://github.com/CassNoisette' target="_blank">
            <FortAwesomeIcon icon={faGithub} className="logo"/>
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  