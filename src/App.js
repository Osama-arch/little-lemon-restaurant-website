import './App.css';
import Navbar from './component/Navbar';
import MenuCart from './component/MenuCart';
import Testimonial from './component/Testimonial';
import logo from './assets/icons/lemonLogo.png';
import heroimg from './assets/images/restauranfood.jpg';
import loby from './assets/images/loby.jpg';
import hall from './assets/images/hall.jpg';
function App() {
  const style = { width: '150px', height: '200px' };
  return (
    <>
      <header>
        <Navbar></Navbar>
        <h1>
          <img src={logo} alt='logo' style={style} />
          LITTLE LEMON
        </h1>
      </header>
      <main>
        <section className='hero'>
          <div className='hero-container'>
            <article className='hero-article'>
              <h2>Little Lemon </h2>
              <p>Chicago</p>
              <p>
                We are a family owned Mediterranean restaurant , focused on
                traditional recipes served with a modern twist.
              </p>
              <button type='button'>reserve a table</button>
            </article>
            <div className='hero-img'>
              <img src={heroimg} alt='hero' style={style} />
            </div>
          </div>
        </section>
        <section className='menu'>
          <div className='menu-container'>
            <article>
              <h3>This weeks specials!</h3>
              <button type='button'>online menu</button>
            </article>
            <MenuCart />
          </div>
        </section>
        <section className='testimonial'>
          <div className='testimonial-container'>
            <h4>What our costumers say!</h4>
            <Testimonial />
          </div>
        </section>
        <section className='about'>
          <div className='about-container'>
            <article className='about-article'>
              <h3>Little Lemon</h3>
              <p>Chicago</p>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit.
              </p>
            </article>
            <div className='aboutImg-container'>
              <img src={hall} alt='hall' style={style} />
              <img src={loby} alt='loby' style={style} />
            </div>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <div>
          <div>
            <img src={logo} alt='logo' style={style} />
            LITTLE LEMON
          </div>
          <div className='socials'>
            <a href='https://www.facebook.com'>a</a>
            <a href='https://www.twitter.com'>a</a>
            <a href='https://www.instagram.com'>a</a>
            <a href='https://www.telegram.com'>a</a>
          </div>
        </div>
        <Navbar />

        <div>
          <div className='form'>
            <label htmlFor='subscribe'>Subscribe!</label>
            <input type='email' name='' id='subscribe' />
          </div>
          <div className='address'>
            <p>53, East Birchwood Ave. Brooklyn, New York 11201, USA.</p>
            <p>contact@littlelemon.com</p>
            <p>{`(123) 456 - 7890`}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
