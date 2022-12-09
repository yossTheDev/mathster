// Add Animations
import React, { useEffect, useState } from 'react';
import { evaluate, isResultSet } from 'mathjs';
import { Menu, Navbar } from 'react-daisyui';
import { TabPanel, useTabs } from 'react-headless-tabs';
import { CalcButton } from '../components/CalcButton';
import { ExpressionContainer } from '../components/ExpressionContainer';
import { ResultsContainer } from '../components/ResultsContainer';
import { TabSelector } from '../components/TabSelector';
import { useStoreActions, useStoreState } from '../stores/Hooks';

import {
	IconAbc,
	IconAsterisk,
	IconBackspace,
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
	IconSpace,
	IconSquareRoot,
	IconX,
} from '@tabler/icons';
import { Button } from '../components/Button';
import { QuickAccessBar } from './QuickAccessBar';

export const Calculator: React.FC = () => {
	// Consts
	const letters = [
		'q',
		'w',
		'e',
		'r',
		't',
		'y',
		'u',
		'i',
		'o',
		'p',
		'a',
		's',
		'd',
		'f',
		'g',
		'h',
		'j',
		'k',
		'l',
		'y',
		'x',
		'c',
		'v',
		'b',
		'n',
		'm',
	];
	const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	const functions = [
		'and',
		'in',
		'to',
		'not',
		'or',
		'xor',
		'^',
		"'",
		'!',
		'&',
		'?',
		'~',
		'<',
		'>',
		'[',
		']',
		'{',
		'}',
	];

	const lettersFirstRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
	const lettersSecondRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
	const lettersThirdRow = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

	// Tabs
	const [selectedTab, setSelectedTab] = useTabs([
		'numbers',
		'letters',
		'functions',
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
			let r = evaluate(calc);

			// Verify if is a valid result set or single result value
			if (!r.toString().includes('arguments')) {
				if (!isResultSet(r)) {
					setResult(r.toString());
				} else {
					setResult(r);
				}
			}

			console.log(calc);
		} catch (error) {
			setError(true);
			console.log(calc);

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
						isActive={selectedTab === 'letters'}
						onClick={() => setSelectedTab('letters')}
					>
						<IconAbc></IconAbc>
					</TabSelector>
				</div>
			</div>

			{/*Tab Pad*/}
			<div className='flex flex-auto h-80  mx-1'>
				{/* Numbers and basic operations */}
				<TabPanel
					className={selectedTab === 'numbers' ? 'flex flex-col flex-auto' : ''}
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
							? 'flex flex-auto flex-col  text-gray-700 text-xl font-semibold overflow-hidden'
							: ''
					}
					hidden={selectedTab !== 'functions'}
				>
					<div className='flex flex-row flex-auto'>
						<CalcButton operation='f(x)=' label='f(x)'>
							<IconMathFunction></IconMathFunction>
						</CalcButton>
						<CalcButton operation='sqrt(' label='sqrt'>
							<IconSquareRoot></IconSquareRoot>
						</CalcButton>
						<CalcButton operation='log(' label='log(a,b)'></CalcButton>
						<CalcButton operation='log10(' label=''>
							<p>
								log<sub>10</sub>
							</p>
						</CalcButton>
						<CalcButton operation='mod(' label='mod'></CalcButton>
						<CalcButton operation='sin(' label='sin'></CalcButton>
					</div>

					<div className='flex flex-row flex-auto overflow-scroll'>
						<CalcButton operation='cos(' label='cos'></CalcButton>
						<CalcButton operation='tan(' label='tan'></CalcButton>
						<CalcButton operation='cot(' label='cot'></CalcButton>
						<CalcButton operation='cot(' label='cot'></CalcButton>
						<CalcButton operation='and'></CalcButton>
						<CalcButton operation='in'></CalcButton>
						<CalcButton operation='to'></CalcButton>
						<CalcButton operation='not'></CalcButton>
						<CalcButton
							tooltip={
								<div>
									<p className='font-bold text-xs'>
										Get the imaginary part of the number
									</p>
									<p className='text-xs'>Ex 2i + 5 re = 5</p>
								</div>
							}
							operation='re('
							label='re'
						></CalcButton>
						<CalcButton operation='im(' label='im'></CalcButton>
						<CalcButton operation='not'></CalcButton>
					</div>

					<div className='flex flex-row flex-auto'>
						<CalcButton operation='or'></CalcButton>
						<CalcButton operation='xor'></CalcButton>
						<CalcButton operation='^'></CalcButton>
						<CalcButton operation={"'"}></CalcButton>
						<CalcButton operation={'!'}></CalcButton>
						<CalcButton operation={'&'}></CalcButton>
						<CalcButton operation={'?'}></CalcButton>
					</div>

					<div className='flex flex-row flex-auto'>
						<CalcButton operation='~'></CalcButton>
						<CalcButton operation='<'></CalcButton>
						<CalcButton operation='>'></CalcButton>
						<CalcButton operation='['></CalcButton>
						<CalcButton operation=']'></CalcButton>
						<CalcButton operation='{'></CalcButton>
						<CalcButton operation='}'></CalcButton>
					</div>

					<div className='hidden  flex-row'>
						{functions.map((el) => (
							<CalcButton
								className='w-12 h-8'
								key={el}
								operation={el}
							></CalcButton>
						))}
					</div>
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
