import React from 'react';
import BlogEntry from '../blog-entry/Blog-Entry';
import './Content.css';

var Content = React.createClass({
  showContent: function () {
    switch (this.props.currentTab) {
      case 1:
        return (<div>
          <BlogEntry/>
          <BlogEntry/>
        </div>);
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