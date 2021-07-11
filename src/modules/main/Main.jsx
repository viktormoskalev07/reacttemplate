import { useState } from "react";
import { Route, Switch   } from "react-router-dom";
import Mainppage from "./pages/Mainpage";
import P404 from './pages/P404'
import Post from "./pages/Post";

const Main = ({nav}) => { 
const keynaw = Object.keys(nav); 
const PagesFromProps =()=>{
            return(
               keynaw.map((k ,i) =>{ 
                let Page = nav[k][1]; 
                console.log(nav[k])
                return <Route exact key={i} path={"/"+k}> <Page/></Route> 
                } )
            )

}  
 
 const[getDisable , setDisable]= useState(false);
return ( 
    <main className="main">

                <button disabled={getDisable} onClick={()=>{
                   setDisable(true)
                }}>   test</button>
    <Switch>
      <Route  exact  path="/"> <Mainppage /></Route>  
        <PagesFromProps/>
        <Route    path="/post/"> <Post/></Route>  
        <Route > <P404 /></Route> 
       
       
    </Switch>
    </main>

    );
    }

    export default Main;