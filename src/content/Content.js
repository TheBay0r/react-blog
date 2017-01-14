import React from 'react';
import BlogEntry from '../blog-entry/Blog-Entry';

var Content = React.createClass({
  showContent: function () {
    switch (this.props.currentTab) {
      case 1:
        return (<BlogEntry/>);
      case 2:
        return (<div>Tab About</div>);
      default:
        return (<div>This is weird now!</div>);
    }
  },

  render: function () {
    return (
      <div className="content">
        {this.showContent()}
      </div>

    );
  }
});

export default Content;