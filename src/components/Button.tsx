import React, { ReactNode } from 'react';
import { Haptics } from '@capacitor/haptics';

interface Props {
	className?: string;
	children: ReactNode;
	onClick?(): void;
}

export const Button: React.FC<Props> = ({ className, children, onClick }) => {
	return (
		<button
			onClick={() => {
				if (onClick) {
					Haptics.vibrate({ duration: 40 });
					onClick();
				}
			}}
			className={`hover:bg-gray-100 select-none hover:shadow-inner flex items-center rounded p-2 ${className}`}
		>
			{children}
		</button>
	);
};
