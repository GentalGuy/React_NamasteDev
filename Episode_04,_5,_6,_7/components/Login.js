import { use, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const Login = () => {
                    const navigate = useNavigate()
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
                    e.preventDefault();
                    const loggeduser = JSON.parse(localStorage.getItem("user"));
                    if(input.email === loggeduser.email && input.password === loggeduser.password){
                                        localStorage.setItem("loggedin",true);
                                        navigate("/")
                    }else{
                                        alert("wrong email and password")
                    }
  }
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="email"
            id="email"
            name="email"
            placeholder="abc@gmail.com"
          ></input>
          <br></br>
          <label htmlFor="email">Your Email</label>
          <br></br>
          <input
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="password"
            id="password"
            name="password"
            placeholder="password"
          ></input>
          <br></br>
          <label htmlFor="password">Password</label>
          <button type="submit"  className="login">Login</button>
          <p>
            Don't have an account?
            <Link className="login-link" to="/register">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
