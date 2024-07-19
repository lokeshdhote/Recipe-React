import { Route, Routes } from "react-router-dom";

import Layout from "../components/Layout"
import Create from "../components/Create";
import Update from "../components/Update";
import Recipe from "../components/Recipes"
import Detail from "../components/Details"
import About from "../components/About"
import Contact from "../components/Contact";


const route  = ()=>{
    return(
        <>
        <Routes>
        <Route path="/" element={<Layout />} />
            <Route path="/create-recipe" element={<Create />} />
            <Route path="/update-recipe/:id" element={<Update />} />
            <Route path="/recipes" element={<Recipe />} />
            <Route path="/recipes/:id" element={<Detail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
       

        </Routes>
        </>
    )
}
export default route