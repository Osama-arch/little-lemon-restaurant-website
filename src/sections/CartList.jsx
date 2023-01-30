import { useState, useEffect } from 'react';
import MenuCart from '../component/MenuCart';
import Categories from '../component/Categories';
import items from '../component/cartData';
import { Link } from 'react-router-dom';
function CartList({ menuRef }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuItems, setMenuItems] = useState(items);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const filterItems = (category) => {
    if (category) {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    } else {
      setMenuItems(items);
    }
  };
  return (
    <section className='menu' id='menu' ref={menuRef}>
      <div className='menu-container center flex-col'>
        <article className='menu-article flex-sb '>
          <h3>
            {windowWidth >= 600
              ? 'This weeks specials!'
              : 'ORDER FOR DELIVERY!'}
          </h3>

          <div>
            <Link className='btn'>online menu</Link>
          </div>
        </article>
        <Categories filterItems={filterItems} />
        <MenuCart items={menuItems} />
      </div>
    </section>
  );
}

export default CartList;
