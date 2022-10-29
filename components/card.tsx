import React from "react";
import { Project } from "../lib/models/project";

export interface CardProps {
	title: string;
	subtitle: string;
	summary: string;
	type: "mobile" | "cross-platform" | "web" | "desktop";
	tags: string[];
	workplace: string;
}

export const Card = (props: CardProps) => {
	return (
		<div className="relative rounded-3xl bg-gradient-to-b from-white/5 to-[#D9D9D9]/0 aspect-[16/10]">
			<div className="p-4">
				<img src="/images/for-desktop.svg" alt="type" />
			</div>
			<div className="space-y-4 w-11/12 p-8">
				<div className="space-y-3">
					<div className="my-h1-heading text-5xl">{props.title}</div>
					<div>{props.subtitle}</div>
				</div>
				{!!props.summary && <div className="opacity-60">{props.summary}</div>}
			</div>
			<div className="absolute top-6 right-6 text-xs w-2/3 text-right flex space-x-1 flex-wrap justify-end">
				{props.tags.map((tag) => (
					<div key={tag} className="whitespace-nowrap">
						#{tag}
					</div>
				))}
			</div>
			{!!props.workplace && <div className="absolute bottom-6 right-4 text-[10px] opacity-30 my-vertical-text uppercase">
				BUILT AT {props.workplace}
			</div>}
		</div>
	);
};
