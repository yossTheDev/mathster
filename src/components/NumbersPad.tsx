import {
	IconPercentage,
	IconDivide,
	IconX,
	IconPlus,
	IconMinus,
	IconEqual,
	IconCornerDownLeft,
} from '@tabler/icons';
import React from 'react';
import { CalcButton } from './CalcButton';
import { QuickAccessBar } from './QuickAccessBar';

export const NumbersPad: React.FC = () => {
	return (
		<>
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
						<CalcButton className='text-gray-500' operation='('></CalcButton>
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
						<CalcButton className='text-gray-500' operation=')'></CalcButton>
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
		</>
	);
};
