import { IconMoon, IconSun } from '@tabler/icons';
import React from 'react';
import { Button, Swap } from 'react-daisyui';
import { useStoreActions, useStoreState } from '../stores/Hooks';

export const DarkModeButton: React.FC<{ className?: string }> = ({
	className,
}) => {
	const darkMode = useStoreState((state) => state.darkMode);
	const toggleDarkMode = useStoreActions((state) => state.toggleDarkMode);

	return (
		<Swap
			rotate
			className={` hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-4 ${className}`}
			onChange={() => toggleDarkMode()}
			onElement={<IconMoon className='dark:text-white'></IconMoon>}
			offElement={<IconSun></IconSun>}
		></Swap>
	);
};
