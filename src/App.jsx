import './App.css'
import Navbar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Form from "./components/contactForm/contactForm"
import RecipePage from './pages/recipePage';

import './components/navBar/navBar.css';
import './components/footer/footer.css';
import './components/contactForm/contactForm.css'






function App() {


  return (
    <>
      <Navbar></Navbar>
      <RecipePage></RecipePage>
      <Footer></Footer>
    </>
  )
}

export default App
