import Home from './pages/home/Home';
import Error from './pages/error/Error';
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
				<Route path="/page404" element={<Error />}/>
				<Route path="*" element={<Error />}/>
			</Routes>
        </Router>
    </React.StrictMode>
	);
}

export default App;
