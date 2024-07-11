import React, { useState } from 'react';
import formimage from "../assets/formimage.jpg"
import "../Styles/Register.css";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2000/user/Register', formData);
      if (response.data.message === "Regestration successfull!") {
        toast.success("Regestration successfull!");
        console.log("msg" + response.data.message);
        navigate("/Login");

      }

      else {
        toast.error(response.data.message);
        console.log("error " + response.data.message)
      }
    }
    catch (error) {
      console.log(error)
      toast.error("something went wrong")
    }

  };

  const { username, email, password } = formData;

  return (
    
      <div className="container">
        <div className="titlebox">
          <p>Sign up today to savor exclusive offers, delicious recipes, and a world of culinary delights at your fingertips.</p>
        </div>
        <div className="box1">
          <div className="imagebox">
            <img src={formimage} alt="" width={500} height={300} />
          </div>


          <div className="signupform">
            <>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />

              <div className="formtitle">
                <h2>Register</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder='Enter your name'
                  name='username'
                  value={username}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder='Enter your email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder='Enter your password'
                  name='password'
                  value={password}
                  onChange={handleChange}
                />
                <button type="submit">Submit</button>
              </form>

            </>
          </div>
        </div>
 

    </div>
  );
}

export default Register;
