import React, { useState } from 'react';
import Navbar from './Navbar';
import './Login.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate=useNavigate();

    const submit = async (event) => {
        event.preventDefault(); // Prevent the default form submission
        
        alert(`Email: ${email}, Password: ${password}`);
        navigate('/Home');
        // Here you can add your login logic (e.g., API call)
    };
    const login = async (event) => {
        alert("sdf");
        event.preventDefault(); // Prevent the default form submission
        
        alert(`Email: ${email}, Password: ${password}`);


        try {
            const response = await fetch('https://localhost:7183/Login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ Name:'sdf', Age:'34',Id:23,Password:password,Email:email}),
             
            });
        
            if (response.ok) {
              const data = await response.json();             
              console.log('login successful'); 
              alert(data.message);             
            }          
             
          } catch (error) {
            console.error('login error:', error);     
          }


          
      //  navigate('/Home');
        // Here you can add your login logic (e.g., API call)
    };




    return (
        <div>
        <Navbar/>
        <div className="container" style={{ marginTop: "10vh" }}>
            <form onSubmit={submit}>
                <h2>Login to your account</h2>
                <p>Welcome back!</p>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address:</label>
                    <input 
                        onChange={e => setEmail(e.target.value)} 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input 
                        onChange={e => setPassword(e.target.value)} 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        required 
                    />
                </div>
                
                <button type="submit" onClick={login} className="btn btn-primary">LOG IN</button>
                
            </form>
        </div>
        </div>
    );


}

export default Login;
