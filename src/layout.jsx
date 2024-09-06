import Navbar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import './components/navBar/navBar.css';
import './components/footer/footer.css';
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
	    <>
		<Navbar></Navbar>		
		<Outlet></Outlet>
		<Footer></Footer>		
		</>
	
	)

}

export default Layout