import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import EditProfile from './Components/EditProfile';

function App() {
  const [users, setUser] = useState([
    {
      id: 1,
      name: 'Farook',
      email: 'farook@gmail.com',
      city: 'Chennai',
      country: 'India',
      mobile : '58451234',
      password : 'farook123',
      gender : 'male'
    },
    {
      id: 2,
      name: 'John',
      email: 'john@gmail.com',
      gender: 'male',
      city: 'Bangalore',
      country: 'India',
      mobile : '89521234',
      password : 'john123'
    },
    {
      id: 3,
      name: 'Karthik',
      email: 'karthik@hotmail.com',
      gender: 'male',
      city: 'Mumbai',
      country: 'India',
      mobile : '8847845',
      password : 'karthik123'
    },
    {
      id: 4,
      name: 'Kalaivani',
      email: 'kalai@gmail.com',
      gender: 'female',
      city: 'Kumbakonam',
      country: "India",
      mobile : '99845784',
      password : 'kalai123'
    },
    {
      id: 5,
      name: 'Vidya',
      email: 'vidya@gmail.com',
      gender: 'female',
      city: 'Pune',
      country: "India",
      mobile : '63245784',
      password : 'vidya123'
    },
    {
      id: 6,
      name: 'Abi',
      email: 'abi@gmail.com',
      gender: 'female',
      city: 'Budapest',
      country: "Hungary",
      mobile : '89265784',
      password : 'abi123'
    },
    {
      id: 7,
      name: 'Selvam',
      email: 'selvam@gmail.com',
      gender: 'male',
      city: 'Hyderabad',
      country: "India",
      mobile : '9981124',
      password : 'selvam123'
    }, 
    {
      id: 8,
      name: 'Gia',
      email: 'gia@gmail.com',
      gender: 'female',
      city: 'Lima',
      country: "Peru",
      mobile : '1987784',
      password : 'gia123'
    }, 
    {
      id: 9,
      name: 'Rani',
      email: 'rani@gmail.com',
      gender: 'female',
      city: 'Colorado',
      country: "USA",
      mobile : '89750025',
      password : 'rani123'
    },
    {
      id: 10,
      name: 'Anna',
      email: 'anna@gmail.com',
      gender: 'female',
      city: 'Colorado',
      country: "USA",
      mobile : '89750025',
      password : 'anna123'
    } 
  ]);

  const [userDetails, setUserDetails] = useState({
    id: 4,
    name: 'Kalaivani',
    email: 'kalai@gmail.com',
    gender: 'female',
    city: 'Kumbakonam',
    country: "India",
    mobile : '99845',
    password : 'kalai123'
  });


  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard users={users} />} />
        <Route path='/profile/:userID' element={<Profile users={users}  />} />
        <Route path='/profile' element={<Profile users={users}  />} />
        <Route path='/edit-profile' element={<EditProfile  />} />
        <Route path='/edit-profile/:userID' element={<EditProfile users={users} setUser={setUser}  />} />
        <Route path='/login' element={<Login users={users} userDetails={userDetails} setUserDetails={setUserDetails} />} />
        <Route path='/register' element={<Register users={users} setUser={setUser}/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;