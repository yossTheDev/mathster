import { Haptics } from '@capacitor/haptics';
import React, { ReactNode, useState } from 'react';
import { Tooltip } from 'react-daisyui';
import { useStoreActions } from '../stores/Hooks';

interface ButtonProps {
	className?: string;
	children?: ReactNode;
	label?: string;
	operation: string;
	tooltip?: string;
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
	const [tooltipVisibility, settooltipVisibility] = useState('hidden');

	return (
		<div
			className={`flex flex-auto max-w-sm select-none hover:bg-gray-100 hover:shadow-inner items-center rounded p-2  ${className}`}
			/*onContextMenu={() => tooltip && settooltipVisibility('visible')}*/
			/*onMouseLeave={() => tooltip && settooltipVisibility('hidden')}*/
			onClick={() => {
				Haptics.vibrate({ duration: 40 });
				addCalc(operation);
			}}
		>
			<button className='mx-auto'>
				{children ? (
					children
				) : label ? (
					<p className='mx-auto'>{label}</p>
				) : (
					<p className='mx-auto'>{operation}</p>
				)}
			</button>
		</div>
	);
};
