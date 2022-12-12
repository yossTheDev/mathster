import { Haptics } from '@capacitor/haptics';
import {
	useFloating,
	autoUpdate,
	offset,
	flip,
	shift,
	arrow,
	hide,
} from '@floating-ui/react-dom';
import { IconArrowDown } from '@tabler/icons';
import React, { ReactNode, useRef, useState } from 'react';
import { Tooltip } from 'react-daisyui';
import { useStoreActions } from '../stores/Hooks';
import { Button } from './Button';

interface ButtonProps {
	className?: string;
	children?: ReactNode;
	label?: string;
	operation: string;
	tooltip?: ReactNode;
}

export const CalcButton: React.FC<ButtonProps> = ({
	className,
	tooltip,
	children,
	operation,
	label,
}) => {
	// Global Store States and Actions
	const addCalc = useStoreActions((state) => state.addCalc);

	// Object Store and Actions
	const arrowRef = useRef(null);
	const { x, y, reference, floating, strategy } = useFloating({
		whileElementsMounted: autoUpdate,
		middleware: [
			arrow({ element: arrowRef }),
			offset(10),
			flip(),
			shift(),
			hide(),
		],
		placement: 'top',
	});

	const [tooltipVisibility, settooltipVisibility] = useState('hidden');

	return (
		<div
			className={`flex flex-auto max-w-sm select-none hover:bg-gray-100 hover:shadow-inner items-center rounded p-2  ${className}`}
			onMouseEnter={() => tooltip && settooltipVisibility('visible')}
			onMouseLeave={() => tooltip && settooltipVisibility('hidden')}
			onClick={() => {
				Haptics.vibrate({ duration: 40 });
				addCalc(operation);
			}}
		>
			<button className='mx-auto' ref={reference}>
				{children ? (
					children
				) : label ? (
					<p className='mx-auto'>{label}</p>
				) : (
					<p className='mx-auto'>{operation}</p>
				)}
			</button>

			{/* Tooltip */}
			<div
				ref={floating}
				className={`${tooltipVisibility} bg-slate-400 rounded-2xl shadow-2xl p-2`}
				style={{
					position: strategy,
					top: y ?? 0,
					left: x ?? 0,
					width: 'max-content',
				}}
			>
				{tooltip}
			</div>

			<div className={`${tooltipVisibility}`} ref={arrowRef}></div>
		</div>
	);
};
