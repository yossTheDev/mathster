import { IconMenu, IconMenu2 } from '@tabler/icons';
import React, { useState } from 'react';
import { Button, Drawer, Menu, Navbar } from 'react-daisyui';
import { NavLink } from 'react-router-dom';
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
