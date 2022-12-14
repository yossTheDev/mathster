import { IconArrowDown, IconTrash } from '@tabler/icons';
import React, { useRef } from 'react';
import { useStoreActions, useStoreState } from '../stores/Hooks';
import { Button } from './Button';

export const History: React.FC = () => {
	/* Store States and Actions */
	const history = useStoreState((state) => state.history);
	const setCalc = useStoreActions((state) => state.setCalc);
	const clearHistory = useStoreActions((state) => state.clearHistory);

	const reference = useRef<HTMLDivElement>(null);

	return (
		<div className='overflow-hidden'>
			<p className='flex flex-row'>
				<p className='font-bold text-3xl'>History</p>
				<Button onClick={() => clearHistory()}>
					<IconTrash></IconTrash>
				</Button>
				<Button
					onClick={() =>
						reference.current?.scrollTo(0, reference.current?.scrollHeight)
					}
				>
					<IconArrowDown></IconArrowDown>
				</Button>
			</p>

			<div
				ref={reference}
				className='max-h-52 h-full overflow-y-scroll overflow-x-hidden'
			>
				{history.length > 0 ? (
					history.map((el, i) => (
						<div
							className='p-4 transition ease-in-out delay-150 bg-white rounded m-2 hover:rounded hover:shadow  hover:scale-110 duration-300'
							onClick={() => setCalc(el.calc)}
						>
							<p className='font-bold  text-2xl'>{el.calc}</p>
							<p className='text-xs text-gray-500'>
								{el.dateTime.toLocaleString({ dateStyle: 'full' })}
							</p>
						</div>
					))
				) : (
					<div className='mx-auto'>Nothing Here</div>
				)}
			</div>
		</div>
	);
};
