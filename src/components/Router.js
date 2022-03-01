import React,{useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";

const Router2 = ({isLoggedIn})=>{

     return (
       <Router basename={process.env.PUBLIC_URL}>
         <Routes>
           {isLoggedIn ? (
             <>
               <Route path="/" element={<Home />} />
             </>
           ) : (
             <Route path="/" element={<Auth />} />
           )}
         </Routes>
       </Router>
     );
}

export default Router2;