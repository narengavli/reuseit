
import React from 'react'
import './register.css';
import './login'
import { Button } from '@mui/material';
import {Login} from './login';
import {Routes, Route, useNavigate} from 'react-router-dom';
export const Register = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    // 👇️ navigate to /contacts
    navigate('/login');
  };

  return (
    <div>
      <>
      <form action="action_page.php">
    <div className="container">
      <h1>Register</h1>
      
      <p>Please fill in this form to create an account.</p>
      <hr />
      <label htmlFor="Name">
        <b>Name</b>
      </label>
      <input
        type="text"
        placeholder="Enter Name"
        name="name"
        id="name"
        required=""
      />
      <label htmlFor="email">
        <b>Email</b>
      </label>
      <input
        type="text"
        placeholder="Enter Email"
        name="email"
        id="email"
        required=""
      />
      <label htmlFor="email">
        <b>Mobile No</b>
      </label>
      <input
        type="text"
        placeholder="Enter Mobile No"
        name="mobile"
        id="mobile"
        required=""
      />
      <select className="form-select" aria-label="Default select example">
        <option selected="">Year</option>
        <option value={1}>1st Year</option>
        <option value={2}>2nd Year</option>
        <option value={3}>3rd Year</option>
        <option value={4}>4th Year</option>
      </select>
      <br />
      <br />
      <label htmlFor="psw">
        <b>Password</b>
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        name="psw"
        id="psw"
        required=""
      />
      <label htmlFor="psw-repeat">
        <b>Repeat Password</b>
      </label>
      <input
        type="password"
        placeholder="Repeat Password"
        name="psw-repeat"
        id="psw-repeat"
        required=""
      />
      <hr />
      <p>
        By creating an account you agree to our{" "}
        <a href="#">Terms &amp; Privacy</a>.
      </p>
      <button type="submit" className="registerbtn">
        Register
      </button>
    </div>
    <div className="container signin">
      <p>
        Already have an account?</p> 
          {/* <button type='text' onClick={navigateToLogin}> login</button>
          */}
          
  <Button variation="text" onClick={navigateToLogin}> Login </Button>

    </div>
  </form>
</>

</div>
  )
}
export default Register