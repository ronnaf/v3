import React from "react";
import clsx from "clsx";

export type NavigationItemKey = "home" | "projects" | "portfolio";

export interface HeaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	onNavigationItemPress: (key: NavigationItemKey) => void;
}

const NAVIGATION_ITEMS: { name: string; key: NavigationItemKey }[] = [
	{ name: "~", key: "home" },
	{ name: "whoami", key: "portfolio" },
	{ name: "cd projects", key: "projects" },
];

export const Header = (props: HeaderProps) => {
	return (
		<div {...props} className={clsx("flex items-center justify-between", props.className)}>
			<div className="w-12 h-12 rounded-2xl border-4 rotate-45"></div>
			<div className="flex space-x-2">
				{NAVIGATION_ITEMS.map((item) => (
					<div
						key={item.key}
						className="flex space-x-1 items-center group py-2 px-4 cursor-pointer"
						onClick={() => props.onNavigationItemPress(item.key)}>
						<div className="group-hover:block hidden">$</div>
						<div>{item.name}</div>
						<div className="group-hover:block hidden w-2 h-4 bg-white my-cursor-blink" />
					</div>
				))}
			</div>
		</div>
	);
};
