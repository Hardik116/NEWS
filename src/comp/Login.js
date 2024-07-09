import React, { useState } from 'react';

import {useNavigate} from "react-router-dom";


function Login(){

    const [user, setUser] = useState({
        email:"",
        password:""
      });

      const navigate= useNavigate();
    
      const handleinput = (e)=>{
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
    
        setUser({
          ...user,
          [name]:value,
        });
      }
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(user);
    
        try {
            const response = await fetch(`http://localhost:5000/api/auth/login`,{
              method:'POST',
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify(user)
            });
            if(response.ok){
                alert("login succesful")
                setUser({
                    email:"",
                    password:""
                  })
                  navigate("/");
            }
            else{
                alert("invalid credentials");
            }
        } catch (error) {
          console.log("resister",error);
        }
    
      }
    return (
        <div>
          <section>
            <main>
              <div className="section-reg">
                <div className="d-flex justify-content-evenly my-5">
                  <div className='reg-form mx-5 my-5 '>
                    <h2>login Form</h2>
                    <br />
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required value={user.email} onChange={handleinput} />
                      </div>
                      <br />
                      <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required value={user.password} onChange={handleinput} />
                      </div>
                      <br />
                      <button type="submit" className='btn btn-dark'>Register</button>
                    </form>
                  </div>
                </div>
              </div>
            </main>
          </section>
        </div>
      )
}

export default Login;

