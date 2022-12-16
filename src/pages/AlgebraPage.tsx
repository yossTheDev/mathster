import { IconClipboardCopy, IconSubscript, IconTrash } from '@tabler/icons';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Input, Navbar } from 'react-daisyui';
import { MenuButton } from '../components/MenuButton';
//import mathsteps from 'mathsteps';
//import algebra from 'algebra.js';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import nerdamer from 'nerdamer/all.js';
//import * as CQ from 'coffeequate';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';
import MathView, { MathViewRef } from 'react-math-view';
import { AlgebraResultContainer } from '../components/AlgebraResultContainer';
import { Button } from '../components/Button';

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
			<Navbar>
				<Navbar.Start>
					<MenuButton></MenuButton>
				</Navbar.Start>
				<div className='flex-auto flex w-full '>
					<div className='flex-row flex mx-auto'>
						<p className='poppins-font-family normal-cas font-bold  text-2xl text-center'>
							Algebra
						</p>
					</div>
				</div>
			</Navbar>

			<div className='overflow-scroll flex flex-auto flex-col select-none mt-2'>
				<div className='flex flex-row mx-auto'>
					<Input
						className='border-gray-500 hover:border-2'
						onInput={(e) => setValue(e.currentTarget.value)}
						value={value}
					></Input>
					<div
						onClick={() => setValue('')}
						className='mt-auto mb-auto hover:bg-gray-100 p-3 rounded'
					>
						<IconTrash></IconTrash>
					</div>
				</div>

				<MathView
					ref={ref}
					onInput={(e) =>
						console.log(
							e.currentTarget.getValue('ascii-math').replace('⋅', '*')
						)
					}
					className='bg-slate-500 hidden text-3xl'
					letterShapeStyle='iso'
					aria-multiline
					value={value}
				></MathView>

				{variables.length > 0 ? (
					variables.map((el, i) => (
						<AlgebraResultContainer
							key={i}
							value={el}
							expression={value}
						></AlgebraResultContainer>
					))
				) : (
					<div className='m-6'>
						<p className='font-bold'>Some Examples</p>

						<div
							className='hover:bg-gray-100 flex  rounded p-2 select-none'
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
							className='hover:bg-gray-100 flex  rounded p-2 select-none'
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
							className='hover:bg-gray-100 flex  rounded p-2 select-none'
							onClick={() => setValue('2^2+5y=z')}
						>
							<MathView className='select-none' readOnly>
								{'2^2+5y=z'}
							</MathView>

							<button className='ml-auto' onClick={() => setValue('2^2+5y=z')}>
								<IconClipboardCopy></IconClipboardCopy>
							</button>
						</div>

						<div
							className='hover:bg-gray-100 flex  rounded p-2 select-none'
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
		</>
	);
};
