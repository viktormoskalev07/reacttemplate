 
import './modules/scss/main.scss';
import 'normalize.css'; // Note this
import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";



import Header from './modules/header/header.jsx';
import Main from './modules/main/Main.jsx';
import Footer from './modules/footer/footer.jsx';
function App() {
  return (
 
    <HashRouter basename='/'>
<div className="wrapper">

<Header/>
<Main/>
<Footer/>


</div> 
</HashRouter>

   
  );
}

export default App;
