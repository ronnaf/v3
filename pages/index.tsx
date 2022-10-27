import type { NextPage } from "next";
import { motion } from "framer-motion";
import { NavItem } from "../components/nav-item";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useRef } from "react";

const Home: NextPage = () => {
	const homeRef = useRef<HTMLDivElement>(null);
	const portfolioRef = useRef<HTMLDivElement>(null);
	const whoamiRef = useRef<HTMLDivElement>(null);

	function smoothlyScrollTo(where: "home" | "portfolio" | "whoami") {
		const lib = {
			home: homeRef,
			portfolio: portfolioRef,
			whoami: whoamiRef,
		};
		lib[where].current?.scrollIntoView({
			behavior: "smooth",
		});
	}

	return (
		<div className="text-primary">
			<div className="crt"></div>
			<div className="scanline"></div>
			{/* home */}
			<div className="p-12 h-[100vh] relative overflow-x-hidden">
				<div className="flex items-center justify-between">
					<div className="w-12 h-12 rounded-2xl border-4 rotate-45"></div>
					<div className="flex">
						<NavItem isActive={true} onClick={() => smoothlyScrollTo("home")}>
							Home
						</NavItem>
						<NavItem isActive={false} onClick={() => smoothlyScrollTo("portfolio")}>
							Portfolio
						</NavItem>
						<NavItem isActive={false} onClick={() => smoothlyScrollTo("whoami")}>
							$whoami
						</NavItem>
					</div>
				</div>
				<div className="container mx-auto h-full flex flex-col justify-center -mt-[8%] space-y-6">
					<motion.div className="flex items-center space-x-1 cursor-pointer" whileHover="hover">
						<div className="text-2xl">Hello</div>
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
						<div className="text-2xl">~!</div>
					</motion.div>
					<div className="text-8xl tracking-tighter -ml-1 relative">
						<span className="font-medium">Ronna</span> is currently involved with matters of{" "}
						<span className="tracking-[-0.4rem] font-display italic text-9xl leading-[0.75] my-hover-underline">
							software development.
						</span>
						{/* floater :: anchored to heading texts */}
						<div className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2 pointer-events-none">
							<img src="/images/slogan-wheel-hollow.svg" className="w-[1280px] opacity-[0.015] my-rotate-slowly" />
						</div>
					</div>
				</div>
				{/* big ass floater, anchored to viewport */}
				<div className="absolute right-0 bottom-0 translate-x-[35%] translate-y-[35%] pointer-events-none">
					<img src="/images/language-wheel-hollow.svg" className="w-[976px] opacity-[0.015] my-rotate-slowly" />
				</div>
				{/* floater, anchored to viewport*/}
				<div className="absolute bottom-8 left-1/2">
					<div className="h-20 w-[1px] bg-primary-50"></div>
					<div className="h-16 w-[1px] bg-primary-50 mt-2"></div>
					<div className="-mt-8">
						<div className="h-6 w-[1px] bg-primary-50 rotate-45 "></div>
						<div className="h-6 w-[1px] bg-primary-50 rotate-45 -mt-4"></div>
					</div>
				</div>
				{/* social icon floater, anchored to viewport */}
				<div className="absolute bottom-0 left-0 space-y-6 m-12">
					<div>
						<a rel="noreferrer noopener" href="https://github.com/ronnaf" target="_blank">
							<FiGithub size={16} />
						</a>
					</div>
					<div>
						<a rel="noreferrer noopener" href="https://www.linkedin.com/in/ronnafirmo" target="_blank">
							<FiLinkedin size={16} />
						</a>
					</div>
					<div>
						<a rel="noreferrer noopener" href="https://twitter.com/ronnaf_" target="_blank">
							<FiTwitter size={16} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
