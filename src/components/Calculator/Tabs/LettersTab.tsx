import React from 'react';
import { CalcButton } from '../CalcButton';

export const LettersTab: React.FC = () => {
	// Constants
	const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	const lettersFirstRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
	const lettersSecondRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
	const lettersThirdRow = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

	return (
		<>
			{/* Numbers Row */}
			<div className='flex flex-auto w-full dark:text-gray-400'>
				{numbers.map((el, i) => (
					<CalcButton
						key={el}
						className='w-5 flex-auto'
						operation={el.toString()}
					></CalcButton>
				))}
			</div>
			{/* First Row */}
			<div className='flex flex-auto w-full dark:text-gray-400'>
				{lettersFirstRow.map((el) => (
					<CalcButton
						key={el}
						className='w-5 flex-auto'
						operation={el}
					></CalcButton>
				))}
			</div>

			{/* First Row */}
			<div className='flex flex-auto w-full dark:text-gray-400'>
				{lettersSecondRow.map((el) => (
					<CalcButton
						key={el}
						className='w-5 flex-auto'
						operation={el}
					></CalcButton>
				))}
			</div>

			{/* First Row */}
			<div className='flex  flex-auto w-full dark:text-gray-400'>
				{lettersThirdRow.map((el) => (
					<CalcButton
						key={el}
						className='w-5 flex-auto'
						operation={el}
					></CalcButton>
				))}
			</div>
		</>
	);
};
