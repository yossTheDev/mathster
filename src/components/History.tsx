import { IconArrowDown, IconTrash } from '@tabler/icons';
import React, { useEffect, useRef } from 'react';
import { useStoreActions, useStoreState } from '../stores/Hooks';
import { Button } from './Button';
import { ExpressionViewer } from './ExpressionViewer';

export const History: React.FC = () => {
	/* Store States and Actions */
	const history = useStoreState((state) => state.history);
	const setCalc = useStoreActions((state) => state.setCalc);
	const clearHistory = useStoreActions((state) => state.clearHistory);

	useEffect(() => {
		// Auto Scroll to Bottom
		reference.current?.scrollTo(0, reference.current?.scrollHeight);
	}, [history]);

	const reference = useRef<HTMLDivElement>(null);

	return (
		<div className='overflow-hidden  flex flex-auto flex-col w-full'>
			<p className='flex flex-row'>
				<p className='font-bold text-3xl dark:text-white'>History</p>
				<div className='flex flex-row ml-auto'>
					<Button onClick={() => clearHistory()}>
						<IconTrash className='dark:text-white'></IconTrash>
					</Button>
					<Button
						onClick={() =>
							reference.current?.scrollTo(0, reference.current?.scrollHeight)
						}
					>
						<IconArrowDown className='dark:text-white'></IconArrowDown>
					</Button>
				</div>
			</p>

			<div
				ref={reference}
				className=' h-full flex flex-col overflow-y-scroll overflow-x-hidden'
			>
				{history.length > 0 ? (
					history.map((el, i) => (
						<div
							className='dark:hover:bg-gray-800 dark:bg-gray-700 bg-gray-200 shadow rounded hover:bg-white hover:rounded p-2 m-2 select-none'
							key={i}
							onClick={() => setCalc(el.calc)}
						>
							<ExpressionViewer
								className='text-2xl'
								value={el.calc}
							></ExpressionViewer>

							<p className='text-xs text-gray-500'>{el.dateTime}</p>
						</div>
					))
				) : (
					<div className='dark:text-white mx-auto mb-auto mt-auto'>
						{'Nothing Here :('}
					</div>
				)}
			</div>
		</div>
	);
};
