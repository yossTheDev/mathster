import {
	IconMathEqualGreater,
	IconMathEqualLower,
	IconMathGreater,
	IconMathLower,
	IconMathPi,
	IconX,
} from '@tabler/icons';
import React, { useRef } from 'react';
import { CalcButton } from './CalcButton';

export const QuickAccessBar: React.FC = () => {
	return (
		<div className='flex flex-auto lg:max-h-16  w-full max-h-12 overflow-y-hidden overflow-x-scroll text-gray-500'>
			<CalcButton className='flex h-6 p-6' operation='['></CalcButton>
			<CalcButton className='flex h-6 p-6' operation=']'></CalcButton>
			<CalcButton className='flex h-6 p-6' operation='{'></CalcButton>
			<CalcButton className='flex h-6 p-6' operation='}'></CalcButton>
			<CalcButton className='flex h-6 p-6' operation='\'></CalcButton>
			<CalcButton className='flex h-6 p-6' operation='|'></CalcButton>
			<CalcButton
				className='flex h-6 p-6'
				isFunction={true}
				label="'"
				operation="''"
			></CalcButton>

			<CalcButton className='flex h-6 p-6' operation='<'>
				<IconMathLower size={18}></IconMathLower>
			</CalcButton>
			<CalcButton className='flex h-6 p-6' operation='>'>
				<IconMathGreater size={18}></IconMathGreater>
			</CalcButton>

			<CalcButton className='flex h-6 p-6' operation='<='>
				<IconMathEqualLower size={18}></IconMathEqualLower>
			</CalcButton>
			<CalcButton className='flex h-6 p-6' operation='>='>
				<IconMathEqualGreater size={18}></IconMathEqualGreater>
			</CalcButton>
			<CalcButton className='flex h-6 p-6' operation='^'></CalcButton>
			<CalcButton className='flex h-6 p-6' operation='^2'>
				<sup>2</sup>
			</CalcButton>
			<CalcButton className='flex h-6 p-6' operation='^3'>
				<sup>3</sup>
			</CalcButton>

			<CalcButton className='flex h-6 p-6' operation='x'></CalcButton>
			<CalcButton className='flex h-6 p-6' operation='y'></CalcButton>
			<CalcButton className='flex h-6 p-6' operation='!'></CalcButton>
			<CalcButton className='flex h-6 p-6' operation='i'></CalcButton>
			<CalcButton className='flex h-6 p-6' operation='?'></CalcButton>
			<CalcButton className='flex h-6 p-6' operation='pi'>
				<IconMathPi></IconMathPi>
			</CalcButton>
			<CalcButton className='flex h-6 p-6' operation=':'></CalcButton>
			<CalcButton className='flex h-6 p-6' operation=';'></CalcButton>
			<CalcButton className='flex h-6 p-6' operation=','></CalcButton>
		</div>
	);
};
