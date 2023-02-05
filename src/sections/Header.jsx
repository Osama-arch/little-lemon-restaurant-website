import { useState, useEffect, useCallback } from 'react';
import Navbar from '../component/Navbar';
import logo from '../assets/icons/logo.png';
import { HiBars3 } from 'react-icons/hi2';
import { RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ReactComponent as Basket } from '../assets/svg/basket.svg';
function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [headerTopPosition, setHeaderTopPosition] = useState(0);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    if (windowWidth >= 1280) setShowSidebar(false);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos && !showSidebar) {
      setHeaderTopPosition(-80);
    } else {
      setHeaderTopPosition(0);
    }

    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos, showSidebar]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, handleScroll]);
  return (
    <>
      {showSidebar && (
        <div id='overlay' onClick={() => setShowSidebar(false)}></div>
      )}
      <header
        className='header '
        style={{ top: `${headerTopPosition}px`, transitionDuration: '.6s' }}>
        <div className='header-container flex-sb center flex-align-center'>
          <div className='logo'>
            <Link
              to='/'
              onClick={() => {
                scrollTop();
              }}>
              <img src={logo} alt='logo' className='img' />
            </Link>
            <h1>LITTLE LEMON</h1>
          </div>

          <Navbar locate={'header'}></Navbar>

          {showSidebar ? (
            <RiCloseLine
              size='3rem'
              className='transition svg-hover burger'
              cursor={'pointer'}
              onClick={() => setShowSidebar(false)}></RiCloseLine>
          ) : (
            <HiBars3
              cursor={'pointer'}
              size='3rem'
              className='transition svg-hover burger'
              onClick={() => setShowSidebar(true)}
            />
          )}
          {showSidebar && windowWidth < 1280 && (
            <>
              <div
                className={`transition ${
                  showSidebar ? 'sidebar active' : 'sidebar'
                }`}>
                <Navbar locate={'sidebar'}></Navbar>
              </div>
            </>
          )}
          <button type='button' className='basket svg-hover'>
            <Basket />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
