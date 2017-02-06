import React from 'react';
import Tab from '../tab/Tab';
import './Tabs.css';

var Tabs = React.createClass({
  handleClick: function (tab) {
    this.props.changeTab(tab);
  },

  render: function () {
    return (
      <nav>
        <ul className="tabList">
          {this.props.tabList.map(tab => (
            <Tab
              key={tab.id}
              handleClick={this.handleClick.bind(this, tab)}
              url={tab.url}
              name={tab.name}
              isCurrent={(this.props.currentTab === tab.id)}
            />
          ))}
        </ul>
      </nav>
    );
  }
});

export default Tabs;