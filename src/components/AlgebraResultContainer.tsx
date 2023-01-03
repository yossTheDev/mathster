import * as ce from '@cortex-js/compute-engine';
import { IconClipboardCopy, IconCopy, IconEqual } from '@tabler/icons';
import { parse } from 'mathjs';
import nerdamer from 'nerdamer/all.js';
import React, { useEffect, useState } from 'react';
import MathView from 'react-math-view';
import { ExpressionViewer } from './ExpressionViewer';

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
			let t = ces
				.parse(r.toTeX().replace('[', '').replace(']', '') as string)
				.N().latex;

			setResult(r.toString().replace('[', '').replace(']', ''));
			setNumericResult(t.replace('"', '').replace('"', ''));

			//console.log(r.text());
		} catch (error) {
			//console.log(error);
		}
	}, [variable, expression]);
	return result !== '[]' && result !== '[0]' ? (
		<div className='m-4 bg-gray-100 rounded-2xl shadow p-4 dark:bg-gray-800/30'>
			<p className='poppins-font-family text-2xl m-2  mb-4 dark:text-white'>
				Results for
				<span className='text-xl text-red-400 ml-2'>{variable}</span>
			</p>

			<ExpressionViewer className='text-2xl' value={result}></ExpressionViewer>

			<div className='flex flex-row bg-gray-100 dark:bg-gray-800/50 rounded mt-4'>
				<IconEqual className='flex mx-2 mt-auto mb-auto'></IconEqual>

				<MathView
					readOnly
					className='text-2xl dark:text-white overflow-scroll w-8 flex flex-auto mt-auto mb-auto'
					value={numericResult}
				></MathView>

				<IconCopy className='mb-auto mt-auto hover:bg-white/5 rounded dark:text-white ml-2 mr-2'></IconCopy>
			</div>
		</div>
	) : (
		<div className='bg-gradient-to-br from-gray-200 to-gray-300 m-5 w-full mx-auto h-20 p-2 rounded-2xl animate-pulse'></div>
	);
};
