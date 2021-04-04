import {    NavLink  } from "react-router-dom";


const Nav = (p) => {
 
    const nav = p.route ;
const keynaw = Object.keys(nav);
let keys=0;
const rout = keynaw.map((k) =>{
    
        keys++;
        return  <NavLink activeClassName="is-active"   key={keys}  className="nav__item" to= {k}> {nav[k][0]}  </NavLink>
     }); 
    return (
   <nav onClick={()=>p.setNavstate()} className="nav">
 
{rout}
   </nav>
      );
}
 
export default Nav;