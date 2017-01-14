import React from 'react';
import ReactDOM from 'react-dom';
import BlogEntry from './Blog-Entry';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlogEntry/>, div);
});