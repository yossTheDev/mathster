import React from 'react';
import { parseExpression } from '../utils/MathExpresions';
import { ExpressionSpan } from './ExpressionSpan';

interface Props {
	className?: string;
	value: string;
}

export const ExpressionViewer: React.FC<Props> = ({ className, value }) => {
	return (
		<div className={`whitespace-pre-wrap select-none ${className}`}>
			{parseExpression(value).map((elem, i) =>
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
