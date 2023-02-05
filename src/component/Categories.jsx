import React from 'react';

function Categories({ filterItems }) {
  return (
    <>
      <div className='order-menu-container flex-sb'>
        <button className='btn-order' onClick={() => filterItems()}>
          Mains
        </button>
        <button className='btn-order' onClick={() => filterItems('lunch')}>
          Lunch
        </button>
        <button className='btn-order' onClick={() => filterItems('dessert')}>
          Desserts
        </button>
        <button className='btn-order' onClick={() => filterItems('specials')}>
          Specials
        </button>
        <button className='btn-order' onClick={() => filterItems('drinks')}>
          Drinks
        </button>
        <button className='btn-order' onClick={() => filterItems()}>
          La de carte
        </button>
      </div>
    </>
  );
}

export default Categories;
