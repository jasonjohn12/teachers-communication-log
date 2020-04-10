import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from "./components/contexts/AuthContext";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthContextProvider><App /></AuthContextProvider >, div);
  ReactDOM.unmountComponentAtNode(div);
});
