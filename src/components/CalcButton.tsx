import { Haptics } from '@capacitor/haptics';
import { flip, offset, shift, useFloating } from '@floating-ui/react-dom';
import { IconInfoCircle } from '@tabler/icons';
import { index } from 'mathjs';
import React, { ReactNode, useState } from 'react';
import { useStoreActions, useStoreState } from '../stores/Hooks';

interface ButtonProps {
	className?: string;
	children?: ReactNode;
	label?: string;
	operation: string;
	tooltip?: string;
	isFunction?: boolean;
}

export const CalcButton: React.FC<ButtonProps> = ({
	className,
	tooltip,
	children,
	operation,
	label,
	isFunction = false,
}) => {
	// Global Store States and Actions
	const cursorIndex = useStoreState((state) => state.cursorIndex);

	const addCalc = useStoreActions((state) => state.addCalc);
	const setIndex = useStoreActions((state) => state.setCursor);

	// Object Store and Actions
	const { x, y, reference, floating, strategy } = useFloating({
		middleware: [offset(10), flip(), shift()],
		placement: 'top',
	});

	const [tooltipVisibility, settooltipVisibility] = useState(false);

	return (
		<div
			className={`flex flex-auto max-w-sm select-none active:bg-gray-100 hover:shadow-inner items-center rounded p-2  ${className}`}
			onContextMenu={() => tooltip && settooltipVisibility(true)}
			onMouseLeave={() => tooltip && settooltipVisibility(false)}
			onClick={() => {
				Haptics.vibrate({ duration: 40 });
				addCalc(operation);

				if (isFunction === true) {
					if (cursorIndex === 1) {
						setIndex(cursorIndex + operation.length - 2);
					} else {
						setIndex(cursorIndex + operation.length - 1);
					}
				}
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
					className='transition ease-in-out delay-150  hover:scale-110 duration-300  bg-gray-200 shadow font-sans  text-black w-72 h-28 overflow-scroll p-3 rounded'
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
