import * as ce from '@cortex-js/compute-engine';
import { IconClipboardCopy, IconEqual } from '@tabler/icons';
import nerdamer from 'nerdamer/all.js';
import React, { useEffect, useState } from 'react';
import MathView from 'react-math-view';

export const AlgebraResultContainer: React.FC<{
	value: string;
	expression: string;
}> = ({
	value: variable,
	expression,
}: {
	value: string;
	expression: string;
}) => {
	const [result, setResult] = useState('');
	const [numericResult, setNumericResult] = useState('');

	useEffect(() => {
		try {
			// Resolve Equation qith Nerdamer
			const r = nerdamer.solve(expression, variable);

			// Initailize new Compute Engine
			const ces = new ce.ComputeEngine();

			// Get numeric result of the expression resolved by Nerdamer
			const t = ces
				.parse(r.toTeX().replace('[', '').replace(']', '') as string)
				.N().latex;

			setResult(r.toTeX());
			setNumericResult(t);

			//console.log(r.text());
		} catch (error) {
			//console.log(error);
		}
	}, [variable, expression]);
	return result !== '[]' && result !== '[0]' ? (
		<div className='m-4 bg-white rounded shadow p-2'>
			<p className='poppins-font-family  mb-4'>
				Results for <span className='text-2xl text-red-400'>{variable}</span>
			</p>
			<MathView readOnly className='text-2xl' value={result}></MathView>

			<div className='flex flex-row container bg-gray-100 rounded mt-4'>
				<IconEqual className='mx-2 mt-auto mb-auto'></IconEqual>
				<MathView
					readOnly
					className='text-2xl overflow-scroll mt-auto mb-auto '
					value={numericResult}
				></MathView>

				<IconClipboardCopy className='mb-auto mt-auto ml-auto'></IconClipboardCopy>
			</div>
		</div>
	) : (
		<div className='bg-gradient-to-br from-gray-200 to-gray-300 m-5 w-full mx-auto h-20 p-2 rounded-2xl animate-pulse'></div>
	);
};
