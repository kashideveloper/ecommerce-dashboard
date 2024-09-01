import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser =  async (event) => {
    
        try{
            const result = await fetch("http://localhost:2000/register", {
                method: "post",
                body: JSON.stringify({name , email , password}),
                headers: {'Content-Type' : 'application/json'}
            });

            const check = await result.json()
            console.log(check)
        }
        catch(err){
            console.log("Contact Form not working properly", err)
        }

    event.preventDefault()
  }

  return (
    <section>
      <div className="container">
        <div className="form-container">
          <h2 className="text-center mb-4">Register</h2>
          <div>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={registerUser} type="submit" className="btn btn-primary btn-block">
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
