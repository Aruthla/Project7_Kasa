import Home from './pages/home/Home';
import Error404 from './pages/error404/Error404';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/Kasa/",
		element: <Home />
	},
	{
		path: "/accomodation/:id",
		element: <Accomodation />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: "*",
		element: <Error404 />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;
