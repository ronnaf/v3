import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export interface SocialsProps {}

export const Socials = (props: SocialsProps) => {
	return (
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
	);
};
