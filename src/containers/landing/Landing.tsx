import React from "react";
import { useRecoilValue } from "recoil";
import { motion } from "framer-motion";
import Pic from "../../data/images/Pic.jpg";
import { NavbarOpen } from "../../recoil/Atoms";
import { Theme } from "../../theme/Theme";
import Typed from "react-typed";
import { PageAnimation } from "../../theme/Animation";
import { Button } from "../../components";
import { FaHandMiddleFinger } from "react-icons/fa";
import { GiShrug } from "react-icons/gi";

const Header = () => {
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
					<div className="mx-auto grid grid-cols-1 xl:grid-cols-2 p-4 place-content-center ">
						<div className="grid place-content-center md:text-2xl">
							<p
								className={`lg:text-7xl text-5xl font-bold my-4 ${Theme.Text}`}
							>
								Hi, I'm
							</p>
							<Typed
								className={`lg:text-7xl text-5xl font-bold ${Theme.Text}`}
								strings={["Perry Matovu"]}
								typeSpeed={100}
							/>
							<p
								className={`lg:text-2xl text-xl flex justify-center py-8 max-w-xl ${Theme.Text}`}
							>
								Technology is my passion because it’s where I get to express my
								creativity in ways that are hard to find elsewhere.
								<br className="my-2" />
								I enjoy the challenge of solving problems and the satisfaction
								of creating products related to Game development and App
								building.
								<br className="my-2" />
							</p>
							<div className="hidden lg:block w-full flex justify-center">
								<Button
									action={undefined}
									text="Click Me!"
									state={false}
									width="w-[80%]"
								/>
							</div>
						</div>
						<div className="grid md:col-span-1 col-span-2 mb-20">
							<div className="w-full flex justify-center lg:hidden block">
								<Button
									action={undefined}
									text="Click Me!"
									state={false}
									width="w-[80%]"
								/>
							</div>
							<img
								src={Pic}
								alt="my profile"
								className="rounded-2xl mx-auto 2xl:w-[60%] w-[80%] place-self-center"
							/>
						</div>
					</div>
				</div>
			)}
		</motion.div>
	);
};

export default Header;
