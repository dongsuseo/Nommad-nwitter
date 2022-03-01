import React,{useState} from 'react';

import Router2 from './Router';
import {authService} from "../firebaseConfig";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  console.log(authService.currentUser);
  return (
    <>
      <Router2 isLoggedIn={isLoggedIn} />
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
