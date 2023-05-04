import './home.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <h2 className='fst-italic'>Admin Log-in</h2>
            <div className="form-wrapper mt-5">
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
                        <button className="btn btn-primary fs-5 mx-1" type="submit">Login</button> 
                        <button className="btn btn-primary fs-5 ml-1" type="button" onClick={handleReset}>Reset</button> 
                    </div>
                </form> 
                <p className='my-3'>( Default is admin and password )</p>
            </div>
        </div>
        </div>
    )
}

export default Home;