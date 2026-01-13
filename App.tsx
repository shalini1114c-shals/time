
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Search from './pages/Search';
import ServiceWarranty from './pages/ServiceWarranty';
import ShippingReturns from './pages/ShippingReturns';
import StoreLocator from './pages/StoreLocator';
import AuthenticityCertification from './pages/AuthenticityCertification';
import AdminDashboard from './pages/AdminDashboard';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Page for Mock Checkout
const MockCheckout = () => (
  <div className="pt-48 pb-32 px-4 text-center min-h-screen flex flex-col items-center justify-center bg-black">
    <div className="mb-10 w-24 h-24 rounded-full border-4 border-[#bf953f] flex items-center justify-center animate-pulse">
       <div className="w-12 h-12 bg-[#bf953f] rounded-full"></div>
    </div>
    <h2 className="text-4xl mb-6 italic serif">Finalizing Transaction</h2>
    <p className="text-gray-500 mb-10 max-w-sm mx-auto uppercase tracking-widest text-[10px]">Securely connecting to Geneva high-stakes payment gateway...</p>
    <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
      <div className="h-full bg-[#bf953f] animate-[loading_2s_infinite_linear]"></div>
    </div>
    <style>{`
      @keyframes loading {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
    `}</style>
  </div>
);

// Basic Auth Page Mock
const AuthPage = ({ mode }: { mode: 'login' | 'register' }) => (
  <div className="pt-48 pb-32 px-4 flex items-center justify-center bg-black min-h-screen">
    <div className="max-w-md w-full bg-neutral-900 p-10 rounded-lg border border-white/5 luxury-shadow">
      <h2 className="text-3xl mb-10 text-center uppercase tracking-widest font-bold">
        {mode === 'login' ? 'Private Entrance' : 'New Member'}
      </h2>
      <form className="space-y-6">
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Email Identity</label>
          <input type="email" className="w-full bg-black border border-white/10 px-4 py-3 rounded text-sm focus:border-[#bf953f] outline-none" placeholder="excellence@elite.com" />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Access Key</label>
          <input type="password" className="w-full bg-black border border-white/10 px-4 py-3 rounded text-sm focus:border-[#bf953f] outline-none" placeholder="••••••••" />
        </div>
        <button className="w-full py-4 gold-bg text-black font-bold uppercase tracking-widest text-xs rounded transition hover:opacity-90 active:scale-95">
          {mode === 'login' ? 'Authenticate' : 'Join the Guild'}
        </button>
      </form>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/search" element={<Search />} />
              <Route path="/service-warranty" element={<ServiceWarranty />} />
              <Route path="/shipping-returns" element={<ShippingReturns />} />
              <Route path="/stores" element={<StoreLocator />} />
              <Route path="/authenticity" element={<AuthenticityCertification />} />
              <Route path="/checkout" element={<MockCheckout />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/login" element={<AuthPage mode="login" />} />
              <Route path="/register" element={<AuthPage mode="register" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
