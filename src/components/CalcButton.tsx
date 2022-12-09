import { Haptics } from '@capacitor/haptics';
import { useFloating, autoUpdate } from '@floating-ui/react-dom';
import React, { ReactNode, useState } from 'react';
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
	const { x, y, reference, floating, strategy } = useFloating({
		whileElementsMounted: autoUpdate,
		placement: 'top',
	});

	const [tooltipVisibility, settooltipVisibility] = useState('hidden');

	return (
		<>
			<Button
				/*onMouseEnter={() => tooltip && settooltipVisibility('visible')}*/
				/*onMouseLeave={() => tooltip && settooltipVisibility('hidden')}*/
				/*onFocus={() => tooltip && settooltipVisibility('visible')}*/
				className={`flex flex-auto max-w-sm select-none  ${className}`}
				onClick={() => {
					Haptics.vibrate({ duration: 40 });
					addCalc(operation);
				}}
			>
				{children ? (
					children
				) : label ? (
					<p className='mx-auto'>{label}</p>
				) : (
					<p className='mx-auto'>{operation}</p>
				)}
			</Button>

			<div
				ref={floating}
				className={`${tooltipVisibility} bg-slate-100 rounded shadow-2xl p-2`}
				style={{
					position: strategy,
					top: y ?? 0,
					left: x ?? 0,
					width: 'max-content',
				}}
			></div>
		</>
	);
};
