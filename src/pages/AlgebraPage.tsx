import React, { useEffect, useState } from 'react';
import { Input, Navbar } from 'react-daisyui';
import { MenuButton } from '../components/MenuButton';
import {
	IconBrandGithub,
	IconBrandTelegram,
	IconBrandTwitter,
	IconMathIntegral,
} from '@tabler/icons';
//import mathsteps from 'mathsteps';

import yoss from '../assets/yoss.png';
import math from '../assets/mathsterlogonew6.svg';
import { resolve, simplify } from 'mathjs';

export const AlgebraPage: React.FC = () => {
	const [value, setValue] = useState('');
	const [result, setResult] = useState('');

	useEffect(() => {
		try {
			// setResult(mathsteps.solveEquation(value));
			setResult(resolve(value).toString());
		} catch (error) {
			//setResult(error.toString());
			console.log(error);
		}
	});

	return (
		<>
			{/* Nav Bar */}
			<Navbar>
				<Navbar.Start>
					<MenuButton></MenuButton>
				</Navbar.Start>
				<div className='flex-auto flex w-full '>
					<div className='flex-row flex mx-auto'>
						<IconMathIntegral className='mt-auto mb-auto'></IconMathIntegral>
						<p className='poppins-font-family normal-cas font-bold  text-2xl text-center'>
							Algebra
						</p>
					</div>
				</div>
			</Navbar>

			<div className='overflow-scroll flex flex-auto flex-col select-none'>
				<Input
					onInput={(e) => setValue(e.currentTarget.value)}
					value={value}
				></Input>

				{result}
			</div>
		</>
	);
};
