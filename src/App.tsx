import './App.css';
import { StoreProvider } from 'easy-peasy';
import { CalcStore } from './stores/CalcStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './pages/Root';
import { About } from './pages/About';
import { Calculator } from './components/Calculator';
import { Home } from './pages/Home';

const router = createBrowserRouter([
	{
		path: '',
		element: <Root></Root>,
		children: [
			{
				path: '/',
				element: <Home />,
			},

			{
				path: '/about',
				element: <About />,
			},
		],
	},

	{
		path: '/',
	},
]);

function App() {
	return (
		<StoreProvider store={CalcStore}>
			<RouterProvider router={router} />
		</StoreProvider>
	);
}

export default App;
