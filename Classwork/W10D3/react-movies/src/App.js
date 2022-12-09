import { useState, useEffect } from 'react';
import './App.css';
// WE IMPORT OUR COMPONENTS
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';



function App() {

	// Variable with your apiKey
	const apiKey = process.env.REACT_APP_API_KEY;

	// State to hold movie data
	const [movie, setMovie] = useState(null);

	// Function to getMovies
	const getMovie = async (searchTerm) => {

		// Make fetch request and store response
		try {
		const response = await fetch(
			`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
		);

		// Parse JSON response into a javascript object
		const data = await response.json();

		// Set the Movie state to the movie
		setMovie(data)
		} catch(err) {
			console.error(err);
		}
	}

	// This will run on the first render but not on subsquent renders
	useEffect(() => {
		const movies = ["Bad Boys", "Bad Boys II", "Bad Boys For Life"];
		getMovie(movies[Math.floor(Math.random() * movies.length)]);
	}, []);


	// USE OUR COMPONENTS IN APPs RETURNED JSX
	// We pass the getMovie function as a prop called moviesearch
	return (
		<div className="App">
			<Form getMovie={getMovie} />
			<MovieDisplay movie={movie} />
		</div>
	);
}

export default App;
