import { Haptics } from '@capacitor/haptics';
import { flip, offset, shift, useFloating } from '@floating-ui/react-dom';
import { IconInfoCircle } from '@tabler/icons';
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
	const { x, y, reference, floating, strategy } = useFloating({
		middleware: [offset(10), flip(), shift()],
		placement: 'top',
	});

	const [tooltipVisibility, settooltipVisibility] = useState(false);

	return (
		<div
			className={`flex flex-auto max-w-sm select-none hover:bg-gray-100 hover:shadow-inner items-center rounded p-2  ${className}`}
			onContextMenu={() => tooltip && settooltipVisibility(true)}
			onMouseLeave={() => tooltip && settooltipVisibility(false)}
			onClick={() => {
				Haptics.vibrate({ duration: 40 });
				addCalc(operation);
			}}
		>
			<button ref={reference} className='mx-auto'>
				{children ? (
					children
				) : label ? (
					<p className='mx-auto'>{label}</p>
				) : (
					<p className='mx-auto'>{operation}</p>
				)}
			</button>

			{/* ToolTip */}
			{tooltipVisibility && (
				<div
					className='bg-gray-300 text-black w-52 h-28 overflow-scroll p-3 rounded'
					ref={floating}
					style={{ position: strategy, top: y ?? 0, left: x ?? 0 }}
				>
					<IconInfoCircle></IconInfoCircle>
					{tooltip}
				</div>
			)}
		</div>
	);
};
