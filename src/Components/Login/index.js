import './login.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);

    const { users, userDetails, setUserDetails } = props; 

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const  array  = users.filter( (user) => user.email === email && user.password === password ) 
        const logUser = array[0];
        if(logUser === undefined  ) {
            setIsError(true);     
        }          
         else if( array.length === 1) {
            setUserDetails({...logUser})

            //Login Verification
            if(logUser.email === email && logUser.password === password){
                setIsError(false);
                navigate(`/profile/${logUser.id}?isLogged=true`);
            }else{
                
                setIsError(true);
                //console.log('Email/Password is not matching.',email,password, logUser, userDetails)
            }

            }
        else {
            setIsError(true);
        }   
        
    }

    const handleReset = (e) => {
        document.querySelector('#log-email').value = "";
        document.querySelector('#log-pass').value = ""; 
        setIsError(false);

    }

    return (
        <div className='form-hd mt-5'>
            <h2 className='fst-italic'>User Log-in</h2>
            <div className="form-wrapper mt-5">
                <form onSubmit={handleSubmit} >
                    <div className="input-group flex-wrap input-wrapper">
                        <span className="input-group-text fw-bold" id="addon-wrapping">Email</span>
                        <input type="text" className="form-control " id="log-email" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-group flex-nowrap input-wrapper">
                        <span className="input-group-text fw-bold" id="addon-wrapping">Password</span>
                        <input type="password" className="form-control " id="log-pass" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    {isError && <div className='error fw-bold'>Invalid credentials!</div>}
                    <div className='button-wrapper'>
                        <button className="btn btn-primary fs-5 mx-1" type="submit">Login</button> 
                        <button className="btn btn-primary fs-5 ml-1" type="button" onClick={handleReset}>Reset</button> 
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;