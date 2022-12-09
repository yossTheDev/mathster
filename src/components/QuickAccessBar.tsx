import { IconMathPi, IconX } from '@tabler/icons';
import React, { useRef } from 'react';
import { CalcButton } from './CalcButton';

export const QuickAccessBar: React.FC = () => {
	return (
		<div className='flex flex-auto max-h-9 items-center w-full overflow-y-hidden overflow-x-scroll font-semibold text-gray-500'>
			<CalcButton operation='['></CalcButton>
			<CalcButton operation=']'></CalcButton>
			<CalcButton operation='{'></CalcButton>
			<CalcButton operation='}'></CalcButton>
			<CalcButton operation='/'></CalcButton>
			<CalcButton operation='|'></CalcButton>
			<CalcButton operation='^'></CalcButton>
			<CalcButton operation='x'></CalcButton>
			<CalcButton operation='i'></CalcButton>
			<CalcButton operation='pi'>
				<IconMathPi></IconMathPi>
			</CalcButton>
			<CalcButton operation=':'></CalcButton>
			<CalcButton operation=';'></CalcButton>
			<CalcButton operation=','></CalcButton>
		</div>
	);
};
