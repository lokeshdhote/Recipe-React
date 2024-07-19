import React, { useEffect } from "react";
import Nav from "./components/Nav";
 import Route from "./routes/route.jsx"
import { useDispatch } from "react-redux";
import { asyncLoad } from "./store/actions/recipeAction.jsx";


const App = () => {
const dispatch = useDispatch()
useEffect(()=>{
dispatch(asyncLoad())
},[])



    return (
        <div className="w-[80%] m-auto ">
            <Nav />
<Route/>
           
        </div>
    );
};

export default App;
