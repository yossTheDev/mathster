import { IconMenu2 } from '@tabler/icons';
import React from 'react';
import { Button } from 'react-daisyui';
import { useStoreActions } from '../stores/Hooks';

export const MenuButton: React.FC = () => {
	const toggleVisibiliy = useStoreActions(
		(state) => state.toggleDrawerVisibility
	);

	return (
		<Button onClick={() => toggleVisibiliy()} shape='square' color='ghost'>
			<IconMenu2></IconMenu2>
		</Button>
	);
};
