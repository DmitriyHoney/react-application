import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const AppForTest = props => {
  return <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
}

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppForTest />, div);
  ReactDOM.unmountComponentAtNode(div);
});
