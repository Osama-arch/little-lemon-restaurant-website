import heroimg from '../assets/images/restauranfood.jpg';
import { Link } from 'react-router-dom';
function Hero({ page }) {
  return (
    <section className='hero-section  '>
      <article className='hero-article center flex-col'>
        <h2>
          Little Lemon <span>Chicago</span>
        </h2>
        <div className='flex-sb'>
          <p>
            We are a family owned Mediterranean restaurant , focused on
            traditional recipes served with a modern twist.
          </p>
          <div className='hero-img'>
            <img src={heroimg} alt='hero' className='img' />
          </div>
        </div>

        <div>
          <Link
            to={page === 'home' ? '/reservation' : '/#menu'}
            className='btn'>
            {page === 'home' ? 'reserve a table' : 'Order for delivery'}
          </Link>
        </div>
      </article>
    </section>
  );
}

export default Hero;
