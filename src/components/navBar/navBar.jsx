

export default function Navbar(){
    return(
        <>
        <div className="navbar">
            <div className="pageLinks">
                <p>Recipes</p>
                <p>Add a recipe</p>
            </div>
            <div className="title">
                <h1>Savor Street</h1>
            </div>
            <div className="search">
                <input className="inputSearch" type="text" placeholder="Search for anything"></input>
            </div>
        </div>       
        </>
    )
}