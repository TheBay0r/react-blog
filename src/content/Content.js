import React from 'react';
import BlogEntry from './blog/blog-entry/Blog-Entry';
import About from './about/About';
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
        return (<About/>);
      default:
        return (<div>This is weird now!</div>);
    }
  },

  render: function () {
    return (
      <div>
        {this.showContent()}
      </div>

    );
  }
});

export default Content;