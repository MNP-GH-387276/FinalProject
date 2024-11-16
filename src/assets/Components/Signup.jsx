import React, { useState } from 'react';
import Navbar from './Navbar';
import './Signup.css'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [Place, setPassword] = useState('');
    const [text, setname] = useState('');
    const [number, setnum] = useState('');

    const navigate=useNavigate();

    const submit = async (event) => {
        event.preventDefault(); // Prevent the default form submission
        
       
        navigate('/Home');
        // Here you can add your login logic (e.g., API call)
    };

    const signup =async (event)=>{
        alert("sdf");
        event.preventDefault();
        alert(`Email: ${email}, Place: ${Place},number:${number},name:${text}`);
        
        try {
            const response = await fetch('https://localhost:7183/Signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name:name, Age:Age,Id:23,Password:password,Email:email}),
             
            });
        
            if (response.ok) {
              const data = await response.json();             
              console.log('Signup  successful'); 
              alert(data.message);             
            }          
             
          } catch (error) {
            console.error('Signup error:', error);     
          }


    }

  return (
    <div>
        <Navbar/>
        <div className="container" style={{ marginTop: "10vh" }}>
            <form onSubmit={submit}>
                <h2>Sign up to account</h2>
                <p>Welcome back!</p>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full name:</label>
                    <input 
                        onChange={e => setname(e.target.value)} 
                        type="name" 
                        className="form-control" 
                        id="name" 
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Phone Number:</label>
                    <input 
                        onChange={e => setnum(e.target.value)} 
                        type="number" 
                        className="form-control" 
                        id="ph" 
                        required 
                    />
                </div>


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
                    <label htmlFor="Place" className="form-label">Place:</label>
                    <input 
                        onChange={e => setPassword(e.target.value)} 
                        type="text" 
                        className="form-control" 
                        id="place" 
                        required 
                    />
                </div>
                
                <button type="submit" onClick={signup}className="btn btn-primary">Sign up</button>
                
            </form>
        </div>
        </div>
  )
}

export default Signup
