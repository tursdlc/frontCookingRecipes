import { useState } from "react";
import axios from 'axios';
const url = "http://127.0.0.1:8000/recipes-recipes/"
import { useParams, useNavigate } from "react-router-dom";



export default function Form(){
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(url, {title:title, description:description, time:time});
            alert('Recipe updated sucessfuly');
            navigate(`/recipes`);
            console.log(response.data)
        } catch (error){
            console.log(error.response);

        }
    };

    return(
        <>
        <div className="main">
        <form className="recipeForm" onSubmit={handleSubmit}>
            <label>
                Title</label>
                <input 
                    className= "titleInput" 
                    type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e)=> setTitle(e.target.value)}
                    >

                </input>
            
            <label>
                Description</label>
                <textarea 
                className="descriptionText" 
                rows="30" 
                cols="100" 
                name="comment"
                value={description} 
                onChange={(e)=> setDescription(e.target.value)}
                ></textarea>
            
            <label>
                Total time in seconds</label>
                <input 
                className= "timeInput" 
                type="number" 
                name="time" 
                placeholder="sec"
                value={time} 
                onChange={(e)=> setTime(e.target.value)}
                >

                </input>
            
            <div className="buttonBox"><button className="formButton">Send</button></div>
            
        </form>
        </div>
        </>
    )

}
