// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Dashboard from './pages/Dashboard'
import Home from './pages/Home';
import Stock from './components/Stock';


function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/stocks" element={<Dashboard />} />
				<Route path="/stocks/:symbol" element={<Stock />} />
			</Routes>
		</div>
	);
}

export default App;
