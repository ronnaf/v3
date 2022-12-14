import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export interface HeadingsProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Hero = (props: HeadingsProps) => {
	return (
		<div {...props} className={clsx("container mx-auto flex flex-col justify-center space-y-6", props.className)}>
			<motion.div className="flex items-center space-x-1 cursor-pointer text-lg md:text-2xl md:leading-8" whileHover="hover">
				<div>Hello</div>
				<div className="flex items-center">
					<div className="h-6 w-[2px] bg-primary/75"></div>
					<motion.div
						className="h-[2px] w-32 bg-primary/75"
						variants={{
							hover: {
								width: "100vw",
								transition: { duration: 5, ease: "easeOut" },
							},
						}}></motion.div>
				</div>
				<div>~!</div>
			</motion.div>
			<div className="text-4xl md:text-8xl md:leading-none tracking-tighter -ml-1 relative">
				<span className="font-medium">Ronna</span> is currently involved with matters of{" "}
				<span className="my-main-heading text-5xl md:text-9xl md:leading-3 my-hover-underline italic">
					software development.
				</span>
				{/* floater :: anchored to heading texts */}
				<div className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2 pointer-events-none">
					<img src="/images/slogan-wheel-hollow.svg" className="w-[1280px] opacity-[0.015] my-rotate-slowly" />
				</div>
			</div>
		</div>
	);
};
