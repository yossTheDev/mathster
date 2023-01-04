import { CartesianCoordinates, FunctionGraph, Mafs, Point, Text } from 'mafs';
import { compile, evaluate, random } from 'mathjs';
import React, { useEffect, useState } from 'react';
import { Input, Navbar } from 'react-daisyui';
import { MenuButton } from '../components/General/MenuButton';
import { useStoreState } from '../stores/Hooks';

export const Plotting: React.FC = () => {
	// Component States
	const [expr, setExpr] = useState('x + 1');
	//const points = range(0, 20, true).toArray();
	const points = [
		-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
	];
	const [func, setFunc] = useState(compile(''));
	const [error, setError] = useState(true);

	// App Stores
	const darkMode = useStoreState((state) => state.darkMode);

	// Effects
	useEffect(() => {
		let s = compile('');
		try {
			let r = evaluate(expr, { x: 0 });

			if (r !== null && r !== 0) {
				setError(false);
				//console.log(array);
				s = compile(expr);
			}
		} catch (error) {
			//setError(error as unknown as string);
			console.log(error);
		}
		setFunc(s);
	}, [expr]);

	darkMode ? import('./Plotting.css') : import('./Plotting-light.css');

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
							Plotting
						</p>
					</div>
				</Navbar.Center>

				<Navbar.End></Navbar.End>
			</Navbar>

			<div className='overflow-scroll flex flex-auto flex-col select-none dark:bg-base-200'>
				<Input
					className='mt-2 mx-auto border-gray-500 dark:text-white bg-gray-100 hover:border-red-600 hover:border dark:bg-gray-800/20 border-0'
					onInput={(e) => setExpr(e.currentTarget.value)}
					value={expr}
				></Input>

				<div className='flex flex-auto  m-5 w-80 lg:h-96 lg:w-full mx-auto overflow-hidden'>
					<Mafs height={700} preserveAspectRatio={'contain'}>
						<CartesianCoordinates subdivisions={2}></CartesianCoordinates>

						<>
							<FunctionGraph.OfX
								y={(x) => func.evaluate({ x: x })}
							></FunctionGraph.OfX>

							{error === false &&
								points.map((x, index) => (
									<>
										<Text
											key={random(12, 21)}
											size={12}
											attach='e'
											attachDistance={15}
											x={x}
											y={func.evaluate({ x: x })}
										>
											{`x: ${x} y: ${func.evaluate({ x: x })}`}
										</Text>

										<Point
											color='#f25555'
											key={random(12, 21)}
											x={x}
											y={func.evaluate({ x: x })}
										></Point>
									</>
								))}
						</>
					</Mafs>
				</div>
			</div>
		</>
	);
};
