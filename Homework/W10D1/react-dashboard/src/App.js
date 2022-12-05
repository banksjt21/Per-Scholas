/*  ===========================================================================
//  DEPENDENCIES
===========================================================================  */
//  Components
import Header from './components/Header';
import Main   from './components/Main';
import Footer from './components/Footer';


//  CSS
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';




/*  ===========================================================================
//  COMPONENT
===========================================================================  */
function App() {
	return (
		<div id="dashboard">
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default App;