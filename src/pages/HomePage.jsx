import Testimonial from '../sections/Testimonial';

import Hero from '../sections/Hero';
import CartList from '../sections/CartList';
import AboutUs from '../sections/AboutUs';

function HomePage() {
  return (
    <>
      <CartList />
      <Testimonial />
      <AboutUs />
    </>
  );
}

export default HomePage;
