import {
	IconCalculator,
	IconInfoCircle,
	IconMoneybag,
	IconSuperscript,
} from '@tabler/icons';
import React, { useEffect } from 'react';
import { Button, Drawer } from 'react-daisyui';
import { NavLink, Outlet } from 'react-router-dom';
import math from '../assets/newlogo.svg';
import { DarkModeButton } from '../components/DarkModeButton';
import { MathsterLogo } from '../components/Icons';
import { useStoreActions, useStoreState } from '../stores/Hooks';
import { StatusBar, Style } from '@capacitor/status-bar';
const side = (
	<>
		<ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content dark:bg-base-200'>
			<DarkModeButton className='absolute mr-auto'></DarkModeButton>

			<div className='rounded mx-auto p-2'>
				<MathsterLogo className='dark:fill-white h-16 w-16'></MathsterLogo>
			</div>
			<p className='poppins-font-family text-2xl m-1 mb-2 font-bold mx-auto dark:text-white'>
				Mathster
			</p>

			<li>
				<NavLink className={'dark:text-white'} to={'/'}>
					<IconCalculator></IconCalculator>
					<p>Home</p>
				</NavLink>
			</li>

			<li>
				<NavLink className={'hidden'} to={'/algebra'}>
					<IconSuperscript></IconSuperscript>
					<p>Algebra</p>
				</NavLink>
			</li>

			<li>
				<NavLink className={'dark:text-white'} to={'/donations'}>
					<IconMoneybag></IconMoneybag>
					<p>Donations</p>
				</NavLink>
			</li>

			<div className='mt-auto'>
				<div className='bg-gray-200 dark:bg-gray-800 h-0.5 m-2'></div>
				<li>
					<NavLink className={'dark:text-white'} to={'/about'}>
						<IconInfoCircle></IconInfoCircle>
						<p>About</p>
					</NavLink>
				</li>
			</div>
		</ul>
	</>
);

export const Root: React.FC = () => {
	const drawerOpen = useStoreState((state) => state.drawerOpen);
	const darkMode = useStoreState((state) => state.darkMode);
	const toggleDarkMode = useStoreActions((state) => state.toggleDarkMode);
	const toggleVisibiliy = useStoreActions(
		(state) => state.toggleDrawerVisibility
	);

	// Toggle Dark Mode
	if (darkMode === true) {
		StatusBar.setBackgroundColor({ color: '#0f111a' });
		StatusBar.setStyle({ style: Style.Dark });

		document.documentElement.classList.add('dark');
	} else {
		StatusBar.setBackgroundColor({ color: '#ffffff' });
		StatusBar.setStyle({ style: Style.Light });
		document.documentElement.classList.remove('dark');
	}

	return (
		<div>
			<Drawer onClickOverlay={toggleVisibiliy} side={side} open={drawerOpen}>
				<div className='h-screen w-screen flex flex-auto flex-col overflow-hidden'>
					{/* Content */}
					<div className='flex flex-col flex-auto h-full'>
						<Outlet></Outlet>
					</div>
				</div>
			</Drawer>
		</div>
	);
};
