import type { NextPage } from "next";
import { useRef } from "react";
import { Header, NavigationItemKey } from "../components/header";
import { Socials } from "../components/socials";
import { Hero } from "../components/hero";
import { SpinalArrow } from "../components/spinal-arrow";
import { About } from "../components/about";
import { Card } from "../components/card";

const Home: NextPage = () => {
	const homeRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);

	function smoothlyScrollTo(where: NavigationItemKey) {
		const library = {
			home: homeRef,
			projects: projectsRef,
			portfolio: aboutRef,
		};
		library[where].current?.scrollIntoView({
			behavior: "smooth",
		});
	}

	return (
		<div className="my-monitor text-primary overflow-hidden h-[100vh] relative crt">
			<div className="scanline"></div>
			<Header className="p-12 fixed w-full z-10" onNavigationItemPress={smoothlyScrollTo} />
			<div className="h-full overflow-y-auto overflow-x-hidden -z-0">
				<div ref={homeRef} className="relative h-[100vh]">
					<Hero className="h-4/5" />
					<SpinalArrow />
				</div>
				<About ref={aboutRef} />
				<div ref={projectsRef} className="min-h-[100vh] container mx-auto">
					<div className="grid grid-cols-3 w-full gap-8 h-full py-56 ">
						{[...new Array(12)].map((_, i) => (
							<Card key={i} />
						))}
					</div>
				</div>
				<div className="h-8" />
			</div>
			{/* big ass floater, anchored to viewport */}
			<div className="absolute right-0 bottom-0 translate-x-[35%] translate-y-[35%] pointer-events-none">
				<img src="/images/language-wheel-hollow.svg" className="w-[976px] opacity-[0.015] my-rotate-slowly" />
			</div>
			{/* social icon floater, anchored to viewport */}
			<Socials />
		</div>
	);
};

export default Home;
