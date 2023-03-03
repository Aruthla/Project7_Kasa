import Home from './pages/home/Home';
import Error404 from './pages/error404/Error404';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";

function App() {
	return (
		<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/accomodation/:id" element={<Accomodation />}/>
				<Route path="/about" element={<About />}/>
				<Route path="*" element={<Error404 />}/>
			</Routes>
        </Router>
    </React.StrictMode>
	);
}

export default App;
