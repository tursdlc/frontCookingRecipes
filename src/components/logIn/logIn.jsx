import './logIn.css';


export default function LogIn(){
    return(
        <>
        <form className="logInForm">
            <h2 className='logInTitle'>Login</h2>
            <div className='inputBoxes'>
            <input name="username" placeholder="Username" className='inputLogIn'></input>
            <input name="password" placeholder="Password" className='inputLogIn'></input>
            <button className='logInButton'>Login</button>
            </div>
            <div><p className='createAccount'>Don't have an account?<span className='register'>Register</span></p></div>
        </form>
        </>
    )
}