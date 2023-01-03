import {
	IconCoffee,
	IconCoinBitcoin,
	IconCreditCard,
	IconCurrencyDogecoin,
	IconMoneybag,
	IconPhone,
} from '@tabler/icons';
import React from 'react';
import qvapay from '../assets/qvapay.svg';
import { Navbar } from 'react-daisyui';
import { MenuButton } from '../components/MenuButton';
import { Clipboard } from '@capacitor/clipboard';

export const Donations: React.FC = () => {
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
							Donations
						</p>
					</div>
				</Navbar.Center>

				<Navbar.End></Navbar.End>
			</Navbar>

			{/* Content*/}
			<div className='overflow-scroll flex flex-auto flex-col select-none dark:bg-base-200'>
				<div className='mx-auto bg-gray-100 dark:bg-gray-800 p-6 shadow rounded-full'>
					<IconCoffee
						className='mx-auto dark:text-white'
						size={36}
					></IconCoffee>
				</div>
				<p className='mx-auto text-2xl text-center font-bold m-2 dark:text-white'>
					Buy me a coffee ☕
				</p>
				<p className='mx-auto text-center text-gray-700 mb-8'>
					Click to copy to clipboard
				</p>

				<div className='flex flex-wrap  items-center  mx-2'>
					<div className='flex flex-auto shadow rounded-2xl  dark:bg-gray-800 m-2 p-4 bg-gray-200 hover:bg-gray-300'>
						<IconCreditCard
							size={36}
							className='text-green-600 mx-auto'
							onClick={async () =>
								await Clipboard.write({ string: '9238129970601219' })
							}
						></IconCreditCard>
					</div>

					<div className='flex flex-auto  shadow rounded-2xl dark:bg-gray-800  m-2 p-4 bg-gray-200 hover:bg-gray-300'>
						<IconPhone
							size={36}
							className='text-blue-600 mx-auto'
							onClick={async () =>
								await Clipboard.write({ string: '58389251' })
							}
						></IconPhone>
					</div>

					<div className='flex flex-auto  shadow rounded-2xl dark:bg-gray-800 m-2 p-4 bg-gray-200 hover:bg-gray-300'>
						<IconCoinBitcoin
							size={36}
							className='text-yellow-400 mx-auto'
							onClick={async () =>
								await Clipboard.write({ string: '58389251' })
							}
						></IconCoinBitcoin>
					</div>

					<div className='flex flex-auto  shadow rounded-2xl dark:bg-gray-800 m-2 p-4 bg-gray-200 hover:bg-gray-300'>
						<IconCurrencyDogecoin
							size={36}
							className='text-yellow-700 mx-auto'
							onClick={async () =>
								await Clipboard.write({ string: '58389251' })
							}
						></IconCurrencyDogecoin>
					</div>

					<a
						href='https://qvapay.com/payme/yoannisgnw'
						target={'_blank'}
						className='flex flex-auto  shadow rounded-2xl dark:bg-gray-800 m-2 p-4 bg-gray-200 hover:bg-gray-300'
					>
						<img className='text-yellow-700 mx-auto h-8' src={qvapay}></img>
					</a>
				</div>
			</div>
		</>
	);
};
