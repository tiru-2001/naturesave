import './Login.scss';
import login from '../../assets/login.png';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  const handleFields = (e) => {
    setFields((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        'https://naturesave.vercel.app/api/v1/auth/login',
        {
          ...fields,
        }
      );
      console.log(data);
      if (data.success) {
        toast.success('use loggedin successfully');
        setFields({
          email: '',
          password: '',
        });
        navigate('/');
      }
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.message);
    }
  };
  return (
    <>
      <section className="login">
        <section className="left">
          <img src={login} alt="login image" />
        </section>
        <section className="right">
          <form action="" onSubmit={handleSubmit}>
            <section className="right_section1">
              <h2>Log in to Nature save</h2>
              <p>Enter your details below</p>
            </section>
            <section className="right_section2">
              <input
                placeholder="email"
                name="email"
                onChange={handleFields}
                value={fields.email}
                type="email"
              />
              <input
                name="password"
                onChange={handleFields}
                value={fields.password}
                placeholder="Password"
                type="password"
              />
            </section>
            <section className="right_section3">
              <section className="btn">
                <button>Login</button>
              </section>
              <section className="links">
                <Link to="/Forget">Forgot Password?</Link>
                <Link to="/Register">New user?</Link>
              </section>
            </section>
          </form>
        </section>
      </section>
    </>
  );
};

export default Login;
