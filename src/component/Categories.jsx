import React from 'react';

function Categories({ filterItems }) {
  return (
    <div>
      <div className='order-menu-container flex-sb'>
        <button className='btn-order' onClick={() => filterItems('lunch')}>
          Lunch
        </button>
        <button className='btn-order' onClick={() => filterItems()}>
          Mains
        </button>
        <button className='btn-order' onClick={() => filterItems('dessert')}>
          Desserts
        </button>
        <button className='btn-order'>A La Carte</button>
        <button className='btn-order' onClick={() => filterItems('specials')}>
          Specials
        </button>
        <button className='btn-order'>Drinks</button>
      </div>
    </div>
  );
}

export default Categories;
