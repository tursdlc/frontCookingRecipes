import { NavLink } from 'react-router-dom';
import { useState } from "react";


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
                <h1>Savor Street</h1>
            </div>
            <div className="login">
                <img className="loginIcon" src="src/assets/images/user-login.svg" alt="log in icon"/>
            </div>
        </nav>       
        </>
    )
}