import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
const url = "http://127.0.0.1:8000/recipes-create/"
import RecipeList from '../components/recipesList/recipesList';
import '../components/recipesList/recipesList.css'

const RecipePage = () => {
    const [data, setData] = useState([]);

    useEffect( () => {
        const retrieveData = async () => {
            try{
                const response = await axios.get(url);
                setData(response.data);
            }catch(error){
                console.log(error.response)
            }
        };
        retrieveData();
        
    }, []);
    
    return(
            <div className='mainContainer'>
                {data.map((item) => (
                    <RecipeList key={item.id} title={item.title} description={item.description} time={item.time}>

                    </RecipeList>

                ))}
                
            </div>
    )
}

export default RecipePage;