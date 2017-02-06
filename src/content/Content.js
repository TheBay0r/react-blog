import React from 'react';
import BlogEntry from './blog/blog-entry/Blog-Entry';
import About from './about/About';
import './Content.css';
import BlogEntriesContent from '../statics/blog-entries';

var Content = React.createClass({
  showForEachBlogEntry: function () {
    let entriesList = BlogEntriesContent();

    return entriesList.map(entry => (
      <BlogEntry
        key={entry.id}
        timestamp={entry.timestamp}
        content={entry.content}
      />
    ));
  },

  showContent: function () {
    switch (this.props.currentTab) {
      case 1:
        return (<div>
          {this.showForEachBlogEntry()}
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