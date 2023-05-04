import './register.css';
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
    const { users, setUser }  = props;
    const navigatefromR = useNavigate();
    const [ errorFlag, setErrorFlag ] = useState(false); 
    const [ sFlag, setSFlag ] = useState(false); 
    const [ errorMsg, setErrorMsg ] = useState("Error"); 

    const handleRegister = (e) => {
        e.preventDefault();
        //console.log(e.target);
        let formEl = e.target.elements;
        let gender = document.querySelector('[name=gender]:checked')
        let email = document.getElementById('reg-email').value
        let name = document.getElementById('reg-name').value
        let address = document.getElementById('reg-address').value
        let city = document.getElementById('reg-city').value
        let country = document.getElementById('reg-country').value
        let pincode = document.getElementById('reg-pincode').value
        let mobile = document.getElementById('reg-mobile').value
        let password = document.getElementById('reg-password').value
        let repassword = document.getElementById('reg-pwd').value

        var userExists = users.filter( (el) => el.email === email)
        if(userExists.length > 0) {
            setErrorFlag(true);
            setErrorMsg("Email already registered by existing user"); 
        }
        else if(gender === null){
            setErrorFlag(true);
            setErrorMsg("Select a Gender"); 
        }
        else if(password !== repassword){
            setErrorFlag(true);
            setErrorMsg("Password do not match"); 
        }
        else{
            setErrorFlag(false);
            //console.log("user registered", name, city, country, mobile, password, repassword, email, gender.value,address, pincode); 
            let id = users.length + 1;
            gender = gender.value;
            setUser([...users, {id, name, email, gender,city, country, mobile, password, pincode, address}]);
            setSFlag(true);
            //formEl.map( el => el.value = "" );
            for(let i=0; i<formEl.length; i++){
                formEl[i].value = "";
            }
            setErrorMsg("User Registered Successfully !"); 
            setTimeout( () => {
                navigatefromR("/login");
            }, 5000)
           // 
        }
          
    }

    return (
        <div className="mt-4">
            <h2 className='fst-italic'>Register</h2>
            <div className="form-wrap  mt-4 border border-info px-4 py-3">
                <form id="reg-form" onSubmit={handleRegister} >  
                <div className='container'> 
                    { errorFlag && <h3 className='err-msg text-danger '> {errorMsg} </h3> }
                    { (sFlag && !errorFlag) && <h3 className='err-msg text-success '> {errorMsg} </h3> }
                    <div className='row'>
                    <div className="form-left col-md-6">                   
                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                        <span className="input-group-text fs-5 fw-bold fst-italic" >Name *</span>
                        <input type="text" className="form-control fs-5" id="reg-name" placeholder="Name" aria-label="Name" aria-describedby="addon-wrapping" required/>
                    </div> 
                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                        <span className="input-group-text fs-5 fw-bold fst-italic" >Address</span>
                        <input type="text" className="form-control fs-5" id="reg-address" placeholder="Address" aria-label="Name" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                        <span className="input-group-text fs-5 fw-bold fst-italic" >City *</span>
                        <input type="text" className="form-control fs-5" id="reg-city" placeholder="City" aria-label="Name" aria-describedby="addon-wrapping" required />
                    </div>
                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                        <span className="input-group-text fs-5 fw-bold fst-italic" >Country *</span>
                        <input type="text" className="form-control fs-5" id="reg-country" placeholder="Country" aria-label="Name" aria-describedby="addon-wrapping" required />
                    </div>
                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                        <span className="input-group-text fs-5 fw-bold fst-italic" >Pincode</span>
                        <input type="text" className="form-control fs-5" id="reg-pincode" placeholder="PinCode" aria-label="Name" aria-describedby="addon-wrapping" />
                    </div>
                </div>
                <div className="form-right col-md-6"> 
                
                    <div className="input-group flex-nowrap input-wrapper  mb-5 shadow bg-body rounded ">
                        <span className="input-group-text fs-5 fw-bold fst-italic" >Email *</span>
                        <input type="email" className="form-control fs-5" id="reg-email" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" required />
                    </div>
                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                        <span className="input-group-text fs-5 fw-bold fst-italic" >Mobile</span>
                        <input type="text" className="form-control fs-5" id="reg-mobile" placeholder="Mobile Number" aria-label="MobileNumber" aria-describedby="addon-wrapping"  required />

                    </div> 
                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded" id="reg-gender">
                        <span className="input-group-text fs-5 fw-bold fst-italic" >Gender *</span>
                        <input type="radio" className=" " name="gender"  value="Male" aria-label="male" aria-describedby="addon-wrapping" /> 
                        <span className="input-group-text fs-5 border-0" >Male</span>
                        <input type="radio" className=" " name="gender"  value="Female" aria-label="male" aria-describedby="addon-wrapping" />
                        <span className="input-group-text fs-5 border-0 " >Female</span>
                        <input type="radio" className=" " name="gender"  value="unspecified" aria-label="male" aria-describedby="addon-wrapping" />
                        <span className="input-group-text fs-5 border-0 " >Don't specify</span>
                    </div>
                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                        <span className="input-group-text fs-5 fw-bold fst-italic" >Password *</span>
                        <input type="password" className="form-control fs-5" id="reg-password" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" required/>
                    </div>
                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                        <span className="input-group-text fs-5 fw-bold fst-italic" >Re-enter Password *</span>
                        <input type="password" className="form-control fs-5" id="reg-pwd" placeholder="Re-enter Password" aria-label="Password" aria-describedby="addon-wrapping" required/>
                    </div>
                </div>    
                    </div>
                </div>
                
                    
                    <div className='button-wrapper '>
                        <button className="btn btn-primary fs-5 " type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;