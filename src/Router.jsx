import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Header from "./Header";

function Router()
{
    return(<div>
    <BrowserRouter>
<Header/>

    <Routes>
<Route path={"/"} element={<Home/>} />
<Route path={"/about"} element={<About/>}/>
<Route path={"/contact"} element={<Contact/>}/>
<Route path={"/login"} element={<Login/>}/>
<Route path={"/signup"} element={<SignUp/>}/>


    </Routes>
     </BrowserRouter>
        </div>)
}
export default Router;