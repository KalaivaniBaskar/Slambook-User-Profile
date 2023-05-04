import { useEffect, useState } from "react";
import { useParams, useSearchParams, Link, useNavigate } from "react-router-dom";
import './editProfile.css';

const EditProfile = (props) => {
    const { users, setUser }  = props;
    const { userID } = useParams();
    const [ searchParams ] = useSearchParams();
    var isLogged = searchParams.get('isLogged'); 
    const navigatefromEdit = useNavigate();
    
    //edit profile variables
    
    const [ errorFlag, setErrorFlag ] = useState(false); 
    const [ sFlag, setSFlag ] = useState(false); 
    const [ errorMsg, setErrorMsg ] = useState("Error"); 

    const [currentUser, setCurrentUser] = useState({});
    
    const filterCurrentUser = () => {
        if(userID) {
        const current = users.find((user) => user.id === parseInt(userID));
        setCurrentUser(current);
        }
    }

    useEffect(() => { 
        //console.log(isLogged, userID);
        filterCurrentUser();
        
    }, [isLogged]);

    const handleEditProfile = (e) => {
        e.preventDefault(); 
        //console.log(e.target);
        
        let email = document.getElementById('edit-email').value
        let name = document.getElementById('edit-name').value
        let address = document.getElementById('edit-address').value
        let city = document.getElementById('edit-city').value
        let country = document.getElementById('edit-country').value
        let pincode = document.getElementById('edit-pincode').value
        let mobile = document.getElementById('edit-mobile').value 
        name = name.trim();
        city = city.trim();
        country = country.trim(); 
        //console.log(name, city, country, mobile, pincode, email);
        if( city && country && name){
            let idx = users.findIndex(el => el.id === Number(userID)) 
            users[idx].name = name;
            users[idx].city = city;
            users[idx].country = country;
            users[idx].mobile = mobile;
            users[idx].pincode = pincode;
            users[idx].address = address;
            setErrorFlag(false);
            setSFlag(true);
            setErrorMsg("Data changed successfully");
            setTimeout( ()=>{
                navigatefromEdit("/login");
             }, 4000)
        }
        else {
            setErrorFlag(true)
            setErrorMsg(" *Mandatory fields cannot be empty")
        }
    }
    
    const enableEditPassword = (e) => {
        
        //console.log(e.target);
        let p1 = document.querySelector('#edit-password')
        let p2 = document.querySelector('#edit-pwd')
        p1.removeAttribute('readOnly');
        p2.removeAttribute('readOnly');
        
    }
    
    const handleEditPassword = (e) => {
        e.preventDefault(); 
        //console.log("form2", e.target);
        
        let p1 = document.querySelector('#edit-password').value;
        let p2 = document.querySelector('#edit-pwd').value;
        p1 = p1.trim();
        p2 = p2.trim();
        if( p1 && p2 && p1 === p2 ) {
            let idx = users.findIndex(el => el.id === Number(userID)) 
            users[idx].password = p1;
            setErrorFlag(false);
            setSFlag(true);           
            setErrorMsg("Password changed successfully");
            setTimeout( ()=>{
                navigatefromEdit("/login");
             }, 4000)
            
        }
        else {
            setErrorFlag(true);
            setErrorMsg("Password incorrect");
        }
    }

    return(
      <>
      <div>
        { (!userID) && <div className=" mt-3 mb-10"> 
                             <h3 className="py-4 fst-italic">Log-in to edit your profile</h3>
                             <Link to={`/login`}>
                                <button className='btn btn-info fs-5'>Click here to Log in</button> 
                            </Link> 
                            </div> }
            { isLogged &&
                            <div className="edit-page">
                            <h3>Edit profile of {currentUser.name}</h3>
                            <div className="form-wrap  mt-4 border border-info px-4 py-3">
                                <form id="edit-form" onSubmit={handleEditProfile} >  
                                <div className='container'> 
                                    { errorFlag && <h3 className='err-msg text-danger '> {errorMsg} </h3> }
                                    { (sFlag && !errorFlag) && <h3 className='err-msg text-success '> {errorMsg} </h3> }
                                    <div className='row'>
                                    <div className="form-left col-md-6">                   
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                        <span className="input-group-text fs-5 fw-bold fst-italic" >Name *</span>
                                        <input type="text" className="form-control fs-5" id="edit-name" defaultValue={currentUser.name} aria-label="Name" aria-describedby="addon-wrapping" />
                                    </div> 
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                        <span className="input-group-text fs-5 fw-bold fst-italic" >Address</span>
                                        <input type="text" className="form-control fs-5" id="edit-address" defaultValue={currentUser.address ? currentUser.address : "" }aria-label="Name" aria-describedby="addon-wrapping" />
                                    </div>
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                        <span className="input-group-text fs-5 fw-bold fst-italic" >City *</span>
                                        <input type="text" className="form-control fs-5" id="edit-city" defaultValue={currentUser.city} aria-label="City" aria-describedby="addon-wrapping"   />
                                    </div>
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                        <span className="input-group-text fs-5 fw-bold fst-italic" >Country *</span>
                                        <input type="text" className="form-control fs-5" id="edit-country" defaultValue={currentUser.country} aria-label="Country" aria-describedby="addon-wrapping"  />
                                    </div>
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                        <span className="input-group-text fs-5 fw-bold fst-italic" >Pincode</span>
                                        <input type="text" className="form-control fs-5" id="edit-pincode" defaultValue={currentUser.pincode ? currentUser.pincode : "" } aria-label="Name" aria-describedby="addon-wrapping" />
                                    </div>
                                    </div>
                                    <div className="form-right col-md-6"> 
                                    
                                        <div className="input-group flex-nowrap input-wrapper  mb-5 shadow bg-body rounded ">
                                            <span className="input-group-text fs-5 fw-bold fst-italic" >Email *</span>
                                            <input type="email" className="form-control fs-5" id="edit-email" defaultValue={currentUser.email} aria-label="Email" aria-describedby="addon-wrapping" readOnly />
                                        </div>
                                        <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                            <span className="input-group-text fs-5 fw-bold fst-italic" >Mobile</span>
                                            <input type="text" className="form-control fs-5" id="edit-mobile" defaultValue={currentUser.mobile ? currentUser.mobile : "" } aria-label="MobileNumber" aria-describedby="addon-wrapping"   />
                    
                                        </div> 
                                        {/* <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded" id="edit-gender">
                                            <span className="input-group-text fs-5 fw-bold fst-italic" >Gender *</span>
                                            <input type="radio" className=" " name="gender"  value="Male" aria-label="male" aria-describedby="addon-wrapping" /> 
                                            <span className="input-group-text fs-5 border-0" >Male</span>
                                            <input type="radio" className=" " name="gender"  value="Female" aria-label="male" aria-describedby="addon-wrapping" />
                                            <span className="input-group-text fs-5 border-0 " >Female</span>
                                            <input type="radio" className=" " name="gender"  value="unspecified" aria-label="male" aria-describedby="addon-wrapping" />
                                            <span className="input-group-text fs-5 border-0 " >Don't specify</span>
                                        </div> */}
                                        <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                            <span className="input-group-text fs-5 fw-bold fst-italic" >Gender *</span>
                                            <input type="text" className="form-control fs-5" id="edit-gender" defaultValue={currentUser.gender} aria-label="Name" aria-describedby="addon-wrapping" readOnly/>
                                        </div>   
                                    </div>
                                </div>                               
                                    
                                <div className='button-wrapper '>
                                    <button className="btn btn-primary fs-5 " type="submit">Save Changes</button>
                                </div>
                                </div>
                                </form>
                            </div>
                            
                            {/* change password only */}
                            <div className="pwd-wrapper border border-info mx-auto"> 

                            <button onClick={enableEditPassword} className="btn btn-light rounded fs-5 text-decoration-underline">Click here to Edit Password</button>
                            
                                <form id="chg-pwd" onSubmit={handleEditPassword} >  


                                <div className='container mt-5 mb-5'> 
                                    { errorFlag && <h3 className='err-msg text-danger '> {errorMsg} </h3> }
                                    { (sFlag && !errorFlag) && <h3 className='err-msg text-success '> {errorMsg} </h3> }
                                    <div className='row'>                                   
                                       <div className="col-md-6">                                
                                    
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                        <span className="input-group-text fs-5 fw-bold fst-italic" >Password *</span>
                                        <input type="password" className="form-control fs-5" id="edit-password" defaultValue={currentUser.password} aria-label="Password" aria-describedby="addon-wrapping" readOnly />
                                    </div>
                                    <div className="input-group flex-nowrap input-wrapper shadow mb-5 bg-body rounded">
                                        <span className="input-group-text fs-5 fw-bold fst-italic" >Re-enter Password *</span>
                                        <input type="password" className="form-control fs-5" id="edit-pwd" defaultValue={currentUser.password}  aria-label="Password" aria-describedby="addon-wrapping" readOnly />
                                    </div>
                                                                   
                                    <div className='button-wrapper '>
                                        <button className="btn btn-primary fs-5 " type="submit">Confirm Password</button>
                                    </div>
                                </div>
                                </div>
                                </div>
                                </form>
                            </div>
                        </div>}
      </div>
      </>
    )
}
export default EditProfile;