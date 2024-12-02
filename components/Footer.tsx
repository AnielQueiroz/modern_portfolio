'use client'

import { FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/magic-button";
import { socialMedia } from "@/data";
import { FloatingDock } from "./ui/floating-dock";

const Footer = () => {
	const icons = {
		Linkedin: <FaLinkedin />,
		Github: <FaGithub />,
	}

	const socialWithIcons = socialMedia.map(sm => ({
		...sm,
		icon: icons[sm.title]
	}))

	return (
		<footer id="contact" className="w-full pb-10 mb-[50px] md:mb-5">
			{/* <div className="flex flex-col items-center">
				<h1 className="heading lg:max-w-[45vw]">
					Pronto para trazer <span className="text-purple">suas</span> idéias
					para a realidade?
				</h1>
				<p className="text-white-200 md:mt-10 my-5 text-center">
					Fale comigo agora e vamos discutir como eu posso te ajudar a atingir
					seus objetivos!
				</p>
				<a href="mailto:anielqsilva@gmail.com">
					<MagicButton
						title="Fale comigo!"
						icon={<FaLocationArrow />}
						position="right"
					/>
				</a>
			</div> */}

			<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
				<p className="md:text-base text-sm md:font-normal font-light">
					Copyright © 2024 Aniel
				</p>

				<div className="flex items-center md:gap-3 gap-6">
					<FloatingDock 
						items={socialWithIcons}
						
					/>
					{/* {socialMedia.map(({ id, img }) => (
						<div
							key={id}
							className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
						>
							<img src={img} alt={id.toString()} width={20} height={20} />
						</div>
					))} */}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
