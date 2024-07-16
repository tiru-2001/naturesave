import { Navbar, Footer } from '../../components';
import { Outlet } from 'react-router-dom';
import './parent.scss';
const Parent = () => {
  return (
    <section className="main_container font">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Parent;
