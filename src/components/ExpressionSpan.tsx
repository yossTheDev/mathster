import {
	IconAsterisk,
	IconDivide,
	IconEqual,
	IconEqualDouble,
	IconMathEqualGreater,
	IconMathEqualLower,
	IconMathGreater,
	IconMathLower,
	IconMathPi,
	IconMinus,
	IconPercentage,
	IconPlus,
	IconSquareRoot,
	IconX,
} from '@tabler/icons';
import React from 'react';

interface Props {
	value: string;
	type: string;
}

export const ExpressionSpan: React.FC<Props> = ({ value, type }) => {
	switch (type) {
		case 'plus':
			return (
				<span>
					<IconPlus size={28} className='inline  text-red-400'></IconPlus>
				</span>
			);

		case 'percent':
			return (
				<span>
					<IconPercentage
						size={28}
						className='inline  text-red-400'
					></IconPercentage>
				</span>
			);
		case 'minus':
			return (
				<span>
					<IconMinus size={28} className='inline  text-red-400'></IconMinus>
				</span>
			);

		case 'asterisk':
			return (
				<span>
					<IconX size={28} className='inline  text-red-400'></IconX>
				</span>
			);

		case 'divide':
			return (
				<span>
					<IconDivide size={28} className='inline  text-red-400'></IconDivide>
				</span>
			);

		case 'equal':
			return (
				<span>
					<IconEqual size={28} className='inline  text-red-400'></IconEqual>
				</span>
			);

		case 'double_equal':
			return (
				<span>
					<IconEqualDouble
						size={28}
						className='inline  text-red-400'
					></IconEqualDouble>
				</span>
			);

		case 'pi':
			return (
				<span>
					<IconMathPi size={28} className='inline  text-red-400'></IconMathPi>
				</span>
			);

		case 'less_than':
			return (
				<span>
					<IconMathLower
						size={28}
						className='inline  text-red-400'
					></IconMathLower>
				</span>
			);

		case 'more_than':
			return (
				<span>
					<IconMathGreater
						size={28}
						className='inline  text-red-400'
					></IconMathGreater>
				</span>
			);

		case 'equal_greater':
			return (
				<span>
					<IconMathEqualGreater
						size={28}
						className='inline  text-red-400'
					></IconMathEqualGreater>
				</span>
			);

		case 'equal_lower':
			return (
				<span>
					<IconMathEqualLower
						size={28}
						className='inline  text-red-400'
					></IconMathEqualLower>
				</span>
			);

		case 'square_root':
			return (
				<span>
					<IconSquareRoot
						size={28}
						className='inline  text-red-400'
					></IconSquareRoot>
				</span>
			);

		case 'separator':
			return <span className='text-xl text-gray-500'>{value}</span>;

		default:
			return <span>{value}</span>;
	}
};
