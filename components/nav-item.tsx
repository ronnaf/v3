import clsx from "clsx";
import React from "react";

interface Props {
	isActive: boolean;
	children: React.ReactNode;
	onClick?: () => void;
}

export function NavItem(props: Props) {
	return (
		<div className="flex cursor-pointer space-x-2">
			<button
				type="button"
				className={clsx("text-5xl font-display tracking-[-0.3rem]", {
					"text-primary": props.isActive,
					"text-primary/40 hover:text-primary/80 active:text-primary/90": !props.isActive,
				})}
				onClick={props.onClick}>
				{props.children}
			</button>
			{props.isActive && (
				<div className="flex items-center">
					<div className="h-full w-1 bg-primary/75"></div>
					<div className="h-1 w-20 bg-primary/75"></div>
				</div>
			)}
		</div>
	);
}
