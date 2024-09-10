import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Navbar(){
    //change nav when scrolling
    const [scrollNav, setScrollNav] = useState(false)
    const scrolling = () => {
        if (window.scrollY >= 100){
            setScrollNav(true)
        }else{
            setScrollNav(false)    
        }
    }
    window.addEventListener("scroll", scrolling);  
    

    return(
        <>
        <nav className={scrollNav ? "navBar navBarScroll" : "navBar"}>
            <div id= "pageLinks "className="pageLinks">
                <NavLink to={'/addrecipe'} >Add a Recipe</NavLink>
                <NavLink to={'/recipes'}>Recipes</NavLink>
            </div>
            <div className="title">
                <NavLink to={'/'} style= {{textDecoration: "none", color:"white"}} ><h1>Savor Street</h1></NavLink>
                
            </div>
            <div className="login">
                <FaRegCircleUser style = {{marginRight: "30px", width:"24px", height:"24px"}} />
            </div>
        </nav>       
        </>
    )
}