import heroimg from '../assets/images/restauranfood.jpg';
import { useNavigate, Link } from 'react-router-dom';
function Hero() {
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

        <Link to='/reservation' className='btn'>
          reserve a table
        </Link>
      </article>
    </section>
  );
}

export default Hero;
