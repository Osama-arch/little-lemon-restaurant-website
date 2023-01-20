import greekSalad from '../assets/images/greek-salad-b.jpg';
import bruchetta from '../assets/images/Italian-Bruschetta-Recipe.jpg';
import lemonDessert from '../assets/images/lemon-dessert.jpg';
const data = [
  {
    id: 1,
    title: 'Greek salad',
    category: 'lunch',
    imageUrl: greekSalad,
    price: 12.99,
    desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
  },
  {
    id: 2,
    title: 'Bruchetta',
    imageUrl: bruchetta,
    category: 'specials',
    price: 5.99,
    desc: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    imageUrl: lemonDessert,
    category: 'dessert',
    price: 5.0,
    desc: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
];

export default data;
