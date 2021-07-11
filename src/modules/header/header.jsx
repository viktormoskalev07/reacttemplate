import React,{useState} from 'react';
import Nav from './Nav';
import logo from '../../img/logo.svg'
import { Link } from 'react-router-dom';

const Header = (n) => {
    const[navstate,setNavstate]=useState("");
    return ( 


        <header className={navstate + " header"}>
            <div className="container">
                <div className="header__content"> 
               <Link to='/'><figure className="header__logo"><img src={logo} alt="logo"/></figure>  </Link> 
            <Nav route={n.nav}  setNavstate={setNavstate}/>
            <div tabIndex="0" onClick={()=> {
                if(navstate){
                    setNavstate("");  
                } else{
                       setNavstate("nav-open")
                } 
            }}  className="nav__btn">
                <div className="nav__btn__line"></div>
                <div className="nav__btn__line"></div>
                <div className="nav__btn__line"></div>
             
            </div>
            </div>
                </div>
         

        </header>

     );
}
 
export default Header;