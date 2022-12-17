// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<Article />
			<Footer />
			<Routes>
				<Route path="/" />
			</Routes>
		</div>
	);
}

export default App;