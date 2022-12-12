import React from 'react';
import { Navbar } from 'react-daisyui';
import { Calculator } from '../components/Calculator';
import { MenuButton } from '../components/MenuButton';

export const Home: React.FC = () => {
	return (
		<>
			{/* Nav Bar */}
			<Navbar>
				<Navbar.Start>
					<MenuButton></MenuButton>
				</Navbar.Start>

				<div className='flex-auto flex w-full '>
					<p className='normal-cas font-bold text-2xl text-center'>Mathster</p>
				</div>
			</Navbar>

			<Calculator></Calculator>
		</>
	);
};
