import('./App.css');
import { StoreProvider } from 'easy-peasy';
import { CalcStore } from './stores/CalcStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './pages/Root';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Algebra } from './pages/Algebra';
import { ErrorPage } from './pages/ErrorPage';
import { Donations } from './pages/Donations';
import { Capacitor } from '@capacitor/core';
import { Plotting } from './pages/Plotting';

const router = createBrowserRouter([
	{
		path: '',
		errorElement: <ErrorPage></ErrorPage>,
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

			{
				path: '/donations',
				element: <Donations />,
			},

			{
				path: '/algebra',
				element: <Algebra />,
			},

			{
				path: '/plotting',
				element: <Plotting />,
			},
		],
	},

	{
		path: '/',
	},
]);

function App() {
	if (
		Capacitor.getPlatform() === 'web' ||
		Capacitor.getPlatform() === 'electron'
	)
		import('./utils.css');

	console.log(Capacitor.getPlatform());

	return (
		<StoreProvider store={CalcStore}>
			<RouterProvider router={router} />
		</StoreProvider>
	);
}

export default App;
