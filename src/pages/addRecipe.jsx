import Form from '../components/contactForm/contactForm'
import '../components/contactForm/contactForm.css'
import './addRecipe.css'

export default function AddRecipe(){
    return(
        <>
        <div className="titlePage"><h2>Add a new recipe</h2></div>
        <Form></Form>
        </>
        
    )
}