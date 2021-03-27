import React,{useState} from 'react';
import Nav from './Nav';
import logo from '../../img/logo.svg'

const Header = () => {
    const[navstate,setNavstate]=useState("");
    return ( 


        <header className={navstate + " header"}>
            <div className="container">
                <div className="header__content">

                <figure className="header__logo"><img src={logo} alt="logo"/></figure>
            <Nav setNavstate={setNavstate}/>
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