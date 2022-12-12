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
		<div className='flex grow-0 shrink-0 max-h-9 items-center w-full overflow-y-hidden overflow-x-scroll font-semibold text-gray-500'>
			<CalcButton operation='['></CalcButton>
			<CalcButton operation=']'></CalcButton>
			<CalcButton operation='{'></CalcButton>
			<CalcButton operation='}'></CalcButton>
			<CalcButton operation='\'></CalcButton>
			<CalcButton operation='|'></CalcButton>
			<CalcButton operation='<'>
				<IconMathLower size={18}></IconMathLower>
			</CalcButton>
			<CalcButton operation='>'>
				<IconMathGreater size={18}></IconMathGreater>
			</CalcButton>

			<CalcButton operation='<='>
				<IconMathEqualLower size={18}></IconMathEqualLower>
			</CalcButton>
			<CalcButton operation='>='>
				<IconMathEqualGreater size={18}></IconMathEqualGreater>
			</CalcButton>
			<CalcButton operation='^'></CalcButton>
			<CalcButton operation='x'></CalcButton>
			<CalcButton operation='!'></CalcButton>
			<CalcButton operation='i'></CalcButton>
			<CalcButton operation='?'></CalcButton>
			<CalcButton operation='pi'>
				<IconMathPi></IconMathPi>
			</CalcButton>
			<CalcButton operation=':'></CalcButton>
			<CalcButton operation=';'></CalcButton>
			<CalcButton operation=','></CalcButton>
		</div>
	);
};
