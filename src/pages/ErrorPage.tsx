import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStoreActions } from '../stores/Hooks';

export const ErrorPage: React.FC = () => {
	const setCalc = useStoreActions((state) => state.setCalc);

	return (
		<div className='m-2 flex h-screen flex-auto'>
			<div className='mx-auto mb-auto mt-auto'>
				<p className='font-bold text-3xl'>This is a Blue Screen</p>
				<p className='m-2'>{'Sorry ):'}</p>

				<NavLink
					to={'/'}
					onClick={() => setCalc('')}
					className='m-2 bg-red-400 w-full h-8 rounded mx-auto hover:bg-red-500'
				>
					<p className='text-center mt-auto mb-auto'>Restart</p>
				</NavLink>
			</div>
		</div>
	);
};
