import React from 'react';
import SMHeader from './sm-header/SM-Header';
import './Header.css';

var Header = React.createClass({
  render: function () {
    return (
      <div className="header">
        <SMHeader/>
        <div>
          <h2>Stefan "Der Bayer" Schacherl</h2>
          <h6>( der Bayer => the bavarian => thebay0r )</h6>
          <h4>agile tester, bdd advocate, problem analyst</h4>
        </div>
      </div>
    );
  }
});

export default Header;