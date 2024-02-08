import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { forwardRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Donut } from "./donut";

const PARAGRAPHS = [
	{
		key: "me",
		buttonText: "Read more",
		text: "Based in the heart of Iloilo City, Philippines, I'm a software engineer with a strong inclination towards front-end development. There's nothing quite like the sense of accomplishment I feel when I see people engaging with and benefiting from the products I help build.",
	},
	{
		key: "downtime",
		buttonText: "Read too much info 😳",
		text: "In my free time, I like to keep tabs on the latest tech developments, dive into a good book, enjoy quality TV shows, tinker with woodworking projects, handle household repairs, spend time with my dog, or explore the forest behind our house foraging for treasures.",
	},
	{
		key: "story",
		buttonText: "See less 😬",
		text: "I grew up in a tiny town, with chickens roaming freely, rice fields stretching out, and towering bamboo trees all around. Internet wasn't something we had. As college enrollment deadlines loomed, I found myself still undecided about my future path. So, I ventured into town, settled into an internet cafe, and began my search for something intriguing. That's when I stumbled upon Software Engineering. Even the abbreviation, SE, had a cool ring to it!",
	},
];

export interface AboutProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

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
		<div ref={ref} {...props} className={clsx("min-h-[100vh] mx-auto container flex items-center", props.className)}>
			<div className="grid grid-cols-1 lg:grid-cols-3 w-full lg:gap-16 h-full lg:pt-52 lg:pb-72 mx-8 sm:mx-24 lg:mx-4">
				<div className="col-span-1 flex items-center justify-center h-full">
					<div className="aspect-square w-full">
						<Canvas>
							<Donut />
						</Canvas>
					</div>
				</div>
				<div className="col-span-2 space-y-8 lg:space-y-0 lg:space-x-16 lg:flex items-center">
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
