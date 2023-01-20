import { useState, useEffect } from 'react';
import MenuCart from '../component/MenuCart';
import Categories from '../component/Categories';
import items from '../component/cartData';
function CartList() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
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
    <section className='menu'>
      <div className='menu-container center flex-col'>
        <article className='menu-article flex-sb'>
          <h3>
            {windowWidth >= 600
              ? 'This weeks specials!'
              : 'ORDER FOR DELIVERY!'}
          </h3>
          <button type='button' className='btn'>
            online menu
          </button>
        </article>
        {windowWidth < 600 && <Categories filterItems={filterItems} />}
        <MenuCart items={menuItems} />
      </div>
    </section>
  );
}

export default CartList;
