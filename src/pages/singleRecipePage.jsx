import { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { url } from './recipesPage';
import './singleRecipePage.css'
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";


const SingleRecipePage = () => {
    let { id } = useParams();

    const [data, setData] = useState({ id, title: "", description: "", time: 0 });

    console.log(data)

    useEffect( () => {
        const retrieveData = async () => {
            try{
                const response = await axios.get(`${url}${id}/`);
                setData(response.data);
            }catch(error){
                console.log(error.response)
            }
        };
        retrieveData();
        
    }, []);

    const [message, setMessage] = useState("");

    const deletePost = async () => {
        try{
            const response = await axios.delete(`${url}${id}/`);
            console.log(response);
            if (response.status === 200 || response.status === 204){
                setMessage("Data has been successfully deleted!");
                console.log("Message set: Data has been successfully deleted!");
            }
            
        }catch(error){
            setMessage("Error deleting the data. Please try again.");
            console.log(error.response)
        }
    };

    const { title, description, time } = data;

    return(
        <div className='mainContainerSingle'>
                <div className='textBox'>
                    <div><h3 className='recipeTitle'>{title}</h3></div> 
                    <div className='recipeDescription'><p className='descriptionTitle'>Description:</p> {description}</div>
                    <div className='timeDescription'>Time: {time}</div>
                    <div className="iconsDeleteUpdate">
                    <MdDeleteOutline onClick={() => deletePost(1)}></MdDeleteOutline>
                    {message && <p>{message}</p>}
                    <MdOutlineEdit />
                    </div>
                </div>
        </div>    
    )
}

export default SingleRecipePage;