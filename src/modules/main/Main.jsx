import { Route, Switch   } from "react-router-dom";
import P404 from './pages/Mainpage'

const main = (n) => {
const nav = n.nav ;
const keynaw = Object.keys(nav);
let keys=0;
const rout = keynaw.map((k) =>{
            let l = nav[k][1]();
            keys++;
            return <Route exact key={keys} path={"/"+k}> {l} </Route> 
} ); 

 
return (
    
    <main className="main">

    <Switch>
        {rout}
        <Route    path="/"> <P404 /></Route> 
    </Switch>
    </main>

    );
    }

    export default main;