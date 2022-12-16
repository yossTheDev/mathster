import {
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
import React, { ReactNode } from 'react';
import { useStoreActions, useStoreState } from '../stores/Hooks';

interface Props {
	value: string;
	type: string;
	index: number;
}

interface SpanProps {
	index: number;
	children: ReactNode;
}

const Span: React.FC<SpanProps> = ({ children, index }: SpanProps) => {
	// Store Actions
	const setCursor = useStoreActions((state) => state.setCursor);

	return (
		<span
			className='transition ease-in-out delay-150  duration-300 hover:bg-gray-100 hover:rounded'
			onClick={() => setCursor(index)}
		>
			{children}
		</span>
	);
};

export const ExpressionSpan: React.FC<Props> = ({ value, type, index }) => {
	// Store Actions
	const setCursor = useStoreActions((state) => state.setCursor);

	switch (type) {
		case 'plus':
			return (
				<Span index={index}>
					<IconPlus size={28} className='inline  text-red-400'></IconPlus>
				</Span>
			);

		case 'percent':
			return (
				<Span index={index}>
					<IconPercentage
						size={28}
						className='inline  text-red-400'
					></IconPercentage>
				</Span>
			);
		case 'minus':
			return (
				<Span index={index}>
					<IconMinus
						onClick={() => setCursor(index)}
						size={28}
						className='inline  text-red-400'
					></IconMinus>
				</Span>
			);

		case 'asterisk':
			return (
				<Span index={index}>
					<IconX size={28} className='inline  text-red-400'></IconX>
				</Span>
			);

		case 'divide':
			return (
				<Span index={index}>
					<IconDivide
						onClick={() => setCursor(index)}
						size={28}
						className='inline  text-red-400'
					></IconDivide>
				</Span>
			);

		case 'equal':
			return (
				<Span index={index}>
					<IconEqual size={28} className='inline  text-red-400'></IconEqual>
				</Span>
			);

		case 'double_equal':
			return (
				<Span index={index}>
					<IconEqualDouble
						size={28}
						className='inline text-red-400'
					></IconEqualDouble>
				</Span>
			);

		case 'pi':
			return (
				<Span index={index}>
					<IconMathPi size={28} className='inline  text-red-400'></IconMathPi>
				</Span>
			);

		case 'less_than':
			return (
				<Span index={index}>
					<IconMathLower
						size={28}
						className='inline  text-red-400'
					></IconMathLower>
				</Span>
			);

		case 'more_than':
			return (
				<Span index={index}>
					<IconMathGreater
						size={28}
						className='inline  text-red-400'
					></IconMathGreater>
				</Span>
			);

		case 'equal_greater':
			return (
				<Span index={index}>
					<IconMathEqualGreater
						size={28}
						className='inline  text-red-400'
					></IconMathEqualGreater>
				</Span>
			);

		case 'equal_lower':
			return (
				<Span index={index}>
					<IconMathEqualLower
						size={28}
						className='inline  text-red-400'
					></IconMathEqualLower>
				</Span>
			);

		case 'square_root':
			return (
				<Span index={index}>
					<IconSquareRoot
						size={28}
						className='inline  text-red-400'
					></IconSquareRoot>
				</Span>
			);

		case 'qubic_root':
			return (
				<Span index={index}>
					<sup className='inline text-2xl text-red-400 mt-2'>3</sup>
					<IconSquareRoot
						size={28}
						className='inline  text-red-400'
					></IconSquareRoot>
				</Span>
			);

		case 'power_of':
			return (
				<Span index={index}>
					<sup className='text-xl -ml-2 text-gray-800'>{value}</sup>{' '}
				</Span>
			);

		case 'letters':
			return (
				<Span index={index}>
					<span className='font-serif'>{value}</span>
				</Span>
			);

		case 'separator':
			return <span className='text-xl text-gray-500'>{value}</span>;

		default:
			return <Span index={index}>{value}</Span>;
	}
};
