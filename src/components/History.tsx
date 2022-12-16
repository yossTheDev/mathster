import { IconArrowDown, IconTrash } from '@tabler/icons';
import React, { useEffect, useRef } from 'react';
import MathView from 'react-math-view';
import { useStoreActions, useStoreState } from '../stores/Hooks';
import { Button } from './Button';

export const History: React.FC = () => {
	/* Store States and Actions */
	const history = useStoreState((state) => state.history);
	const setCalc = useStoreActions((state) => state.setCalc);
	const clearHistory = useStoreActions((state) => state.clearHistory);

	useEffect(() => {
		reference.current?.scrollTo(0, reference.current?.scrollHeight);
	}, [history]);

	const reference = useRef<HTMLDivElement>(null);

	return (
		<div className='overflow-hidden  flex flex-auto flex-col w-full'>
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
				className=' h-full flex flex-col overflow-y-scroll overflow-x-hidden'
			>
				{history.length > 0 ? (
					history.map((el, i) => (
						<div
							className='hover:bg-white hover:rounded p-2 m-2 select-none'
							key={i}
							onClick={() => setCalc(el.calc)}
						>
							<p className='font-bold text-2xl  break-words  '>{el.calc}</p>
							<p className='text-xs text-gray-500'>{el.dateTime}</p>
						</div>
					))
				) : (
					<div className='mx-auto mb-auto mt-auto'>{'Nothing Here :('}</div>
				)}
			</div>
		</div>
	);
};
