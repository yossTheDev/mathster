import { fix, isResultSet, string } from 'mathjs';
import React, { useEffect, useRef, useState } from 'react';
import { useTabs } from 'react-headless-tabs';
import { useStoreActions, useStoreState } from '../stores/Hooks';
import { parseExpression } from '../utils/MathExpresions';
import './ExpressionContainer.css';
import { ExpressionSpan } from './ExpressionSpan';

interface Props {
	// Math Expression
	value: string;
}

export const ExpressionContainer: React.FC<Props> = ({ value }) => {
	// Global store states and actions
	const cursorIndex = useStoreState((state) => state.cursorIndex);

	const delCalc = useStoreActions((state) => state.delCalc);

	// Object store and actions
	const [calc, setCalc] = useState(value);
	const [fontSize, setFontSize] = useState('text-5xl');
	const reference = useRef<HTMLDivElement>(null);

	function handleinput(key: string) {
		if (key === 'Backspace') delCalc();
	}

	useEffect(() => {
		if (value.length > 16) {
			setFontSize(' text-3xl');
		} else {
			setFontSize(' text-5xl');
		}

		// Put cursor character "|" in calc expression
		setCalc(value.slice(0, cursorIndex) + '_' + value.slice(cursorIndex));

		// Auto Scroll Container
		if (cursorIndex === calc.length)
			reference.current?.scrollTo(0, reference.current?.scrollHeight);
	}, [value, cursorIndex]);

	return (
		<div
			onKeyDown={(e) => {
				console.log(e.currentTarget.innerText);
				setCalc(e.currentTarget.innerText);
			}}
			ref={reference}
			className={`container-wrap w-80 max-h-36 lg:max-h-full lg:max-w-2xl lg:w-full lg:h-96  min-h-16 items-end font-semibold text-end select-none ${fontSize}`}
		>
			{parseExpression(calc).map((elem, i) =>
				elem.value !== '_' ? (
					<ExpressionSpan
						key={i}
						value={elem.value}
						type={elem.type as string}
						index={elem.index}
					></ExpressionSpan>
				) : (
					<span
						key={'cursor'}
						className={`relative animate-pulse h-2 p-0.5 bg-red-400`}
					></span>
				)
			)}
		</div>
	);
};
