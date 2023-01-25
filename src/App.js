import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Booking from './pages/Booking';
import Header from './sections/Header';
import Footer from './sections/Footer';
import AboutUs from './sections/AboutUs';
import Hero from './sections/Hero';
import CartList from './sections/CartList';
function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Hero />
          <Routes>
            <Route path='/' element={<HomePage />}>
              <Route path='#about' element={<AboutUs />} />
              <Route path='#menu' element={<CartList />} />
            </Route>
            <Route path='/reservation' element={<Booking />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </>
  );
}

export default App;
