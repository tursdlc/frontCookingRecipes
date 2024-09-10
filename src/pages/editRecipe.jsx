import { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { url } from './recipesPage';


const EditRecipe = () => {
    return(
        <h1>Hola</h1>
    )
}
/*const EditRecipe = () => {
    let { id } = useParams();

    const [data, setData] = useSate({ id, title: "", description: "", time:0});

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

    
    const edit = async () => {
        axios.put()
    }

}*/

export EditRecipe