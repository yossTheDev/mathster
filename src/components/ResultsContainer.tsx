import React from 'react';
import { isResultSet } from 'mathjs';
import { ResultSetToArray } from '../utils/ResultSetToArray';
import { ResultItem } from './ResultItem';

interface ContainerProps {
	results: string[] | string;
}

export const ResultsContainer: React.FC<ContainerProps> = ({ results }) => {
	return (
		<div className='flex flex-col items-end select-none'>
			<div className='max-w-xs w-80 flex flex-row-reverse overflow-x-scroll p-3'>
				{/* Single Result */}
				{!isResultSet(results) && (
					<ResultItem value={results as string}></ResultItem>
				)}

				{/* Multiples Results */}
				{isResultSet(results) && (
					<div className='flex'>
						{ResultSetToArray(results).map((el, i) => (
							<ResultItem key={i} value={el}></ResultItem>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
