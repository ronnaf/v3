import React from "react";

export interface CardProps {}

export const Card = (props: CardProps) => {
	return (
		<div className="relative rounded-3xl bg-gradient-to-b from-white/5 to-[#D9D9D9]/0 aspect-[16/10]">
			<div className="p-4">
				<img src="/images/for-desktop.svg" alt="type" />
			</div>
			<div className="space-y-4 w-11/12 p-8">
				<div className="space-y-3">
					<div className="my-main-heading text-5xl">Proteus</div>
					<div>Dead simple window resizer</div>
				</div>
				<div className="opacity-60">
					Proteus is a fork of Easy Window Resize but cooler plus with more quality of life features
				</div>
			</div>
			<div className="absolute top-6 right-6 text-xs w-1/3 text-right">#react #react-native #typescript</div>
			<div className="absolute bottom-6 right-6 text-[10px] opacity-30 my-vertical-text">BUILT AT SMASHING BOXES</div>
		</div>
	);
};
