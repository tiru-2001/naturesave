import React from 'react';
import './Register.scss';
import login from '../../assets/login.png';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const handleFields = (e) => {
    setFields((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (fields.password !== fields.confirmPassword) {
        // setError(true);
        toast.error('password are not matching');
      } else {
        const { data } = await axios.post(
          'https://naturesave.vercel.app/api/v1/auth/register',
          {
            ...fields,
          }
        );
        console.log(data);
        if (data.success) {
          toast.success('user registred successfully');
          setFields({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
          });
          navigate('/login');
        }
      }
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.message);
    }
  };
  return (
    <div>
      <section className="main">
        <section className="left">
          <img src={login} alt="login" />
        </section>
        <section className="right">
          <form onSubmit={handleSubmit} className="right_subcontainer">
            <section className="top">
              <h2>Create an Account</h2>
              <p>Enter your details below</p>
            </section>
            <section className="mid">
              <div className="fields">
                <input
                  type="name"
                  name="name"
                  onChange={handleFields}
                  value={fields.name}
                  placeholder="Name"
                />
              </div>
              <div className="fields">
                <input
                  type="email"
                  name="email"
                  onChange={handleFields}
                  placeholder="Email"
                  value={fields.email}
                />
              </div>
              <div className="fields">
                <input
                  type="tel"
                  name="phone"
                  onChange={handleFields}
                  placeholder="Phone"
                  value={fields.phone}
                />
              </div>
              <div className="fields">
                <input
                  type="password"
                  name="password"
                  onChange={handleFields}
                  placeholder="Password"
                  value={fields.password}
                />
              </div>
              <div className="fields">
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleFields}
                  placeholder="Confirm Password"
                  value={fields.confirmPassword}
                />
              </div>
            </section>
            <section className="bottom">
              <button type="submit">Create Account</button>
            </section>
          </form>
        </section>
      </section>
    </div>
  );
};

export default Register;
