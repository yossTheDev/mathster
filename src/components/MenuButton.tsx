import { IconMenu2 } from '@tabler/icons';
import React from 'react';
import { Button } from 'react-daisyui';
import { useStoreActions } from '../stores/Hooks';

export const MenuButton: React.FC = () => {
	const toggleVisibiliy = useStoreActions(
		(state) => state.toggleDrawerVisibility
	);

	return (
		<Button
			className='lg:hidden'
			onClick={() => toggleVisibiliy()}
			shape='square'
			color='ghost'
		>
			<IconMenu2 className='dark:text-white'></IconMenu2>
		</Button>
	);
};
