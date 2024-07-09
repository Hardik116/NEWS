import React, { useState } from 'react';

function Registration() {
  const [user, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:""
  });

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
        const response = await fetch(`http://localhost:5000/api/auth/registration`,{
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(user)
        });

        if(response.ok){
          setUser({
            username:"",
            email:"",
            phone:"",
            password:""
          })
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
                <h2>Registration Form</h2>
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required value={user.username} onChange={handleinput}/>
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required value={user.email} onChange={handleinput} />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="phone">phone</label>
                    <input type="number" id="phone" name="phone" required value={user.phone} onChange={handleinput} />
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

export default Registration;
