import { IconCreditCard, IconMoneybag, IconPhone } from '@tabler/icons';
import React from 'react';
import { Navbar } from 'react-daisyui';
import { MenuButton } from '../components/MenuButton';
import { Clipboard } from '@capacitor/clipboard';

export const Donations: React.FC = () => {
	return (
		<>
			{/* Nav Bar */}
			<Navbar>
				<Navbar.Start>
					<MenuButton></MenuButton>
				</Navbar.Start>
				<div className='flex-auto flex w-full '>
					<p className='poppins-font-family  normal-cas font-bold mx-auto text-2xl text-center'>
						Donations
					</p>
				</div>
			</Navbar>

			{/* Content*/}
			<div className='overflow-scroll flex flex-auto flex-col select-none'>
				<div className='mx-auto bg-gray-100 p-2 shadow rounded-full'>
					<IconMoneybag className='text-yellow-500' size={52}></IconMoneybag>
				</div>
				<p className='mx-auto text-2xl text-center font-bold m-2'>
					Buy me a coffee ☕
				</p>
				<p className='m-2 text-gray-700'>
					Show your love and buy me a coffee make a money transference to my
					number or credit card
				</p>

				<div className='mx-auto w-fit'>
					<div className='shadow rounded-full inline-block m-2 p-2 bg-gray-50 hover:bg-gray-300'>
						<IconCreditCard
							className='text-green-600'
							onClick={async () =>
								await Clipboard.write({ string: '9238129970601219' })
							}
						></IconCreditCard>
					</div>

					<div className='shadow rounded-full inline-block m-2 p-2 bg-gray-50 hover:bg-gray-300'>
						<IconPhone
							className='text-blue-600'
							onClick={async () =>
								await Clipboard.write({ string: '58389251' })
							}
						></IconPhone>
					</div>
				</div>
				<p className='mx-auto text-center'>Click to copy to clipboard</p>
			</div>
		</>
	);
};
