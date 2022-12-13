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
	IconScale,
	IconSpace,
	IconX,
} from '@tabler/icons';
import { Button } from '../components/Button';
import { QuickAccessBar } from './QuickAccessBar';
import { UnitsTab } from './UnitsTab';
import { evaluate, isResultSet } from 'mathjs';
import { LettersTab } from './LettersTab';
import { FunctionsTab } from './FunctionsTab';

export const Calculator: React.FC = () => {
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
					{selectedTab === 'letters' && <LettersTab></LettersTab>}
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
					{selectedTab === 'functions' && <FunctionsTab></FunctionsTab>}
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
					{selectedTab === 'units' && <UnitsTab></UnitsTab>}
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
