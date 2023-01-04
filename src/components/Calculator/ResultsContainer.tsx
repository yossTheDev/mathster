import React, { useEffect, useRef } from 'react';
import { isResultSet } from 'mathjs';
import { ResultSetToArray } from '../../utils/ResultSetToArray';
import { ResultItem } from './ResultItem';

interface ContainerProps {
	results: string[] | string;
}

export const ResultsContainer: React.FC<ContainerProps> = ({ results }) => {
	const reference = useRef<HTMLDivElement>(null);

	useEffect(() => {
		reference.current?.scrollTo(reference.current?.scrollWidth, 0);
	});
	return (
		<div className='flex flex-col items-end select-none'>
			<div className='max-w-xs lg:max-w-2xl w-80 lg:w-full lg:p-2 lg:overflow-scroll lg:flex lg:flex-auto flex flex-row-reverse overflow-x-scroll p-1'>
				{/* Single Result */}
				{!isResultSet(results) && (
					<ResultItem value={results as string}></ResultItem>
				)}

				{/* Multiples Results */}
				{isResultSet(results) && (
					<div
						ref={reference}
						className='flex flex-row max-w-lg items-start overflow-scroll'
					>
						{ResultSetToArray(results).map((el, i) => (
							<ResultItem key={i} value={el}></ResultItem>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
