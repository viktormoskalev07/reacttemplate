 
import './modules/scss/main.scss';
import 'normalize.css'; // Note this
 
import { HashRouter } from "react-router-dom";



import Header from './modules/header/header.jsx';
import Main from './modules/main/Main.jsx';
import Footer from './modules/footer/footer.jsx';

import Mainpage from './modules/main/pages/Mainpage';
import Page1 from './modules/main/pages/page1';
import Page2 from './modules/main/pages/page2';
 
function App() {
    const nav = {
      "main": ["Main Page" , Mainpage],
      "page1": [" Page1" , Page1],
      "page2": [" Page2" , Page2]
      
    }
 

  return (
 
    <HashRouter basename='/'>
<div className="wrapper">

<Header nav={nav}/>
 
  
<Main nav={nav}/>

<Footer/>


</div> 

 

</HashRouter>

  );
}

export default App;
