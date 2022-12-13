// Add Animations
import React, { useEffect, useState } from 'react';
import { TabPanel, useTabs } from 'react-headless-tabs';
import { CalcButton } from '../components/CalcButton';
import { ExpressionContainer } from '../components/ExpressionContainer';
import { ResultsContainer } from '../components/ResultsContainer';
import { TabSelector } from '../components/TabSelector';
import { useStoreActions, useStoreState } from '../stores/Hooks';

import {
	IconAbc,
	IconAmpersand,
	IconArrowsExchange,
	IconBackspace,
	IconBox,
	IconBrackets,
	IconChevronLeft,
	IconChevronRight,
	IconChevronsLeft,
	IconChevronsRight,
	IconCornerDownLeft,
	IconDivide,
	IconEqual,
	IconMathFunction,
	IconMinus,
	IconNumbers,
	IconPercentage,
	IconPlus,
	IconScale,
	IconSpace,
	IconSquareRoot,
	IconTriangle,
	IconX,
} from '@tabler/icons';
import { Button } from '../components/Button';
import { QuickAccessBar } from './QuickAccessBar';
import { UnitsTab } from './UnitsTab';
import { evaluate, isResultSet } from 'mathjs';

export const Calculator: React.FC = () => {
	// Consts
	const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	const lettersFirstRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
	const lettersSecondRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
	const lettersThirdRow = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

	// Tabs
	const [selectedTab, setSelectedTab] = useTabs([
		'numbers',
		'letters',
		'functions',
		'units',
	]);

	// Component States
	const [result, setResult] = useState('');
	const [error, setError] = useState(false);

	// Store States
	const calc = useStoreState((state) => state.calc);

	// Store Actions
	const rightCursor = useStoreActions((state) => state.rightCursor);
	const leftCursor = useStoreActions((state) => state.leftCursor);
	const moveCursorToStart = useStoreActions((state) => state.startCursor);
	const moveCursorToEnd = useStoreActions((state) => state.endCursor);
	const addCalc = useStoreActions((state) => state.addCalc);
	const eraseCalc = useStoreActions((state) => state.eraseCalc);
	const delCalc = useStoreActions((state) => state.delCalc);

	useEffect(() => {
		try {
			// Prevent empty values
			if (calc === '') addCalc('0');

			// Clean error state
			setError(false);

			// Calculate!!!
			//let r = format(evaluate(calc), { precision: 14 });
			let r = evaluate(calc);

			// Verify if is a valid result set or single result value
			if (!r.toString().includes('arguments')) {
				if (!isResultSet(r)) {
					setResult(r.toString());
				} else {
					setResult(r);
				}
			}

			// console.log(calc);
		} catch (error) {
			setError(true);
			//console.log(calc);

			// TO-DO manage errors
		}
	}, [calc]);

	return (
		<>
			{/* Content*/}
			{/* Calcs and results*/}
			<div className='flex flex-auto h-80 max-h-72 flex-col'>
				<div className='flex flex-auto flex-row-reverse  h-1/2 items-end'>
					<div className='flex w-96 flex-col items-center'>
						<ExpressionContainer value={calc}></ExpressionContainer>
						{/* Loading indicator */}
						{error ? (
							<div className='flex flex-col items-end'>
								<div className='flex w-72 flex-row-reverse'>
									<div className='bg-gradient-to-br from-gray-200 to-gray-300 w-20 m-2  h-8 p-2 rounded-2xl animate-pulse'></div>
								</div>
							</div>
						) : (
							<ResultsContainer results={result}></ResultsContainer>
						)}
					</div>
				</div>
			</div>

			{/*Controls*/}
			<div className='flex flex-auto max-h-16 flex-row-reverse'>
				{/* Erase */}
				<Button
					onClick={() => eraseCalc()}
					className='hover:bg-gray-100 flex items-center rounded-2xl font-semibold mx-1 w-12 p-2'
				>
					<p className='mx-auto text-3xl text-red-400'>C</p>
				</Button>

				{/* Back */}
				<Button
					onClick={() => delCalc()}
					className='hover:bg-gray-100 flex items-center rounded-2xl font-semibold w-12 p-2'
				>
					<IconBackspace className='text-red-400 mx-auto'></IconBackspace>
				</Button>

				{/* Tabs Selector */}
				<div className='flex grow items-center'>
					<TabSelector
						isActive={selectedTab === 'numbers'}
						onClick={() => setSelectedTab('numbers')}
					>
						<IconNumbers></IconNumbers>
					</TabSelector>
					<TabSelector
						isActive={selectedTab === 'functions'}
						onClick={() => setSelectedTab('functions')}
					>
						<IconMathFunction></IconMathFunction>
					</TabSelector>

					<TabSelector
						isActive={selectedTab === 'units'}
						onClick={() => setSelectedTab('units')}
					>
						<IconScale></IconScale>
					</TabSelector>

					<TabSelector
						isActive={selectedTab === 'letters'}
						onClick={() => setSelectedTab('letters')}
					>
						<IconAbc></IconAbc>
					</TabSelector>
				</div>
			</div>

			{/*Tab Pad*/}
			<div className='flex flex-auto h-80 mx-1'>
				{/* Numbers and basic operations */}
				<TabPanel
					className={
						selectedTab === 'numbers'
							? 'flex flex-col flex-auto overflow-hidden'
							: ''
					}
					hidden={selectedTab !== 'numbers'}
				>
					{/* Special Panel */}
					<QuickAccessBar></QuickAccessBar>

					{/* Pad */}
					<div className='flex flex-row flex-auto'>
						{/* Numbers */}
						<div className='flex flex-auto flex-row w-56 text-3xl font-bold'>
							<div className='flex flex-auto flex-col'>
								<CalcButton operation='7'></CalcButton>
								<CalcButton operation='4'></CalcButton>
								<CalcButton operation='1'></CalcButton>
								<CalcButton
									className='text-gray-500'
									operation='('
								></CalcButton>
							</div>
							<div className='flex flex-auto flex-col'>
								<CalcButton operation='8'></CalcButton>
								<CalcButton operation='5'></CalcButton>
								<CalcButton operation='2'></CalcButton>
								<CalcButton operation='0'></CalcButton>
							</div>
							<div className='flex flex-auto flex-col'>
								<CalcButton operation='9'></CalcButton>
								<CalcButton operation='6'></CalcButton>
								<CalcButton operation='3'></CalcButton>
								<CalcButton
									className='text-gray-500'
									operation=')'
								></CalcButton>
							</div>
						</div>

						{/* Symbols */}
						<div className='flex flex-auto flex-row text-gray-500 font-semibold'>
							<div className='flex flex-auto flex-col'>
								<CalcButton className='text-2xl' operation='%'>
									<IconPercentage className='mx-auto'></IconPercentage>
								</CalcButton>
								<CalcButton className='text-2xl' operation='/'>
									<IconDivide className='mx-auto'></IconDivide>
								</CalcButton>
								<CalcButton className='text-2xl' operation='*'>
									<IconX className='mx-auto'></IconX>
								</CalcButton>
								<CalcButton className='text-2xl' operation='.'></CalcButton>
							</div>
							<div className='flex flex-auto flex-col'>
								<CalcButton className='text-2xl' operation='+'>
									<IconPlus className='mx-auto'></IconPlus>
								</CalcButton>
								<CalcButton className='text-2xl' operation='-'>
									<IconMinus className='mx-auto'></IconMinus>
								</CalcButton>
								<CalcButton className='text-2xl' operation={'='}>
									<IconEqual className='mx-auto'></IconEqual>
								</CalcButton>
								<CalcButton operation={'\n'}>
									<IconCornerDownLeft className='mx-auto'></IconCornerDownLeft>
								</CalcButton>
							</div>
						</div>
					</div>
				</TabPanel>

				{/* Letters */}
				<TabPanel
					className={
						selectedTab === 'letters'
							? 'flex flex-col w-full text-2xl text-gray-700 font-semibold'
							: ''
					}
					hidden={selectedTab !== 'letters'}
				>
					{/* Numbers Row */}
					<div className='flex flex-auto w-full'>
						{numbers.map((el, i) => (
							<CalcButton
								key={el}
								className='w-5 flex-auto'
								operation={el.toString()}
							></CalcButton>
						))}
					</div>
					{/* First Row */}
					<div className='flex flex-auto w-full'>
						{lettersFirstRow.map((el) => (
							<CalcButton
								key={el}
								className='w-5 flex-auto'
								operation={el}
							></CalcButton>
						))}
					</div>

					{/* First Row */}
					<div className='flex flex-auto w-full'>
						{lettersSecondRow.map((el) => (
							<CalcButton
								key={el}
								className='w-5 flex-auto'
								operation={el}
							></CalcButton>
						))}
					</div>

					{/* First Row */}
					<div className='flex  flex-auto w-full'>
						{lettersThirdRow.map((el) => (
							<CalcButton
								key={el}
								className='w-5 flex-auto'
								operation={el}
							></CalcButton>
						))}
					</div>
				</TabPanel>

				{/* Functions */}
				<TabPanel
					className={
						selectedTab === 'functions'
							? 'flex-col  text-gray-700 text-xl font-semibold overflow-scroll'
							: ''
					}
					hidden={selectedTab !== 'functions'}
				>
					{/* Grouping */}
					<div className='flex flex-row flex-auto overflow-scroll bg-gray-100'>
						<div className='bg-white shadow p-2 text-black'>
							<IconBrackets></IconBrackets>
						</div>

						<CalcButton operation='{'></CalcButton>
						<CalcButton operation='}'></CalcButton>
						<CalcButton operation='['></CalcButton>
						<CalcButton operation=']'></CalcButton>
						<CalcButton operation='('></CalcButton>
						<CalcButton operation=')'></CalcButton>
					</div>

					{/* Arithmetic Functions */}
					<div className='flex flex-row flex-auto overflow-scroll bg-gray-100'>
						<div className='bg-white shadow p-2 text-black'>
							<IconSquareRoot></IconSquareRoot>
						</div>
						<CalcButton operation='f(x)=' label='f(x)'>
							<IconMathFunction></IconMathFunction>
						</CalcButton>
						<CalcButton operation='sqrt(' label='sqrt'>
							<IconSquareRoot></IconSquareRoot>
						</CalcButton>
						<CalcButton
							tooltip='Qubic Root'
							operation='cbrt('
							label='cbrt'
						></CalcButton>
						<CalcButton
							tooltip='Absolute Value'
							operation='abs('
							label='abs'
						></CalcButton>
						<CalcButton
							tooltip='Round Value'
							operation='ceil('
							label='ceil'
						></CalcButton>
						<CalcButton operation='cube(' label='cube'></CalcButton>
						<CalcButton
							tooltip='Exponential Value'
							operation='exp('
							label='exp'
						></CalcButton>
						<CalcButton operation='fix(' label='fix'></CalcButton>
						<CalcButton operation='floor(' label='floor'></CalcButton>

						<CalcButton
							tooltip='Evaluate great common divisor gcd(a,b)'
							operation='gcd('
							label='gcd'
						></CalcButton>

						<CalcButton
							tooltip='Calculate the hypotenusa of a list with values. hypot(a,b,...)'
							operation='hypot('
							label='hypot'
						></CalcButton>

						<CalcButton
							tooltip='Logarithm log(x,base)'
							operation='log('
							label='log'
						></CalcButton>

						<CalcButton
							tooltip='Calculate the 10-base logarithm of a value'
							operation='log10('
							label='log10'
						>
							<p>
								log<sub>10</sub>
							</p>
						</CalcButton>

						<CalcButton
							tooltip='Calculates the modulus mod(x,y)'
							operation='mod('
							label='mod'
						></CalcButton>
						<CalcButton tooltip='Power of x ^ y' operation='^'></CalcButton>
					</div>

					{/* Complex Functions */}
					<div className='flex flex-row flex-auto overflow-scroll bg-gray-100'>
						<div className='bg-white shadow p-2 text-black'>2i</div>

						<CalcButton
							tooltip='Compute the argument of a complex value'
							operation='arg('
							label='arg'
						></CalcButton>
						<CalcButton
							tooltip='Compute the complex conjugate of a complex value'
							operation='conj('
							label='conj'
						></CalcButton>
						<CalcButton
							tooltip='Get the imaginary part of a complex number.'
							operation='im('
							label='im'
						></CalcButton>
						<CalcButton
							tooltip='Get the real part of a complex number.'
							operation='re('
							label='re'
						></CalcButton>
					</div>

					{/* Geometry Functions */}
					<div className='flex flex-row flex-auto overflow-scroll bg-gray-100'>
						<div className='bg-white shadow p-2 text-black'>
							<IconBox></IconBox>
						</div>

						<CalcButton
							tooltip='Calculates: The eucledian distance between two points in N-dimensional spaces. 
							Ex: distance([x1, y1], [x2, y2])'
							operation='distance('
							label='distance'
						></CalcButton>
						<CalcButton
							tooltip='Calculates the point of intersection Ex: intersect(endPoint1Line1, endPoint2Line1, endPoint1Line2, endPoint2Line2)'
							operation='conj('
							label='conj'
						></CalcButton>
					</div>

					{/* Logical Functions */}
					<div className='flex flex-row flex-auto overflow-scroll bg-gray-100'>
						<div className='bg-white shadow p-2 text-black'>
							<IconAmpersand></IconAmpersand>
						</div>

						<CalcButton operation='and(' label='and'></CalcButton>
						<CalcButton operation='not(' label='not'></CalcButton>
						<CalcButton operation='or(' label='or'></CalcButton>
						<CalcButton operation='xor(' label='xor'></CalcButton>
					</div>

					{/* Trigonometry Functions */}
					<div className='flex flex-row flex-auto overflow-scroll bg-gray-100'>
						<div className='bg-white shadow p-2 text-black'>
							<IconTriangle></IconTriangle>
						</div>

						<CalcButton operation='acos(' label='acos'></CalcButton>
						<CalcButton operation='acosh(' label='acosh'></CalcButton>
						<CalcButton operation='acot(' label='acot'></CalcButton>
						<CalcButton operation='acoth(' label='acoth'></CalcButton>
						<CalcButton operation='acsc(' label='acsc'></CalcButton>
						<CalcButton operation='acsch(' label='acsch'></CalcButton>
						<CalcButton operation='asec(' label='asec'></CalcButton>
						<CalcButton operation='asech(' label='asech'></CalcButton>
						<CalcButton operation='asin(' label='asin'></CalcButton>
						<CalcButton operation='atan(' label='atan'></CalcButton>
						<CalcButton operation='atanh(' label='asin'></CalcButton>
						<CalcButton operation='cos(' label='cos'></CalcButton>
						<CalcButton operation='cosh(' label='cosh'></CalcButton>
						<CalcButton operation='cot(' label='cot'></CalcButton>
						<CalcButton operation='coth(' label='coth'></CalcButton>
						<CalcButton operation='csc(' label='csc'></CalcButton>
						<CalcButton operation='csch(' label='csch'></CalcButton>
						<CalcButton operation='sec(' label='sec'></CalcButton>
						<CalcButton operation='sech(' label='sech'></CalcButton>
						<CalcButton operation='sin(' label='sin'></CalcButton>
						<CalcButton operation='sinh(' label='sinh'></CalcButton>
						<CalcButton operation='tan(' label='tan'></CalcButton>
						<CalcButton operation='tanh(' label='tanh'></CalcButton>
					</div>

					{/* Conversion Functions */}
					<div className='flex flex-row flex-auto overflow-scroll bg-gray-100'>
						<div className='bg-white shadow p-2 text-black'>
							<IconArrowsExchange></IconArrowsExchange>
						</div>

						<CalcButton
							tooltip='Change the unit of a value'
							operation='to'
						></CalcButton>
						<CalcButton
							tooltip='Change the unit of a value'
							operation='in'
						></CalcButton>

						<CalcButton
							tooltip='Format a number as hexadecimal'
							operation='hex('
							label='hex'
						></CalcButton>

						<CalcButton
							tooltip='Format a number as octal'
							operation='oct('
							label='oct'
						></CalcButton>

						<CalcButton
							tooltip='Format a number as binary'
							operation='bin('
							label='bin'
						></CalcButton>
					</div>
				</TabPanel>

				{/* Units */}
				<TabPanel
					className={
						selectedTab === 'units'
							? 'flex-col  text-gray-700 text-xl font-semibold overflow-scroll'
							: ''
					}
					hidden={selectedTab !== 'units'}
				>
					<UnitsTab></UnitsTab>
				</TabPanel>
			</div>

			{/* Cursor Buttons */}
			<div className='flex flex-auto max-h-12'>
				{/* To Start */}
				<button
					className='flex flex-auto rounded items-center hover:bg-gray-200 p-4'
					onClick={() => {
						moveCursorToStart();
					}}
				>
					<IconChevronsLeft className='mx-auto text-gray-500'></IconChevronsLeft>
				</button>

				{/* To Left */}
				<button
					className=' flex flex-auto p-4 rounded items-center hover:bg-gray-200'
					onClick={() => {
						leftCursor();
					}}
				>
					<IconChevronLeft className='mx-auto text-gray-500'></IconChevronLeft>
				</button>

				{/* Space */}
				<button
					className='flex flex-auto p-4 rounded items-center hover:bg-gray-200'
					onClick={() => {
						addCalc(' ');
					}}
				>
					<IconSpace className='text-gray-500 mx-auto'></IconSpace>
				</button>

				{/* To Right */}
				<button
					className='flex flex-auto rounded p-4 items-center hover:bg-gray-200'
					onClick={() => {
						rightCursor();
					}}
				>
					<IconChevronRight className='mx-auto text-gray-500'></IconChevronRight>
				</button>
				<button
					className={`flex flex-auto rounded p-4 items-center hover:bg-gray-200`}
					onClick={() => {
						moveCursorToEnd();
					}}
				>
					<IconChevronsRight className='mx-auto text-gray-500'></IconChevronsRight>
				</button>
			</div>
		</>
	);
};
