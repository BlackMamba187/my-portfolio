import React from "react";
import Pic from "../../data/images/Pic.jpg";
import { Theme } from "../../theme/Theme";

const Header = () => {
	return (
		<div className={Theme.gradientBg}>
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-4xl sm:text-7xl font-bold text-white">
						I'm a Full Stack Developer
					</h2>
					<p className="text-gray-500 py-4 max-w-md">
						I have 8 years of experience building and desgining software.
						Currently, I love to work on web application using technologies like
						React, Tailwind, Next JS and GraphQL.
					</p>

					<div></div>
				</div>

				<div>
					<img
						src={Pic}
						alt="my profile"
						className="rounded-2xl mx-auto w-2/3 py-4"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
