import type { GetStaticProps, NextPage } from "next";
import { useRef } from "react";
import { About } from "../components/about";
import { Card } from "../components/card";
import { Header, NavigationItemKey } from "../components/header";
import { Hero } from "../components/hero";
import { Socials } from "../components/socials";
import { SpinalArrow } from "../components/spinal-arrow";
import { api } from "../lib/api/api";
import { LandingQueryResponse } from "../lib/api/queries/landing-query";
import { request } from "../lib/datocms";
import { Project } from "../lib/models/project";

interface Props extends LandingQueryResponse {
	projects: Project[]
}

const Home: NextPage<Props> = (props) => {
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
					<Hero className="h-4/5 px-12" />
					<SpinalArrow />
				</div>
				<About ref={aboutRef} />
				<div ref={projectsRef} className="min-h-[100vh] container mx-auto px-24">
					<div className="grid grid-cols-3 w-full gap-8 h-full py-56">
						{props.projects.map((project, i) => (
							<Card key={i}
								title={project.title}
								subtitle={project.subtitle}
								summary={project.summary}
								tags={project.tags}
								type={project.projectType}
								workplace={project.builtAt}
							/>
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

export const getStaticProps: GetStaticProps<Omit<Props, 'allProjects'>> = async () => {
	const {  allProjects, ...rest}: LandingQueryResponse = await request({
		query: api.LANDING_QUERY,
	});

	return {
		props: {
			...rest,
			projects: allProjects
		},
		revalidate: 60, // seconds
	};
};

export default Home;
