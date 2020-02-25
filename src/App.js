import React from 'react';
import './fonts/fontawesome/css/all.css';
import './App.css';
import Header from './component/Header/Header';
import Aside from './component/Aside/Aside';
import Profile from './component/Profile/Profile';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="main container">
        <Aside />
        <Profile />
      </div>
    </div>
  );
}

export default App;
