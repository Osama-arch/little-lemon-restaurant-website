import heroimg from '../assets/images/restauranfood.jpg';
function Hero() {
  return (
    <section className='hero-section  '>
      <div className='hero-container flex-sb center'>
        <article className='hero-article'>
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

          <button type='button' className='btn'>
            reserve a table
          </button>
        </article>
      </div>
    </section>
  );
}

export default Hero;
