import { Link } from 'react-router-dom';


export default function Navbar(){
    return(
        <>
        <nav className="navbar">
            <div className="pageLinks">
                <Link to={'/addrecipe'} style={{textDecoration:'none', fontSize:'16px'}}>Add a Recipe</Link>
                <Link to={'/recipes'} style={{textDecoration:'none',fontSize:'16px'}}>Recipes</Link>
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