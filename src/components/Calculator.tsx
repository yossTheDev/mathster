// Add Animations
import React, { useEffect, useState } from 'react';
import { TabPanel, useTabs } from 'react-headless-tabs';
import { Preferences } from '@capacitor/preferences';
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
	IconMathFunction,
	IconNumbers,
	IconScale,
	IconSpace,
} from '@tabler/icons';
import { Button } from '../components/Button';
import { UnitsTab } from './UnitsTab';
import { evaluate, isResultSet } from 'mathjs';
import { LettersTab } from './LettersTab';
import { FunctionsTab } from './FunctionsTab';
import { NumbersPad } from './NumbersPad';
import SwipeableViews from 'react-swipeable-views';
import { History } from './History';

export const Calculator: React.FC = () => {
	// Tabs
	const [selectedTab, setSelectedTab] = useTabs([
		'numbers',
		'letters',
		'functions',
		'units',
	]);

	// Component States
	const [index, setIndex] = useState(0);
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
	const addCalcToHistory = useStoreActions((state) => state.addCalcToHistory);

	useEffect(() => {
		try {
			// Initial value
			// Prevent empty values
			if (calc === '') addCalc('0');

			// Clean error state
			setError(false);

			// Calculate!!!
			//let r = format(evaluate(calc), { precision: 14 });
			//console.log('test ' + derivative('x ^ 2', 'x'));

			let r = evaluate(calc);

			console.log(r);

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
			console.log(error);

			//console.log(calc);

			// TO-DO manage errors
		}
	}, [calc]);

	return (
		<div className='flex flex-auto flex-col h-full md:flex-row'>
			{/* Calcs and results*/}
			<div
				className={`flex flex-auto md:grow-0 md:w-full max-w-3xl overflow-hidden md:h-full md:max-h-full h-80  flex-col dark:bg-base-200 ${
					index === 0 && 'max-h-64'
				}`}
			>
				<div className='flex flex-auto items-end h-full w-full flex-col '>
					<SwipeableViews
						onChangeIndex={(e) => setIndex(e)}
						index={index}
						className='h-full flex flex-auto'
					>
						<div className='flex flex-row  items-end h-full'>
							<div className='flex flex-col mx-auto mr-2 '>
								{index === 0 && (
									<ExpressionContainer value={calc}></ExpressionContainer>
								)}

								{/* Loading indicator or Result Container*/}
								{error ? (
									<div className='flex flex-col items-end'>
										<div className='flex w-72 flex-row-reverse'>
											<div className='bg-gradient-to-br dark:from-gray-800 from-gray-200 dark:to-gray-700 to-gray-300 w-20 m-2  h-8 p-2 rounded-2xl animate-pulse'></div>
										</div>
									</div>
								) : (
									<ResultsContainer results={result}></ResultsContainer>
								)}
							</div>
						</div>

						<div className='flex h-full items-center overflow-hidden dark:bg-gray-800/10 bg-gray-100 shadow-inner'>
							<div className='flex h-full flex-col  p-11 w-96 mr-2 mx-auto'>
								{index === 1 && <History></History>}
							</div>
						</div>
					</SwipeableViews>
				</div>
			</div>

			{/* Pad */}
			{index === 0 && (
				<div className='flex flex-auto md:w-96  md:shrink-0 h-full flex-col'>
					{/*Controls*/}
					<div className='flex flex-auto max-h-16 flex-row-reverse dark:bg-base-200 p-1'>
						{/* Erase */}
						<Button
							onClick={() => {
								addCalcToHistory(calc);
								eraseCalc();
							}}
							className=' flex items-center rounded-2xl font-semibold mx-1 w-12 p-2'
						>
							<p className='mx-auto text-3xl text-red-400'>C</p>
						</Button>

						{/* Back */}
						<Button
							onClick={() => delCalc()}
							className=' flex items-center rounded-2xl font-semibold w-12 p-2'
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
					<div className='flex flex-auto dark:bg-base-200 w-full'>
						{/* Numbers and basic operations */}
						<TabPanel
							className={
								selectedTab === 'numbers'
									? 'flex flex-col flex-auto overflow-hidden'
									: ''
							}
							hidden={selectedTab !== 'numbers'}
						>
							{selectedTab === 'numbers' && <NumbersPad></NumbersPad>}
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
					<div className='lg:hidden flex flex-auto max-h-12 dark:bg-base-200'>
						{/* To Start */}
						<Button
							className='flex flex-auto rounded items-center  p-4'
							onClick={() => {
								moveCursorToStart();
							}}
						>
							<IconChevronsLeft className='mx-auto text-gray-500'></IconChevronsLeft>
						</Button>

						{/* To Left */}
						<Button
							className=' flex flex-auto p-4 rounded items-center '
							onClick={() => {
								leftCursor();
							}}
						>
							<IconChevronLeft className='mx-auto text-gray-500'></IconChevronLeft>
						</Button>

						{/* Space */}
						<Button
							className='flex flex-auto p-4 rounded items-center '
							onClick={() => {
								addCalc(' ');
							}}
						>
							<IconSpace className='text-gray-500 mx-auto'></IconSpace>
						</Button>

						{/* To Right */}
						<Button
							className='flex flex-auto rounded p-4 items-center '
							onClick={() => {
								rightCursor();
							}}
						>
							<IconChevronRight className='mx-auto text-gray-500'></IconChevronRight>
						</Button>
						<Button
							className={`flex flex-auto rounded p-4 items-center `}
							onClick={() => {
								moveCursorToEnd();
							}}
						>
							<IconChevronsRight className='mx-auto text-gray-500'></IconChevronsRight>
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};
