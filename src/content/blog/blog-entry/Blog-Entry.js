import React, {Component} from 'react';
import './Blog-Entry.css';

class BlogEntry extends Component {

  toUTCString(timestamp) {
    return new Date(timestamp).toUTCString();
  }

  render() {
    return (
      <div className="blog-entry">
        <div className="blog-date-container">
          <div className="blog-date">
            {this.toUTCString(this.props.timestamp)}
          </div>
          <div className="spacer"/>
        </div>
        <div className="blog-content">
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default BlogEntry;