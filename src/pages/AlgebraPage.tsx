import { IconClipboardCopy, IconTrash } from '@tabler/icons';
import 'katex/dist/katex.min.css';
import React, { useEffect, useRef, useState } from 'react';
import { Input, Navbar } from 'react-daisyui';
import MathView, { MathViewRef } from 'react-math-view';
import { AlgebraResultContainer } from '../components/AlgebraResultContainer';
import { MenuButton } from '../components/MenuButton';

function onlyUnique(value: string, index: any, self: any) {
	return self.indexOf(value) === index;
}

export const AlgebraPage: React.FC = () => {
	const allLetters = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];

	const supportedVariables = ['x', 'y', 'z'];

	const [value, setValue] = useState('');
	const [variables, setVariables] = useState(['']);
	const ref = useRef<MathViewRef>(null);

	useEffect(() => {
		try {
			// Extract all variable in expression
			const letters = [];
			for (let i of value) {
				//console.log(i);
				if (supportedVariables.includes(i)) letters.push(i);
			}
			setVariables(letters.filter(onlyUnique));

			//console.log(variables);

			//console.log(CQ('2*x**2 + y + 1/3=0').solve('y').toString());

			//var exp = algebra.parse('x * y + 4');
			//console.log(nerdamer.solve('(2x)^2 + y + 1/3=0,x', 'x'));
			//const eq = algebra.parse(value);
			//console.log(s);
			//console.log(nerdamer.solve('(2x)^2 + y + 1/3=0', 'x').toTeX());
			//console.log(ref.current?.getValue('spoken'));
			//const ces = new ce.ComputeEngine();
			//ces.symbol('x').value = 0;
			//console.log('eval ' + ces.parse(value).evaluate().latex);

			//setResult(nerdamer.solve(value, 'x').toTeX());
			//setResultX(nerdamer.solve(value, 'x').toTeX());
			//setResultY(nerdamer.solve(value, 'y').toTeX());

			//setResult(ces.parse(value).N().latex);

			/*const exp = ces.parse('3x^2+4x+c');

			for (let x = 0; x < 1; x += 0.01) {
				ces.set({ x: x });
				console.log(`f(${x} = ${exp.N().valueOf()}`);
			}*/

			//console.log(simplify('m*x + b - y = 0').toString());

			//const r = value.split('=');
		} catch (error) {
			//setResult(error.toString());
			//console.log(error);
		}
	}, [value]);

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
							Algebra
						</p>
					</div>
				</Navbar.Center>

				<Navbar.End></Navbar.End>
			</Navbar>

			<div className='overflow-scroll flex flex-auto flex-col select-none dark:bg-base-200'>
				{/* Input */}
				<div className='flex flex-row mx-auto'>
					<Input
						className='border-gray-500 dark:text-white bg-gray-100 hover:border-red-600 hover:border dark:bg-gray-800/20 border-0'
						onInput={(e) => setValue(e.currentTarget.value)}
						value={value}
					></Input>
					<div
						onClick={() => setValue('')}
						className='mt-auto mb-auto m-2 hover:bg-gray-100 hover:dark:bg-gray-800/30 p-3 rounded'
					>
						<IconTrash className='dark:text-white'></IconTrash>
					</div>
				</div>

				{/* Results and Examples */}
				<div className='flex flex-col flex-auto h-40 w-full  overflow-scroll'>
					{variables.length > 0 ? (
						variables.map((el, i) => (
							<AlgebraResultContainer
								key={i}
								value={el}
								expression={value}
							></AlgebraResultContainer>
						))
					) : (
						<div className='m-6 dark:text-white'>
							<p className='font-bold'>Some Examples</p>

							<div
								className='hover:bg-gray-100 dark:hover:bg-gray-800/30 flex  rounded p-2 select-none'
								onClick={() => setValue('3x-5')}
							>
								<MathView className='select-none' readOnly>
									3x-5
								</MathView>

								<button className='ml-auto' onClick={() => setValue('3x-5')}>
									<IconClipboardCopy></IconClipboardCopy>
								</button>
							</div>

							<div
								className='hover:bg-gray-100 flex  dark:hover:bg-gray-800/30  rounded p-2 select-none'
								onClick={() => setValue('2x+5y=7')}
							>
								<MathView className='select-none' readOnly>
									2x+5y=7
								</MathView>

								<button className='ml-auto' onClick={() => setValue('2x+5y=7')}>
									<IconClipboardCopy></IconClipboardCopy>
								</button>
							</div>

							<div
								className='hover:bg-gray-100 flex dark:hover:bg-gray-800/30   rounded p-2 select-none'
								onClick={() => setValue('2^2+5y=z')}
							>
								<MathView className='select-none' readOnly>
									{'2^2+5y=z'}
								</MathView>

								<button
									className='ml-auto'
									onClick={() => setValue('2^2+5y=z')}
								>
									<IconClipboardCopy></IconClipboardCopy>
								</button>
							</div>

							<div
								className='hover:bg-gray-100 flex dark:hover:bg-gray-800/30   rounded p-2 select-none'
								onClick={() => setValue('cos(30)+6y=x')}
							>
								<MathView className='select-none' readOnly>
									{'cos(30)+6y=x'}
								</MathView>

								<button
									className='ml-auto'
									onClick={() => setValue('cos(30)+6y=x')}
								>
									<IconClipboardCopy></IconClipboardCopy>
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
