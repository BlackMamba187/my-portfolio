import React from "react";
import { useRecoilValue } from "recoil";
import { motion } from "framer-motion";
import Pic from "../../data/images/Pic.jpg";
import { NavbarOpen } from "../../recoil/Atoms";
import { Theme } from "../../theme/Theme";
import Typed from "react-typed";
import { PageAnimation } from "../../theme/Animation";
import { Button } from "../../components";
import CV from "../../data/cv/cv.pdf";

const Landing = () => {
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
					<div className="mx-auto grid grid-cols-1 xl:grid-cols-2 p-2 place-content-center ">
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
						<img
								src={Pic}
								alt="my profile"
								className="rounded-2xl mx-auto mt-8 w-[70%] max-w-[20em] place-self-center lg:hidden block"
							/>
					
							
							<p
								className={`lg:text-2xl text-xl pt-8 pb-2 max-w-xl ${Theme.Text}`}
							>
								I am passionate about technology because it allows me to express
								my creativity and problem-solve in unique ways. 
							</p>
							<p className={`lg:text-2xl text-xl py-2 max-w-xl ${Theme.Text}`}>
							I love the
								challenge of creating products and the sense of
								accomplishment that comes with it.
							</p>
							<div className="hidden lg:block w-full ">
								<a href={CV}>
									<Button
										action={undefined}
										text="Download CV"
										state={false}
										width="w-[80%]"
									/>
								</a>
							</div>
						</div>
						<div className="grid md:col-span-1 col-span-2 mb-20">
							<div className="w-full flex justify-center lg:hidden block">
								<a
									href={CV}
									className="w-full flex justify-center lg:hidden block"
								>
									<Button
										action={undefined}
										text="Download CV"
										state={false}
										width="w-[80%]"
									/>
								</a>
								
							</div>
							<img
								src={Pic}
								alt="my profile"
								className="rounded-2xl mx-auto 2xl:w-[60%] place-self-center hidden lg:block"
							/>
						</div>
					</div>
				</div>
			)}
		</motion.div>
	);
};

export default Landing;
