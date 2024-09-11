import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from './recipesPage';


export const EditRecipe = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({ title: "", description: "", time: ""});


    useEffect( () => {
        const fetchRecipe = async () => {
            try{
                const response = await axios.get(`${url}${id}/`);
                setRecipe(response.data);
            }catch(error){
                console.log(error.response)
            }
        };
        fetchRecipe();
        
    }, [id, url]);
    
    const handleChange = (e) => {
        setRecipe ({
            ...recipe,
            [e.target.name]: e.target.value
        })
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.put(`${url}${id}/`, recipe);
            alert('Recipe updated sucessfuly');
            navigate(`/recipes/${id}`);
            } catch (error){
                console.log(error.response); 
            }
        };

    return(
        <>
        <div className="main">
        <form className="recipeForm" onSubmit={handleSubmit} >
            <label>
                Title</label>
                <input 
                    className= "titleInput" 
                    type="text" 
                    name="title" 
                    value={recipe.title} 
                    onChange={handleChange}
                    >

                </input>
            
            <label>
                Description</label>
                <textarea 
                className="descriptionText" 
                rows="30" 
                cols="100" 
                name="description"
                value={recipe.description} 
                onChange={handleChange}
                ></textarea>
            
            <label>
                Total time in seconds</label>
                <input 
                className= "timeInput" 
                type="number" 
                name="time" 
                placeholder="sec"
                value={recipe.time} 
                onChange={handleChange}
                >

                </input>
            
            <div className="buttonBox"><button className="formButton" type="submit">Save changes</button></div>
            
        </form>
        </div>
        </>
    )
    }



