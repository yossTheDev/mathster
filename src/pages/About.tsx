import React from 'react';
import { Navbar } from 'react-daisyui';
import { MenuButton } from '../components/MenuButton';
import {
	IconBrandGithub,
	IconBrandTelegram,
	IconBrandTwitter,
} from '@tabler/icons';

import yoss from '../assets/yoss.png';
import { MathsterLogo } from '../components/Icons';

export const About: React.FC = () => {
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
							About
						</p>
					</div>
				</Navbar.Center>

				<Navbar.End></Navbar.End>
			</Navbar>

			<div className='overflow-scroll flex flex-auto flex-col select-none dark:bg-base-200'>
				{/* App Card*/}
				<div className='mx-auto mt-6 flex-row flex'>
					<div className='flex flex-auto flex-col'>
						<MathsterLogo className='dark:fill-white h-20 w-20'></MathsterLogo>
					</div>
					<div className='flex flex-auto flex-col m-2 mt-6'>
						<p className='mx-auto font-bold text-2xl dark:text-white'>
							Mathster
						</p>
						<p className='mx-auto text-gray-500'>v 0.0.4 r</p>
					</div>
				</div>
				{/* Hero Card*/}
				<div className='flex flex-col shadow-xl p-6 rounded mx-6 dark:text-white'>
					<img src={yoss} className='rounded-full h-36 mx-auto'></img>
					<p className='text-3xl font-bold m-2'>Hi! 👋</p>
					<p className='font-semibold m-2'>I am Yoannis Sánchez Soto</p>
					<p className='m-2'>
						Thank you for installing Mathster. You can follow me on my networks
						to join me in the development of my app
					</p>

					<div className='mx-auto w-fit'>
						<a
							href='https://t.me/yossthedev'
							target={'_blank'}
							className='shadow rounded-full inline-block m-2 p-2 dark:bg-gray-900 bg-gray-50 hover:bg-gray-300'
						>
							<IconBrandTelegram className='dark:text-white'></IconBrandTelegram>
						</a>

						<a
							href='https://twitter.com/yossthedev'
							target={'_blank'}
							className='shadow rounded-full inline-block m-2 p-2 dark:bg-gray-900 bg-gray-50 hover:bg-gray-300'
						>
							<IconBrandTwitter className='dark:text-white'></IconBrandTwitter>
						</a>

						<a
							href='https://github.com/yossthedev'
							target={'_blank'}
							className='shadow rounded-full inline-block m-2 p-2 dark:bg-gray-900 bg-gray-50 hover:bg-gray-300'
						>
							<IconBrandGithub className='dark:text-white'></IconBrandGithub>
						</a>
					</div>
				</div>

				<div className='bg-black p-4 hidden h-12 rounded-3xl mx-3'>
					<IconBrandGithub className='inline-block mx-auto text-white'></IconBrandGithub>
					<p className='inline-block ml-2 text-white font-bold mx-auto'>
						Project Repository
					</p>
				</div>
			</div>
		</>
	);
};
