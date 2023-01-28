import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import { Announcement } from './components/Announcement';
import Footer from './components/Footer';

import Home from './pages/Home';
import Product from './pages/Product';
import ProductsList from './pages/ProductsList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Newsletter from './components/Newsletter';
import Products from './components/Products';

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Announcement />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/products" element={<ProductsList />} />
				</Routes>
				<Newsletter />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
