import React from 'react';
import { useStoreActions, useStoreState } from '../stores/Hooks';

export const History: React.FC = () => {
	/* Store States and Actions */
	const history = useStoreState((state) => state.history);
	const setCalc = useStoreActions((state) => state.setCalc);

	return (
		<div className='h-full'>
			<p className='font-bold text-4xl '>History</p>

			<div className='max-h-52 h-full overflow-y-scroll overflow-x-hidden'>
				{history.map((el, i) => (
					<div
						className='p-2 hover:rounded hover:shadow hover:bg-white'
						onClick={() => setCalc(el.calc)}
					>
						<p className='font-bold  text-2xl'>{el.calc}</p>
						<p className=' text-gray-500'>
							{el.dateTime.toLocaleString({ dateStyle: 'full' })}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
