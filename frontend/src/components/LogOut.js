import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

const LogOut = ({user}) => {
  const navigate = useNavigate();
  
  const storedUser = localStorage.getItem('user');
  const loggedInUser = storedUser ? JSON.parse(storedUser) : null;;
  const handleLogout = async () => {
    if (!loggedInUser && !user) {
      // If user is not logged in, redirect to login page
      navigate("/login");
      return;
    }

    const response = await fetch(`http://localhost:3000/logout`, {
      method: 'DELETE'
    });

    if (response.ok) {
      // Clear user data from local storage 
      localStorage.removeItem('user');
      navigate("/login");
    } else {
      console.error(response);
    }
  }
  console.log("user in LogOut:", loggedInUser);
  return (
    <>
    <div>
      {loggedInUser && (
        <h1>
          welcome <span>{JSON.parse(loggedInUser.name)}</span>
        </h1>
      )}
      <button onClick={(e) => handleLogout(e)}>logout</button>
    </div>

    {<Navbar handleLogout={handleLogout} loggedInUser={loggedInUser}/>}

    </>    
  )

  
}

export default LogOut
