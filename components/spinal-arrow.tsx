import React from "react";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
	init: { y: 0 },
	hover: { y: 16, transition: { repeat: Infinity, repeatType: "reverse", duration: 0.75 } },
};

export interface SpinalArrowProps {
	onClick: () => void;
}

export const SpinalArrow = (props: SpinalArrowProps) => {
	return (
		<motion.div className="absolute bottom-8 left-1/2 cursor-pointer px-10" whileHover="hover" onClick={props.onClick}>
			<div className="h-20 w-[1px] bg-primary-50"></div>
			<motion.div className="h-16 w-[1px] bg-primary-50 mt-2" variants={variants}></motion.div>
			<div className="-mt-8">
				<div className="h-6 w-[1px] bg-primary-50 rotate-45 "></div>
				<div className="h-6 w-[1px] bg-primary-50 rotate-45 -mt-4"></div>
			</div>
		</motion.div>
	);
};
