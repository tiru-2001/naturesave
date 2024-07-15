'use client';
import './navbar.scss';
import { useGSAP } from '@gsap/react';
import { IoMenuOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import gsap from 'gsap';
import { CiSearch } from 'react-icons/ci';
import { BsCart } from 'react-icons/bs';
import { GoPerson } from 'react-icons/go';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// gsap.registerPlugin(ScrollTrigger);

const links = [
  { path: '/', title: 'Home' },
  { path: '/register', title: 'Register' },
  { path: '/login', title: 'Login' },
  { path: '/services', title: 'Services' },
  { path: '/contact', title: 'Contact Us' },
  {
    path: '/search',
    title: <CiSearch style={{ fontWeight: 'bold', fontSize: '1.5rem' }} />,
  },
  {
    path: '/cart',
    title: <BsCart style={{ fontWeight: 'bold', fontSize: '1.2rem' }} />,
  },
  {
    path: '/account',
    title: <GoPerson style={{ fontWeight: 'bold', fontSize: '1.5rem' }} />,
  },
];

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cslice);
  const [toggle, setToggle] = useState(false);
  useGSAP(() => {
    let t1 = gsap.timeline();
    t1.from('.logo_section', {
      y: -20,
      duration: 1,
      delay: 0.2,
      opacity: 0,
    });
    t1.from('.linkk', {
      y: -20,
      duration: 0.5,
      stagger: 0.3,
      opacity: 0,
    });
  });
  return (
    <header className="header_maincontainer">
      <section className="logo_section">
        <img src={logo} alt="logo" />
      </section>
      <section className="link_sections">
        {links.map((item, ind) => {
          if (item.path == '/cart') {
            return (
              <section key={ind} className="cart_link linkk">
                {totalQuantity != 0 && (
                  <section className="badge">{totalQuantity}</section>
                )}
                <Link className="" to={item.path}>
                  {item.title}
                </Link>
              </section>
            );
          } else {
            return (
              <Link className="linkk" key={ind} to={item.path}>
                {item.title}
              </Link>
            );
          }
        })}
      </section>

      {/* mobile menu  */}
      <section className="mobile_menu_container">
        <section className="menu_icon">
          {!toggle && (
            <IoMenuOutline
              style={{ fontSize: '1.2rem', cursor: 'pointer' }}
              onClick={() => {
                setToggle(true);
              }}
            />
          )}
        </section>
        {toggle && (
          <section className="mobile_links">
            <section className="cancel_menu">
              {toggle && (
                <RxCross2
                  style={{
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    color: 'white',
                  }}
                  onClick={() => {
                    setToggle(false);
                  }}
                />
              )}
            </section>
            <section className="links">
              {links.map((item, ind) => {
                if (item.path == '/cart') {
                  return (
                    <section key={ind} className="cart_link linkk">
                      {totalQuantity && (
                        <section className="badge">{totalQuantity}</section>
                      )}
                      <Link className="" to={item.path}>
                        {item.title}
                      </Link>
                    </section>
                  );
                } else {
                  return (
                    <Link className="linkk" key={ind} to={item.path}>
                      {item.title}
                    </Link>
                  );
                }
              })}
            </section>
          </section>
        )}
      </section>
    </header>
  );
};

export default Navbar;
