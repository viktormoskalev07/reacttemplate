import Nav from './Nav';
import logo from '../../img/logo.svg'

const Header = () => {
    return ( 


        <header className="header nav-open">
            <div className="container">
                <div className="header__content">

                <figure className="header__logo"><img src={logo} alt="logo"/></figure>
            <Nav/>
            <div className="nav__btn">
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