import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './recipesList.css';


export default function RecipeList({id, title, description, time}){
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded)
    }

    const hideText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text
    }

    
   

    return(    
                    <>
                    <div className="recipeContainer"  key= {id}>
                        <Link style={{textDecoration: "none", color:"#403F3F"}} to= {`/recipes/${id}`}><h3 className="titleRecipe">{title}</h3></Link>
                        <p className="timeRecipe">Time: {time} seconds</p>

                        <p className="descriptionRecipe">
                            {isExpanded ? description : hideText(description, 100)}
                        </p>
                        {description.length > 100 &&  (
                            <div className='buttonBox'><button className='readButton' onClick={toggleReadMore}>{isExpanded ? 'Read Less' : 'Read More'}  </button></div>
                        )}
                    </div>
                    </>
    )

}