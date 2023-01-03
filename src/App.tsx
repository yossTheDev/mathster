import('./App.css');
import { StoreProvider } from 'easy-peasy';
import { CalcStore } from './stores/CalcStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './pages/Root';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { AlgebraPage } from './pages/AlgebraPage';
import { ErrorPage } from './pages/ErrorPage';
import { Donations } from './pages/Donations';
import { Capacitor } from '@capacitor/core';

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
				element: <AlgebraPage />,
			},
		],
	},

	{
		path: '/',
	},
]);

function App() {
	if (Capacitor.getPlatform() === 'web') import('./utils.css');

	return (
		<StoreProvider store={CalcStore}>
			<RouterProvider router={router} />
		</StoreProvider>
	);
}

export default App;
