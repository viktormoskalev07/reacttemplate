const Nav = (p) => {
    return (
   <nav onClick={()=>p.setNavstate()} className="nav">
       <a href="./" className="nav__item"> main</a>
       <a href="./" className="nav__item"> main</a>
       <a href="./" className="nav__item"> main</a>
       <a href="./" className="nav__item"> main</a>
       <a href="./" className="nav__item"> main</a>    

   </nav>
      );
}
 
export default Nav;