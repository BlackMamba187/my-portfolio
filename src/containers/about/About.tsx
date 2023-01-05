import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { AboutEducation, AboutWorkExp, Interests } from "../../data/AboutInfo";
import { motion } from "framer-motion";
import { NavbarOpen } from "../../recoil/Atoms";
import { Theme } from "../../theme/Theme";
import { PageAnimation } from "../../theme/Animation";
import { Button } from "../../components";

const About = () => {
	const nav = useRecoilValue(NavbarOpen);

	const [show, setShow] = useState(1);
	const [selected1, setSelected1] = useState(true);
	const [selected2, setSelected2] = useState(false);
	const [selected3, setSelected3] = useState(false);

	const Checkselected = (num: number) => {
		if (num === 1) {
			setSelected1(true);
			setSelected2(false);
			setSelected3(false);
		}
		if (num === 2) {
			setSelected1(false);
			setSelected2(true);
			setSelected3(false);
		}
		if (num === 3) {
			setSelected1(false);
			setSelected2(false);
			setSelected3(true);
		} else {
			return;
		}
	};

	function OnClick(num: number) {
		Checkselected(num);
		setShow(num);
	}
	return (
		<motion.div
			initial={PageAnimation.initial}
			animate={PageAnimation.animate}
			exit={PageAnimation.exit}
			transition={PageAnimation.transition}
		>
			{!nav && (
				<div className={`${Theme.Bg} h-full mb-20`}>
					<div className="grid">
						<div className="flex row w-full justify-between">
							<Button
								action={() => OnClick(1)}
								text="Education"
								state={selected1}
								width="w-1/3"
							/>
							<Button
								action={() => OnClick(2)}
								text="Experience"
								state={selected2}
								width="w-1/3"
							/>
							<Button
								action={() => OnClick(3)}
								text="Interests"
								state={selected3}
								width="w-1/3"
							/>
						</div>
					</div>

					<div>
						<div className=" p-4 flex flex-col justify-center w-full">
							{show === 1 && (
								<div>
									<ol
										className={`${Theme.Border} border-l md:border-l-0 md:border-t md:flex md:justify-center md:gap-6 my-8`}
									>
										{AboutEducation.map(({ id, title, dates, description }) => (
											<li key={id} className="md:w-1/3 w-full">
												<div className="flex md:block flex-start items-center pt-2 md:pt-0">
													<div
														className={`${Theme.Colour} w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1`}
													></div>
													<p className={`${Theme.SdText} text-sm mt-2`}>
														{dates}
													</p>
												</div>
												<div className="mt-0.5 ml-4 md:ml-0 pb-5">
													<h4
														className={`${Theme.Text} font-semibold text-xl mb-1.5`}
													>
														{title}
													</h4>
													<div className={``}>{description}</div>
												</div>
											</li>
										))}
									</ol>
								</div>
							)}
							{show === 2 && (
								<div className="">
									
									<ol
										className={`${Theme.Border} border-l md:border-l-0 md:border-t md:flex md:justify-center md:gap-6 my-8`}
									>
										{AboutWorkExp.map(({ id, title, dates, description }) => (
											<li key={id} className="md:w-1/3 w-full">
												<div className="flex md:block flex-start items-center pt-2 md:pt-0">
													<div
														className={`${Theme.Colour} w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1`}
													></div>
													<p className={`${Theme.SdText} text-sm mt-2`}>
														{dates}
													</p>
												</div>
												<div className="mt-0.5 ml-4 md:ml-0 pb-5">
													<h4
														className={`${Theme.Text} font-semibold text-xl mb-1.5`}
													>
														{title}
													</h4>
													<div className={`mb-3`}>{description}</div>
												</div>
											</li>
										))}
									</ol>
								</div>
							)}
							{show === 3 && (
								<div className="">
									<p className="text-center text-xl">
										{" "}
										I'm excited to share my interests and hobbies. To get more
										information, simply hover over the
										gifs.
									</p>
									<div className="overflow-y-scroll my-2 scrollbar-none 2xl:grid grid-cols-3 mt-8">
										{Interests.map(({ id, title, src, intro, ranking }) => (
											<div key={id}>
												<div className="hidden lg:block ">
													<div className="flex  justify-center items-center p-2 m-2 w-[99%] rounded-2xl ">
														<div className="rounded-lg">
															<video
																src={src}
																autoPlay
																playsInline
																loop
																className="rounded-lg w-[30rem] h-[30rem]"
															/>
														</div>
														<div className="absolute text-center mx-5 w-[30rem] h-[30rem] bg-white opacity-0 hover:opacity-100 border-2 border-sky-500 p-4 rounded-lg">
															<b className="lg:text-4xl text-xl m-2 text-sky-500">
																{title}
															</b>
															<div className="py-2">{intro}</div>
															<div className="py-2">{ranking}</div>
														</div>
													</div>
												</div>
												<div className="block lg:hidden">
													<div className="flex flex-col items-center p-2 m-2 w-full my-10">
														<b className="lg:text-4xl text-4xl m-2 text-sky-400">
															{title}
														</b>
														<div className="  rounded-lg">
															<video
																src={src}
																autoPlay
																loop
																className="rounded-lg "
															/>
														</div>
														<div className="md:w-8/12 lg:w-6/12 text-center ">
															<div className="py-2">{intro}</div>
															<div className="py-2">{ranking}</div>
														</div>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</motion.div>
	);
};

export default About;
