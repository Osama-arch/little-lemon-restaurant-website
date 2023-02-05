import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './sections/Header';
import Footer from './sections/Footer';
import AboutUs from './sections/AboutUs';
import CartList from './sections/CartList';
import Reservation from './pages/Reservation';
import ConfirmedBooking from './pages/ConfirmedBooking';
function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HomePage />}>
              <Route path='#about' element={<AboutUs />} />
              <Route path='#menu' element={<CartList />} />
            </Route>
            <Route path='/reservation' element={<Reservation />} />
            <Route path='/confirmedBooking' element={<ConfirmedBooking />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </>
  );
}

export default App;
