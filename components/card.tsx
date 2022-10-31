import React from "react";
import { FiGithub, FiLink, FiYoutube } from "react-icons/fi";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import { IconType } from "react-icons";

const iconLibrary: { [key: string]: IconType } = {
	"github.com": FiGithub,
	"play.google.com": FaGooglePlay,
	"apps.apple.com": FaAppStore,
	"www.youtube.com": FiYoutube,
};

export interface CardProps {
	title: string;
	subtitle: string;
	summary: string;
	type: "mobile" | "cross-platform" | "web" | "desktop";
	tags: string[];
	workplace: string;
	urls: string[];
}

export const Card = (props: CardProps) => {
	return (
		<div className="relative rounded-3xl bg-gradient-to-b from-white/5 to-[#D9D9D9]/0 aspect-[16/10]">
			<div className="pt-4 pl-4">
				{props.type === "desktop" && <img src="/images/for-desktop.svg" alt="type" />}
				{props.type === "mobile" && <img src="/images/for-mobile.svg" alt="type" />}
				{props.type === "web" && <img src="/images/for-web.svg" alt="type" />}
				{props.type === "cross-platform" && <img src="/images/for-crossplat.svg" alt="type" />}
			</div>
			<div className="space-y-3 w-11/12 p-8">
				<div className="space-y-2">
					<div className="my-h1-heading text-5xl whitespace-nowrap text-ellipsis">{props.title}</div>
					<div>{props.subtitle}</div>
				</div>
				{!!props.summary && <div className="leading-tight opacity-60">{props.summary}</div>}
				<div className="flex space-x-3 items-center">
					{props.urls.map((url, i) => {
						const { hostname } = new URL(url);
						const Icon = iconLibrary[hostname] || FiLink;
						return (
							<a key={i} href={url} target="_blank" rel="noopener noreferrer">
								<Icon />
							</a>
						);
					})}
				</div>
			</div>
			<div className="absolute top-6 right-6 w-2/3 text-xs text-right flex space-x-1 flex-wrap justify-end">
				{props.tags.map((tag) => (
					<div key={tag} className="whitespace-nowrap opacity-60">
						#{tag}
					</div>
				))}
			</div>
			{!!props.workplace && (
				<div className="absolute bottom-6 right-4 text-[10px] opacity-30 my-vertical-text uppercase">
					BUILT AT {props.workplace}
				</div>
			)}
		</div>
	);
};
