import { evaluate, format } from 'mathjs';
import React from 'react';
import { useStoreActions } from '../stores/Hooks';

interface Props {
	value: string;
}

export const ResultItem: React.FC<Props> = ({ value }) => {
	// Global Store Actions
	const setCalc = useStoreActions((state) => state.setCalc);

	return (
		<div
			onClick={() => {
				setCalc(value);
			}}
			className='transition ease-in-out delay-150  duration-300  shadow hover:bg-gradient-to-tl bg-gradient-to-br from-red-400 to-red-500 text-white font-semibold rounded-2xl text-right m-2 p-2 inline-block max-h-14 h-auto max-w-xs overflow-hidden'
		>
			{value.toString().includes('.')
				? format(evaluate(value), { precision: 14 })
				: value}
		</div>
	);
};
