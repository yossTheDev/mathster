import {
	IconClipboard,
	IconCopy,
	IconDotsVertical,
	IconMenu,
	IconQrcode,
	IconShare,
} from '@tabler/icons';
import React, { useState } from 'react';
import { Dropdown, Modal, Navbar } from 'react-daisyui';
import { Calculator } from '../components/Calculator';
import { MenuButton } from '../components/MenuButton';
import { useStoreActions, useStoreState } from '../stores/Hooks';
import { Clipboard } from '@capacitor/clipboard';
import { Share } from '@capacitor/share';
import { Toast } from '@capacitor/toast';
import QRCode from 'react-qr-code';

export const Home: React.FC = () => {
	// Component State
	const [shareQr, setShareQr] = useState(false);

	const toggleVisible = () => {
		setShareQr(!shareQr);
	};

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
									await Share.share({
										dialogTitle: 'Share',
										title: 'Solve this problem with Mathster',
										text: calc,
										url: 'https://github.com/yossTheDev/mathster',
									});
								}}
							>
								<IconShare></IconShare>
								<p>Share</p>
							</Dropdown.Item>

							<Dropdown.Item
								onClick={async () => {
									toggleVisible();
								}}
							>
								<IconQrcode></IconQrcode>
								<p>Share Qr</p>
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Navbar.End>
			</Navbar>

			{shareQr && (
				<Modal
					className='dark:bg-gray-800'
					open={shareQr}
					onClickBackdrop={toggleVisible}
				>
					<Modal.Header className='font-bold dark:text-white'>
						Share QR Code
					</Modal.Header>

					<Modal.Body>
						<QRCode className='mx-auto' value={calc}></QRCode>
					</Modal.Body>

					<Modal.Actions>
						<button className='dark:text-white' onClick={() => toggleVisible()}>
							OK
						</button>
					</Modal.Actions>
				</Modal>
			)}

			<Calculator></Calculator>
		</>
	);
};
