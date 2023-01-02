import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectInfo } from "../../data/ProjectInfo";
import { ModalAnimation } from "../../theme/Animation";

type Props = {
	id: Number;
};

const Gallery = ({ id }: Props) => {
	const [current, setCurrent] = useState(1);

	let Images = ProjectInfo.find((x) => x.id === id);
	const Pic = Images!.images;
	let activeIndex = current - 1;

	return (
		<div className="mb-16">
			<div className="flex xl:flex-row flex-col justify-center items-center">
				<div className="h-[25em] xl:h-[50em] w-full grid bg-gray-200 xl:m-8 m-0 xl:p-4 p-2 rounded-2xl">
					<AnimatePresence>
						{!Pic[activeIndex].video ? (
							<>
								<motion.img
									initial={ModalAnimation.initial}
									animate={ModalAnimation.animate}
									exit={ModalAnimation.exit}
									className="place-self-center rounded-2xl h-[20em] xl:h-[45em]"
									src={Pic[activeIndex].image1}
									key={current}
								/>
							</>
						) : (
							<>
								<motion.video
									initial={ModalAnimation.initial}
									animate={ModalAnimation.animate}
									exit={ModalAnimation.exit}
									className="place-self-center rounded-2xl h-[20em] xl:h-[45em]"
									src={Pic[activeIndex].video1}
									autoPlay
									loop
									key={current}
									
								/>
							</>
						)}
					</AnimatePresence>
				</div>

				<div className="xl:h-[50em] h-full grid xl:my-0 my-4 ">
					<motion.div className="overflow-scroll scrollbar-none flex xl:flex-col row">
						{Pic.map((image, index) => {
							return (
								<img
									className={`place-self-center w-[8rem] h-[5rem] md:h-full xl:w-full xl:h-[10rem] cursor-pointer rounded-2xl xl:my-1 xl:mx-0 mx-2 border-4 border-sky-500 ${
										activeIndex === index ? "border-red-500" : "border-sky-500"
									} `}
									key={image.number}
									src={image.image1}
									alt=""
									onClick={() => setCurrent(index + 1)}
								/>
							);
						})}
					</motion.div>
				</div>
			</div>

			<div className="lg:text-2xl text-xl my-4 text-center">
				<p>{Pic[activeIndex].imageDescription}</p>
			</div>
		</div>
	);
};

export default Gallery;
