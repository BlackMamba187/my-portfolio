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
		<div className="h-full w-full">
			<div className="flex row justify-between w-full h-full">
				<div className="xl:block hidden w-full">
					<div className="h-[50rem] grid ">
						<AnimatePresence>
							{!Pic[activeIndex].video ? (
								<>
									<motion.img
										initial={ModalAnimation.initial}
										animate={ModalAnimation.animate}
										exit={ModalAnimation.exit}
										className="place-self-center rounded-2xl h-full "
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
										className="place-self-center rounded-2xl h-full"
										src={Pic[activeIndex].video1}
										autoPlay
										loop
										key={current}
									/>
								</>
							)}
						</AnimatePresence>
					</div>
				</div>
				<div className="xl:h-[50rem] grid ">
					<motion.div className="overflow-scroll scrollbar-none flex xl:flex-col row">
						{Pic.map((image, index) => {
							return (
								<img
									className="xl:h-[8rem] sm:h-[25rem] h-[15rem] xl:w-[15rem] cursor-pointer rounded-2xl xl:my-1 xl:mx-0 mx-2"
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

			<div className=" my-4 xl:mb-20 text-center">
				<p>{Pic[activeIndex].imageDescription}</p>
			</div>
		</div>
	);
};

export default Gallery;
