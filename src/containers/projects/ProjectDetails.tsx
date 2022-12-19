import React from "react";
import { Theme } from "../../theme/Theme";
import { Link, useParams } from "react-router-dom";
import { Gallery } from "../../components";
import { useRecoilValue } from "recoil";
import Recoil from "../../data/Icons/Recoil.png";
import { motion } from "framer-motion";
import { NavbarOpen } from "../../recoil/Atoms";
import { PageAnimation } from "../../theme/Animation";
import { FaAws, FaGithub, FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";
import Firebase from "../../data/Icons/firebase.png";

const ProjectDetails = () => {
	const params = useParams();
	const nav = useRecoilValue(NavbarOpen);
	return (
		<motion.div
			initial={PageAnimation.initial}
			animate={PageAnimation.animate}
			exit={PageAnimation.exit}
			transition={PageAnimation.transition}
		>
			{!nav && (
				<div className={`${Theme.Bg} `}>
					{(() => {
						switch (params.ID) {
							case "1":
								return (
									<div className="mx-2 ">
										<div className="flex justify-center ">
											<p
												className={`${Theme.Border} text-4xl font-bold inline md:border-b-4 mb-10`}
											>
												Messaging App
											</p>
										</div>
										<Gallery id={1} />
									</div>
								);
							case "2":
								return (
									<div className="mx-2 ">
										<div className="flex justify-center ">
											<p
												className={`${Theme.Border} text-4xl font-bold inline md:border-b-4 mb-10`}
											>
												2D RPG Game
											</p>
										</div>
										<p
											className={`${Theme.Border} xl:-rotate-45 xl:absolute my-1 text-red-500 text-2xl font-bold z-20 text-center animate-pulse`}
										>
											Currently working on!
										</p>
										<Gallery id={2} />
									</div>
								);
							case "3":
								return (
									<div className="mx-2 ">
										<div className="flex justify-center ">
											<p
												className={`${Theme.Border} text-4xl font-bold inline md:border-b-4 mb-10`}
											>
												Ecommerce site
											</p>
										</div>
										<Gallery id={2} />
									</div>
								);
							default:
								return (
									<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
										<div className="">
											<p
												className={`${Theme.Border} text-4xl font-bold inline border-b-4`}
											>
												ERROR: Page not found
											</p>
										</div>
									</div>
								);
						}
					})()}
				</div>
			)}
		</motion.div>
	);
};

export default ProjectDetails;
