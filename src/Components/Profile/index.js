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
        <> 
        <div className=" w-25  p-4 border rounded border-info  user-info">
            {isLogged ? <div> <h3>Logged in as {currentUser.name} </h3> <Link to={`/edit-profile/${currentUser.id}?isLogged=true`}>
                                <button className='btn btn-info'>Edit your Profile</button> 
                            </Link> </div> 
                            : <Link to={`/login`}>
                                <button className='btn btn-info fs-5'>Login to your Profile</button> 
                            </Link> } 
        </div>
        <div className="mb-8">
            <h2 className="text-primary text-decoration-underline mt-3 py-4 fst-italic">Profile</h2>

            <h4 className=" py-3" >Showing Profile of: {currentUser ? currentUser.name : ' - '}</h4> 
            {currentUser && 
                            <div className="container "> 
                            <div className="row justify-content-center">
                            <div className=" p-5 disp-profile">
                              <h1><i className="bi bi-person-circle p-2"> Name : {currentUser.name} </i></h1>
                              <h4 className="text-capitalize p-2"> Gender : {currentUser.gender}</h4> 
                              <h4 className="text-decoration-underline p-2"> Email : {currentUser.email}</h4> 
                              <h4 className="text-capitalize p-2"> Phone : {currentUser.mobile}</h4>
                              <h4 className="text-capitalize p-2"> City : {currentUser.city}</h4> 
                              <h4 className="text-capitalize p-2"> Country : {currentUser.country}</h4> 
                              {currentUser.address && <h4 className="text-capitalize p-2"> Address : {currentUser.address}</h4> }
                              {currentUser.pincode && <h4 className="text-capitalize p-2"> Pincode : {currentUser.pincode}</h4> }
                            
                              </div>
                              </div> 
                              </div>
                        }
            
        </div>  

        </>
    )
}

export default Profile;