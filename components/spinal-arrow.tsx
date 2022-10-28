import React from 'react';

export interface SpinalArrowProps {
}

export const SpinalArrow = (props: SpinalArrowProps) => {
	return (
		<div className="absolute bottom-8 left-1/2">
			<div className="h-20 w-[1px] bg-primary-50"></div>
			<div className="h-16 w-[1px] bg-primary-50 mt-2"></div>
			<div className="-mt-8">
				<div className="h-6 w-[1px] bg-primary-50 rotate-45 "></div>
				<div className="h-6 w-[1px] bg-primary-50 rotate-45 -mt-4"></div>
			</div>
		</div>
	);
}
