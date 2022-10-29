import React, { forwardRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Canvas } from "@react-three/fiber";
import { Donut } from "./donut";

const PARAGRAPHS = [
	{
		key: "me",
		buttonText: "Read more",
		text: 'I\'m a front-end-leaning software engineer, currently based in the "city of love", Iloilo City, Philippines. I love building beautiful products and find it quite fullfilling to see my work out there, being used by other people!',
	},
	{
		key: "downtime",
		buttonText: "Read too much info 😳",
		text: "In my downtime, I try to stay up-to-date with the current advances in tech, catch up on some books, watch good tv, do some random woodworking project, fix things around the house, play with my dog, or go foraging in the forest behind our house.",
	},
	{
		key: "story",
		buttonText: "See less 😬",
		text: "I grew up in a small town, surrounded by chickens, rice fields and tall bamboo trees. We didn't have internet. A few days before college enrolment closes, I still haven't made up my mind on what I wanted to pursue. I went to town, sat down in an internet cafe, and looked for the coolest sounding degree I could find. Software Engineering. Even the acronym (SE) sounds cool!",
	},
];

export interface AboutProps {}

export const About = forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
	const [index, setIndex] = useState(0);

	function handleReadMore() {
		setIndex((i) => {
			if (i < PARAGRAPHS.length - 1) {
				return i + 1;
			}
			return 0;
		});
	}

	return (
		<div ref={ref} className="h-[100vh] mx-auto container flex items-center">
			<div className="grid grid-cols-3 w-full gap-16 h-full py-72">
				<div className="col-span-1 flex items-center justify-center h-full">
					<div className="aspect-square w-full">
						<Canvas>
							<Donut />
						</Canvas>
					</div>
				</div>
				<div className="col-span-2 space-x-16 flex items-center">
					<div className="my-main-heading text-9xl">
						I’m
						<br />
						Ronna
						<br />
						Firmo
					</div>
					<div className="leading-relaxed space-y-4">
						<div className="flex items-center space-x-1">
							<div>I build web and mobile apps for a living</div>
							<div className="w-2 h-4 bg-white my-cursor-blink" />
						</div>
						{PARAGRAPHS.slice(0, index + 1).map((paragraph) => (
							<div key={paragraph.key}>{paragraph.text}</div>
						))}
						<button className="flex items-center space-x-2 hover:underline" onClick={handleReadMore}>
							<div>{PARAGRAPHS[index].buttonText}</div>
							<FiArrowRight />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
});

About.displayName = "About";
