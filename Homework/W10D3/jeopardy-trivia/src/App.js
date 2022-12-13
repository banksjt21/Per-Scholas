/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Score  from './components/Score';
import Play   from './components/Play';
import Trivia from './components/Trivia';
import Reveal from './components/Reveal';
import './App.css';




/*  ===========================================================================
//  APP
//  =======================================================================  */
function App() {

	const [trivia, setTrivia] = useState(null);
	const [question, setQuestion] = useState("");

	const getTrivia = async () => {
		try {
			const api_url  = "http://jservice.io/api/random";
			const response = await fetch(api_url);
			const data     = await response.json();
			setTrivia(data[0]);
			
		} catch (error) {
			console.error(error);
		}
	}
	


	useEffect(() => {
		getTrivia();
	}, [])


	return (
		<div id='jeopardy'>
			<Header />
			<Score />
			<Play getTrivia={getTrivia} setQuestion={setQuestion}  />
			<Trivia trivia={trivia} />
			<Reveal trivia={trivia} setQuestion={setQuestion} question={question} />
		</div>
	);
}

export default App;
