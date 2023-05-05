import { useEffect, useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import './profile.css'

const Profile = (props) => {
    const { users }  = props;
    const { userID } = useParams();
    const [ searchParams ] = useSearchParams();
    var isLogged = searchParams.get('isLogged');

    const [currentUser, setCurrentUser] = useState({});
    
    const filterCurrentUser = () => {
        const current = users.find((user) => user.id === parseInt(userID));
        setCurrentUser(current);
    }
    useEffect(() => { 
        filterCurrentUser();
    }, [isLogged]);

    return ( 
        <div className="loginProfile"> 
        <div className=" w-25  p-4 border rounded border-info  user-info">
            {isLogged ? <div> <p>Logged in as {currentUser.name} </p> <Link to={`/edit-profile/${currentUser.id}?isLogged=true`}>
                                <button className='btn btn-info btn-sm'>Edit your Profile</button> 
                            </Link> </div> 
                            : <Link to={`/login`}>
                                <button className='btn btn-info btn-sm'>Login to your Profile</button> 
                            </Link> } 
        </div>
        <div className="mb-8">
            <h4 className="text-primary text-decoration-underline mt-5 py-2 fst-oblique">Profile</h4>

            <h6 className=" py-3" >Showing Profile of: {currentUser ? currentUser.name : ' - '}</h6> 
            {currentUser && 
                            <div className="container "> 
                            <div className="row justify-content-center">
                            <div className=" p-5 disp-profile">
                              <h4><i className="bi bi-person-circle p-2"> Name : {currentUser.name} </i></h4>
                              <h6 className="text-capitalize p-2"> Gender : {currentUser.gender}</h6> 
                              <h6 className="text-decoration-underline p-2"> Email : {currentUser.email}</h6> 
                              <h6 className="text-capitalize p-2"> Phone : {currentUser.mobile}</h6>
                              <h6 className="text-capitalize p-2"> City : {currentUser.city}</h6> 
                              <h6 className="text-capitalize p-2"> Country : {currentUser.country}</h6> 
                              {currentUser.address && <h6 className="text-capitalize p-2"> Address : {currentUser.address}</h6> }
                              {currentUser.pincode && <h6 className="text-capitalize p-2"> Pincode : {currentUser.pincode}</h6> }
                            
                              </div>
                              </div> 
                              </div>
                        }
            {/* <div className='adjust'></div> */}
        </div>  

        </div>
    )
}

export default Profile;