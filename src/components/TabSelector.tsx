import React, { ReactNode } from 'react';

interface Props {
	isActive: boolean;
	children: ReactNode;
	onClick: () => void;
}

export const TabSelector: React.FC<Props> = ({
	isActive,
	children,
	onClick,
}) => {
	return (
		<div className='mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 '>
			<button
				className={
					isActive
						? 'text-black dark:text-white font-bold scale-110'
						: ' text-gray-500'
				}
				onClick={onClick}
			>
				{children}

				<div
					className={
						isActive
							? `bg-gradient-to-br  from-red-400 to-red-500 p-0.5 rounded `
							: ''
					}
				></div>
			</button>
		</div>
	);
};
