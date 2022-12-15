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
			const r = nerdamer.solve(expression, variable);
			//setResult(nerdamer.solve(expression, variable).toTeX());
			//const s = nerdamer.simplify(r.text().replace('[', '').replace(']', ''));
			const ces = new ce.ComputeEngine();
			//const t = r.toTeX() as string;
			//const s = ces.parse(t).evaluate();

			//console.log('t = ' + t);
			//console.log('s = ' + s);
			//console.log('eval ' + ces.parse(t).evaluate());
			//const e = nerdamer(expression).solveFor('x').toString();
			//const t = e.text();

			// Resultado Numerico
			const t = ces
				.parse(r.toTeX().replace('[', '').replace(']', '') as string)
				.N().latex;
			//const t = ces.parse(r.toTeX().replace('[', '').replace(']', ''));
			console.log('t = ' + t);

			//console.log(('exp ' + s) as any);
			setResult(r.toTeX());
			setNumericResult(t);
			//setResult(t?.latex);
		} catch (error) {
			console.log(error);
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
