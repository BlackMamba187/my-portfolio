import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="hidden md:flex">
			<div className="flex justify-between items-center w-full h-20 px-4 fixed inset-x-0 bottom-0">
				<div className="flex flex-row p-4 text-xl">
					Made by Perry Matovu | Using 
					<a href="https://tailwindcss.com/">
						<p className=" px-1 text-sky-500">Tailwind CSS</p>
					</a>
				</div>
				<ul className="hidden md:flex">
					<li className="p-4 flex flex-row">
						<a
							className="p-2 hover:scale-110 duration-500"
							href="https://github.com/BlackMamba187"
							type="button"
						>
							<FaGithub size={50} color="#0da3e7" />
						</a>
						<a
							className="p-2 hover:scale-110 duration-500"
							href="https://www.linkedin.com/in/perry-matovu-5ab226221/"
							type="button"
						>
							<FaLinkedin size={50} color="#0da3e7" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
