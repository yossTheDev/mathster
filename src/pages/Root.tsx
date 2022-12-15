import { IconCalculator, IconInfoCircle, IconSuperscript } from '@tabler/icons';
import React from 'react';
import { Drawer } from 'react-daisyui';
import { NavLink, Outlet } from 'react-router-dom';
import { useStoreActions, useStoreState } from '../stores/Hooks';
import math from '../assets/mathsterlogonew6.svg';

const side = (
	<ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
		<div className='rounded mx-auto p-2'>
			<img className='h-16' src={math}></img>
		</div>
		<p className='poppins-font-family text-2xl font-bold mx-auto'>MATHSTER</p>

		<p className='text-xs mx-auto text-gray-500 m-2'>Made by @yossthedev</p>

		<li>
			<NavLink to={'/'}>
				<IconCalculator></IconCalculator>
				<p>Home</p>
			</NavLink>
		</li>
		<li>
			<NavLink to={'/about'}>
				<IconInfoCircle></IconInfoCircle>
				<p>About</p>
			</NavLink>
		</li>

		<li>
			<NavLink to={'/algebra'}>
				<IconSuperscript></IconSuperscript>
				<p>Algebra</p>
			</NavLink>
		</li>
	</ul>
);

export const Root: React.FC = () => {
	const drawerOpen = useStoreState((state) => state.drawerOpen);
	const toggleVisibiliy = useStoreActions(
		(state) => state.toggleDrawerVisibility
	);

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
