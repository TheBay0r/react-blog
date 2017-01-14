import React from 'react';
import './SM-Header.css';
import linkedin from '../../media/vector/sm_logo_linkedin.svg';
import twitter from '../../media/vector/sm_logo_twitter.svg';
import xing from '../../media/vector/sm_logo_xing.svg';


var SMHeader = React.createClass({
  render: function() {
    return (
      <div className="sm-header">
        <div className="logo-container">
          <a href="https://twitter.com/TheBay0r">
            <img src={twitter} className="sm-logo" alt="Twitter Social Media Icon"/>
          </a>
          <a href="https://www.xing.com/profile/Stefan_Schacherl3">
            <img src={xing} className="sm-logo" alt="Xing Social Media Icon"/>
          </a>
          <a href="https://at.linkedin.com/in/stefan-schacherl-b75633a7">
            <img src={linkedin} className="sm-logo" alt="LinkedI Social Media Icon"/>
          </a>
        </div>
      </div>
    );
  }
});

export default SMHeader;