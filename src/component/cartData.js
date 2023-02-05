import greekSalad from '../assets/images/greek-salad-b.jpg';
import bruchetta from '../assets/images/Italian-Bruschetta-Recipe.jpg';
import lemonDessert from '../assets/images/lemon-dessert.jpg';
import sandwich from '../assets/images/sandwich.jpg';
import caesarSalad from '../assets/images/caesar-salad.jpg';
import tagine from '../assets/images/tagine.jpg';
import zesty from '../assets/images/zesty.jpg';
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
  {
    id: 4,
    title: 'Cheese Sandwich',
    imageUrl: sandwich,
    category: 'specials',
    price: 8.0,
    desc: 'Eggs, cheese and regular or maple chili bacon served on an flatbread',
  },
  {
    id: 5,
    title: 'Caesar Salad',
    imageUrl: caesarSalad,
    category: 'salad',
    price: 12.0,
    desc: 'Served with roman lettuce, parmesan cheese, bacon and our homemade croutons and Caesar dressing.',
  },
  {
    id: 6,
    title: 'Moroccan Tagine',
    imageUrl: tagine,
    category: 'lunch',
    price: 15.0,
    desc: 'A tender lamb stew with potatoes,gren peas, carrots,roasted tomatoes and Morroccan couscous ',
  },
  {
    id: 7,
    title: 'Zesty Lemonade',
    imageUrl: zesty,
    category: 'drinks',
    price: 3.5,
    desc: 'Our delicious cold tangy Lemonade is a favourite with our customers',
  },
];

export default data;
