import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import axios from "axios";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const history = useHistory();



  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch user data from API
      const { data: users } = await axios.get('http://localhost:3001/users');

      // Find user with matching email and password

      const user = users.find((user) => user.email === credentials.email && user.password === credentials.password && credentials.email !== "" && credentials.password !== "");

      if (user) {
        console.log('Login successful', user);
        history.push('/dashboard');

        // Redirect or perform other actions upon successful login
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Login failed', error);
      setError('An error occurred while logging in');
    }
  };
  

  return (
    <div className="container-fluid" id="login">
      <h1 className="text-danger text-center">Tetime</h1>
      <div className="row p">
        <h1 className="login">Login</h1>
        <div className="col-sm-12 text p-5 mx-auto d-flex align-items-center">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={credentials.email}
                onChange={handleChange}
              />
              <small id="emailHelp" className="form-text text-white">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
            {error && <div>{error}</div>}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <p>Don't have an account?</p>
            <Link to='/signup' className="nav-link text-dark text-sm">Sign up</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;