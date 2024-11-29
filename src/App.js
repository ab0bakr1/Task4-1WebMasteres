import './App.css';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ProductProvider } from './Context/Context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Component/Pages/Home"
import SingUp from './Component/Pages/SingUp';
import LoginPage from './Component/Pages/LoginPage';
import Wishlist from './Component/Pages/Wishlist';
import CartPage from './Component/Pages/CartPage';
import BillingPage from './Component/Pages/BillingPage';
import AccountPage from './Component/Pages/AccountPage';
import AboutPage from './Component/Pages/AboutPage';
import CantactPage from './Component/Pages/CantactPage';
import ErrorPage from './Component/Pages/ErrorPage';
import SingleProductPage from './Component/Pages/SingleProductPage';
AOS.init();

function App() {
  return (   
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SingUp" element={<SingUp />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/Billing" element={<BillingPage />} />
          <Route path="/Account" element={<AccountPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Cantact" element={<CantactPage />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
