import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { Theme } from "../../theme/Theme";

const Footer = () => {
	return (
		<div className="flex fixed w-full inset-x-0 bottom-0 ">
			<div className="flex justify-between items-center w-full bg-white">
				
				<div className="flex flex-row px-1 text-lg">
					Made Using 
					<a href="https://tailwindcss.com/">
						<p className={`px-1 ${Theme.TextColour}`} >Tailwind CSS</p>
					</a>
				</div>
				<ul className="hidden md:flex">
					<li className="flex flex-row">
						
						<a
							className="px-1 hover:scale-110 duration-500"
							href="https://www.linkedin.com/in/perry-matovu-5ab226221/"
							type="button"
						>
							<FaLinkedin size={50} color={`${Theme.ColourHex}`} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
