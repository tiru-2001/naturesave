import { bannerFeatures, homecarts, testimonials } from '../../utilites';
import { Button, Carousel, Product } from '../../components';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import './home.scss';
import Cartscard from '../../components/cards/cartscards/Cartscard';
import { useSelector } from 'react-redux';
const Home = () => {
  const data = useSelector((c) => {
    console.log(c);
  });
  const bane = useRef();
  useGSAP(() => {
    let t1 = gsap.timeline();

    let arrItems = Array.from(bane.current.children);
    arrItems.forEach((ite) =>
      t1.from(ite, {
        x: -30,
        duration: 1,
        delay: 0.3,
        opacity: 0,
        stagger: 0.5,
      })
    );
    gsap.from('#line1', {
      x: -30,
      duration: 1,
      delay: 0.3,
      stagger: 0.3,
    });

    gsap.from('#line2', {
      x: 30,
      duration: 1,
      delay: 0.3,
      stagger: 0.3,
    });

    gsap.from('.best_heading', {
      y: -30,
      duration: 1,
      delay: 0.3,
    });
  });
  return (
    <section className="home">
      <section className="hero_section">
        <section ref={bane} id="top_section" className="top">
          <h1>Innovative Water,Sustainable Solar</h1>
          <p>
            At Nature Technologies, we speacialize in designing and delivering
            innoovative solar power and water treatment projects, ensuring
            long-term benefits for communities and the environmet
          </p>
          <section>
            <Button
              padding={'10px 24px'}
              title={'Learn More'}
              bg={'--third_color'}
              color={'green'}
            />
          </section>
        </section>
        <section className="bottom">
          {bannerFeatures.map((item, ind) => (
            <section key={ind} className="bottom_items">
              <section className="bottom_left">
                <img src={item.img} alt={item.img} />
              </section>
              <section className="bottom_right">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </section>
            </section>
          ))}
        </section>
      </section>

      <section className="homecart_section">
        <section className="top">
          <p className="para">What we do</p>
          <h2 className="">
            Let's explore our services, covering everything you need.
          </h2>
          <section className="top_bottom">
            <div className="line" />
            <p>
              Delve into our array of services, meticulously designed to fulfil
              every aspect of your requirements.
            </p>
          </section>
        </section>
        <section className="bottom">
          {homecarts.map((item) => (
            <Cartscard img={item.img} title={item.title} desc={item.desc} />
          ))}
        </section>
      </section>
      <section className="bestseller_section">
        <section className="bestseller_subsection">
          <section className="top">
            <div className="lines" id="line1" />
            <h2 className="best_heading">Best Seller</h2>
            <div className="lines" id="line2" />
          </section>
          <section className="bottom">
            <Product />
          </section>
        </section>
      </section>
      <section className="testimonial_sections">
        <h2>What our Client Says</h2>
        <section className="testimonial_item_container">
          <Carousel>
            {testimonials.map((item) => (
              <section className="testimonial_items" key={item.id}>
                <section className="t_items">
                  <section>
                    <img src={item.img} alt="" />
                  </section>
                  <section>
                    <p>{item.desc}</p>
                  </section>
                  <section className="t_content">
                    <h4>{item.author}</h4>
                    <small>{item.job}</small>
                  </section>
                </section>
              </section>
            ))}
          </Carousel>
        </section>
      </section>
    </section>
  );
};

export default Home;
