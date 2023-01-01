import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Tilt from "react-parallax-tilt";
import { ProjectInfo, SmallProjectInfo } from "../../data/ProjectInfo";
import { NavbarOpen } from "../../recoil/Atoms";
import {
	BackdropAnimation,
	ModalAnimation,
	PageAnimation,
} from "../../theme/Animation";
import { Theme } from "../../theme/Theme";
import { Button } from "../../components";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
	const [show, setShow] = useState(0);

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
								Projects
							</p>
						</div>
					</div>
					<div className="p-4 mx-auto flex flex-col justify-center w-full text-center">
						<div className="w-full">
							{ProjectInfo.map(
								({ id, src, title, description, techStack, link }) => (
									<div key={id}>
										<div className="hidden xl:block">
											{id % 2 === 0 ? (
												<div className="flex w-full justify-around my-40">
													<Tilt
														scale={1.1}
														tiltAngleXInitial={0}
														tiltAngleYInitial={-20}
													>
														<img
															src={src}
															alt={title}
															className="rounded-2xl mx-auto h-full w-full border-4 border-sky-500 max-h-[25rem] rounded-2xl"
														/>
													</Tilt>

													<div className="h-[25rem] w-[40rem] flex flex-col justify-between">
														<p
															className={`text-4xl font-bold ${Theme.TextColour}`}
														>
															{title}
														</p>
														<div className="my-2">{description}</div>
														<div>
															<div className="flex row justify-around w-full">
																{techStack}
															</div>
														</div>
														<div className="md:grid grid-cols-2 gap-x-8 hidden">
															<Link className={`w-full`} to={`/projects/${id}`}>
																<Button
																	action={undefined}
																	text="More!"
																	state={true}
																	width="w-full"
																/>
															</Link>
															<a href={link} className={`w-full`}>
																<Button
																	action={undefined}
																	text="Code!"
																	state={false}
																	width="full"
																/>
															</a>
														</div>
													</div>
												</div>
											) : (
												<div className="flex w-full justify-around my-40">
													<div className="h-[25rem] w-[40rem] flex flex-col justify-between">
														<p
															className={`text-4xl font-bold ${Theme.TextColour}`}
														>
															{title}
														</p>
														<div className="my-2">{description}</div>
														<div>
															<div className="flex row justify-around w-full">
																{techStack}
															</div>
														</div>
														<div className="md:grid grid-cols-2 gap-x-8 hidden">
															<Link className={`w-full`} to={`/projects/${id}`}>
																<Button
																	action={undefined}
																	text="More!"
																	state={true}
																	width="w-full"
																/>
															</Link>
															<a href={link} className={`w-full`}>
																<Button
																	action={undefined}
																	text="Code!"
																	state={false}
																	width="full"
																/>
															</a>
														</div>
													</div>
													<div className="">
														<Tilt
															scale={1.1}
															tiltAngleXInitial={0}
															tiltAngleYInitial={20}
														>
															<img
																src={src}
																alt={title}
																className="rounded-2xl mx-auto h-full w-full border-4 border-sky-500 max-h-[25rem] rounded-2xl"
															/>
														</Tilt>
													</div>
												</div>
											)}
										</div>
										<div className="block xl:hidden">
											<div className="flex flex-col items-center w-full my-10">
												<b className="lg:text-4xl text-4xl my-8 text-sky-400">
													{title}
												</b>
												<Tilt gyroscope={true} className="">
													<img
														src={src}
														className="rounded-2xl h-[12em] sm:h-[20em] w-full my-6 border-4 border-sky-500"
														alt={title}
													/>
												</Tilt>
												<div style={{ maxWidth: "500px" }}>
													<div className="flex row justify-around w-full">
														{techStack}
													</div>
													<div className="text-center ">
														<div className="grid grid-cols-2 gap-2">
															<Link className={``} to={`/projects/${id}`}>
																<Button
																	action={undefined}
																	text="More!"
																	state={true}
																	width=""
																/>
															</Link>
															<a href={link} className={``}>
																<Button
																	action={undefined}
																	text="Code!"
																	state={false}
																	width=""
																/>
															</a>
														</div>
														<div className="py-2">{description}</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								)
							)}
						</div>
					</div>
					<div className="text-center mb-10">
						<p
							className={`${Theme.Border} text-3xl font-bold inline border-b-4 `}
						>
							Smaller Projects
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-8 place-content-evenly mb-20">
						{SmallProjectInfo.map(({ id, src, video, title, link }) => (
							<div key={id}>
								<div className="text-center my-10 ">
									<div className="flex justify-center">
										<div
											onClick={() => setShow(id)}
											className="hidden md:flex absolute h-44 w-80 bg-sky-600 rounded-lg opacity-0 hover:opacity-70 ease-in duration-300 cursor-pointer justify-center items-center"
										>
											<h5 className="text-lg text-white my-4 ">
												Click for More
											</h5>
										</div>
										<img
											src={src}
											alt={title}
											className="h-44 w-80 rounded-lg border-4 border-sky-500"
											onClick={() => setShow(id)}
										/>
									</div>
									<h5 className="text-lg font-bold my-4">{title}</h5>
								</div>

								{show === id && (
									<AnimatePresence>
										<motion.div
											initial={BackdropAnimation.initial}
											animate={BackdropAnimation.animate}
											exit={BackdropAnimation.exit}
											className="fixed top-0 left-0 w-full h-full z-50 cursor-pointer"
											onClick={() => setShow(0)}
										>
											<div className="w-full h-full bg-black opacity-80"></div>
											<motion.div
												initial={ModalAnimation.initial}
												animate={ModalAnimation.animate}
												exit={BackdropAnimation.exit}
												className="grid w-full h-full place-content-center fixed top-0 left-0"
											>
												<h5 className="text-3xl font-bold my-4 text-white text-center">
													{title}
												</h5>
												<video
													src={video}
													className="rounded-xl h-[20rem] md:h-[40rem] xl:h-[40rem] 2xl:h-[50rem]"
													autoPlay
													loop
												/>
												<div className="flex justify-center row w-full my-4 ">
													<a
														href={link}
														type="button"
														className="animate-bounce border-2 border-sky-500 rounded-full bg-sky-500"
													>
														<FaGithub size={50} color={`${Theme.WhiteHex}`} />
													</a>
												</div>
											</motion.div>
										</motion.div>
									</AnimatePresence>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</motion.div>
	);
};

export default Projects;
