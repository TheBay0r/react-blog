import React from 'react';
import Tabs from './tabs/Tabs';
import Content from './content/Content';
import Header from './header/Header';
import './App.css';

var tabList = [
  {'id': 1, 'name': 'Blog', 'url': '/blog'},
  {'id': 2, 'name': 'About Me', 'url': '/about'},
];

var App = React.createClass({
  getInitialState: function () {
    return {
      tabList: tabList,
      currentTab: 1
    };
  },

  changeTab: function (tab) {
    this.setState({currentTab: tab.id});
  },

  render: function () {
    return (
      <div className="App">
        <div className="App-header">
          <Header/>
        </div>
        <Tabs
          currentTab={this.state.currentTab}
          tabList={this.state.tabList}
          changeTab={this.changeTab}
        />
        <Content
          currentTab={this.state.currentTab}
        />
      </div>
    );
  }
});

export default App;
