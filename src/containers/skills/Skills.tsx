import React from "react";
import { useRecoilValue } from "recoil";
import { motion } from "framer-motion";
import { MoreSkills, SkillDetails } from "../../data/SkillDetails";
import { NavbarOpen } from "../../recoil/Atoms";
import { Theme } from "../../theme/Theme";
import { PageAnimation } from "../../theme/Animation";

const Skills = () => {
	const nav = useRecoilValue(NavbarOpen);
	return (
		<motion.div
			initial={PageAnimation.initial}
			animate={PageAnimation.animate}
			exit={PageAnimation.exit}
			transition={PageAnimation.transition}
		>
			{!nav && (
				<div className={Theme.Bg}>
					<div className="p-4 flex flex-col w-full ">
						<div className="flex w-full justify-center ">
							<p
								className={`${Theme.Border} text-5xl font-bold inline border-b-4 `}
							>
								Skills
							</p>
						</div>
					</div>
					<div className="p-4 mx-auto flex flex-col justify-center w-full text-center">
						<p className={`lg:text-2xl text-xl pt-10 pb-20 ${Theme.Text}`}>
							I have utilized the following technologies to develop modern,
							interactive products
						</p>
						<div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-8 text-center">
							{SkillDetails.map(({ id, child, title, style, link, text }) => (
								<a href={link} key={id} className="justify-self-center">
									<div
										className={`h-44 w-80 shadow-md hover:scale-105 duration-500 rounded-lg ${Theme.White} border-2 ${style} flex flex-col justify-center`}
									>
										{child}
										<p className={`${text} text-2xl my-1`}>{title}</p>
									</div>
								</a>
							))}
						</div>
					</div>

					<div className="p-4 mx-auto flex flex-col justify-center w-full text-center mb-20">
						<p className={`lg:text-2xl text-xl pt-10 pb-20 ${Theme.Text}`}>
							In order to expand my capabilities and stay current in the
							industry, I am interested in learning and using the following
							technologies in the future
						</p>
						<div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-8 text-center">
							{MoreSkills.map(({ id, child, title, style, link, text }) => (
								<a href={link} key={id} className="justify-self-center">
									<div
										className={`h-44 w-80 shadow-md hover:scale-105 duration-500 rounded-lg ${Theme.White} border-2 ${style} flex flex-col justify-center`}
									>
										{child}
										<p className={`${text} text-2xl my-1`}>{title}</p>
									</div>
								</a>
							))}
						</div>
					</div>
				</div>
			)}
		</motion.div>
	);
};

export default Skills;
