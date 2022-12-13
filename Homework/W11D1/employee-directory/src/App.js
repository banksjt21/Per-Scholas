// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import Home     from "./pages/Home";
import Employee from "./pages/Employee";

import './App.css';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/employee/:employeeID" element={<Employee />} />
			</Routes>
		</div>
	);
}

export default App;