import './home.css';
import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

const Home = () => { 

    const [isError, setIsError] = useState(false);
    localStorage.setItem("username", "admin");
    localStorage.setItem("password", "password"); 
    const navigateD = useNavigate();

    const [aemail, setAEmail] = useState('');
    const [apassword, setAPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        var em = aemail.trim();
        var pwd = apassword.trim();
        if( em && pwd ) {
            var getuser = localStorage.getItem("username");
            var getpwd = localStorage.getItem("password"); 
            if( em === getuser && pwd === getpwd){
                setIsError(false);
                navigateD("/dashboard?admLogged=true");
            }
            else{
                setIsError(true);
            }
           
        }   
        else {
            setIsError(true);
        }       
         
    }

    const handleReset = (e) => {
        document.querySelector('#adm-email').value = "";
        document.querySelector('#adm-pass').value = ""; 
        setIsError(false);

    }
    return (
        <div className="slambook-home">
            <h2>Welcome to SlamBook !</h2> 
            {/* <img src = "https://freebiemnl.com/wp-content/uploads/2021/05/EyIS4_LWYAEAam--1200x900.jpg" alt="SlamBook" /> */} 
            <div className='form-hd mt-5'>
            <h4 className='fst-italic'>Admin Log-in</h4>
            <div className="form-wrapper mt-3">
                <form onSubmit={handleSubmit} >
                    <div className="input-group flex-wrap input-wrapper">
                        <span className="input-group-text fw-bold" id="addon-wrapping">Username</span>
                        <input type="text" className="form-control " id="adm-email" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" onChange={(e) => setAEmail(e.target.value)} />
                    </div>
                    <div className="input-group flex-nowrap input-wrapper">
                        <span className="input-group-text fw-bold" id="addon-wrapping">Password</span>
                        <input type="password" className="form-control " id="adm-pass" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" onChange={(e) => setAPassword(e.target.value)}/>
                    </div>
                    {isError && <div className='error fw-bold'>Invalid credentials!</div>}
                    <div className='button-wrapper'>
                        <button className="btn btn-primary  mx-1" type="submit">Login</button> 
                        <button className="btn btn-primary  ml-1" type="button" onClick={handleReset}>Reset</button> 
                    </div>
                </form> 
                <p className='my-3'>( Default is admin and password )</p>
                <div className='menu my-3'> 
                <p className='fw-bold' >Go To:</p>
            <ul className='menu list-unstyled'> 
                    <li><NavLink className="nav-link text-primary text-decoration-underline" to='/dashboard'> Dashboard </NavLink></li>
                    <li><NavLink className="nav-link text-primary text-decoration-underline" to='/profile'> Profile </NavLink> </li>
                    <li><NavLink className="nav-link text-primary text-decoration-underline" to='/edit-profile'> Edit </NavLink> </li>
                    <li><NavLink className="nav-link text-primary text-decoration-underline" to='/login'> User-Login </NavLink></li>
                    <li><NavLink className="nav-link text-primary text-decoration-underline" to='/register'> Register </NavLink></li>
            </ul>
        </div>
            </div>
        </div>
        
        </div>
    )
}

export default Home;