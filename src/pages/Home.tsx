import {
	IconClipboard,
	IconCopy,
	IconDotsVertical,
	IconMenu,
} from '@tabler/icons';
import React from 'react';
import { Dropdown, Navbar } from 'react-daisyui';
import { Calculator } from '../components/Calculator';
import { MenuButton } from '../components/MenuButton';
import { useStoreActions, useStoreState } from '../stores/Hooks';
import { Clipboard } from '@capacitor/clipboard';
import { Share } from '@capacitor/share';
import { Toast } from '@capacitor/toast';

export const Home: React.FC = () => {
	// Store States
	const calc = useStoreState((state) => state.calc);

	// Store Actions
	const setCalc = useStoreActions((state) => state.setCalc);

	return (
		<>
			{/* Nav Bar */}
			<Navbar className='dark:bg-base-200'>
				<Navbar.Start>
					<MenuButton></MenuButton>
				</Navbar.Start>

				<Navbar.Center>
					<div className='flex-auto flex w-full mx-auto'>
						<p className='poppins-font-family normal-cas font-bold  text-2xl text-center dark:text-white'>
							Mathster
						</p>
					</div>
				</Navbar.Center>

				<Navbar.End>
					<Dropdown vertical='end' className=''>
						<Dropdown.Toggle color='ghost'>
							<IconDotsVertical className='dark:text-white'></IconDotsVertical>
						</Dropdown.Toggle>
						<Dropdown.Menu className='w-52 bg-gray-100 dark:bg-gray-800 dark:text-white'>
							<Dropdown.Item
								onClick={async () => {
									await Clipboard.write({ string: calc });
									await Toast.show({ text: 'Copied!' });
								}}
							>
								<IconCopy></IconCopy>
								<p>Copy to clipboard</p>
							</Dropdown.Item>
							<Dropdown.Item
								onClick={async () => {
									let data = await Clipboard.read();
									console.log(data);
									if (data.type === 'text/plain') setCalc(data.value);
								}}
							>
								<IconClipboard></IconClipboard>
								<p>Paste from clipboard</p>
							</Dropdown.Item>

							<Dropdown.Item
								onClick={async () => {
									await Share.share({ text: calc });
								}}
							>
								<IconClipboard></IconClipboard>
								<p>Paste from clipboard</p>
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Navbar.End>
			</Navbar>

			<Calculator></Calculator>
		</>
	);
};
