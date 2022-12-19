import { FaAws, FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiFirebase, SiTypescript } from "react-icons/si";
import { Link } from "react-router-dom";
import Basketball from "../data/Interests/Basketball.mp4";
import Recoil from "../data/Icons/Recoil.png";
import Nextjs from "../data/Icons/Nextjs.png";
import { Theme } from "../theme/Theme";

export const ProjectInfo = [
	{
		id: 1,
		src: "https://mdbootstrap.com/img/new/standard/nature/182.jpg",
		title: "Chat App",
		description: (
			<p
				className={`lg:text-xl text-base flex justify-center py-4 ${Theme.Text}`}
			>
				This messaging app is a web-based application that allows users to send
				and receive private messages. Built using AWS features Cognito, DynamoDB
			</p>
		),
		techStack: (
			<>
				<div className="text-center mb-12 md:mb-0 ">
					<div className="flex justify-center row w-full ">
						<Link to="/skills">
							<SiTypescript size={50} color="#0067b8" />
						</Link>
					</div>
				</div>
				<div className="text-center mb-12 md:mb-0 ">
					<div className="flex justify-center row w-full ">
						<Link to="/skills">
							<FaReact size={50} color="#61dbfb" />
						</Link>
					</div>
				</div>
				<div className="text-center mb-12 md:mb-0 ">
					<div className="flex justify-center row w-full ">
						<Link to="/skills">
							<img src={Recoil} alt="Recoil" width="50" />
						</Link>
					</div>
				</div>
				<div className="text-center mb-12 md:mb-0">
					<div className="flex justify-center row w-full">
						<Link to="/skills">
							<FaAws size={50} color="#FF9900" />
						</Link>
					</div>
				</div>
				<div className="text-center mb-12 md:mb-0">
					<div className="flex justify-center row w-full">
						<Link to="/skills">
							<GrGraphQl size={50} color="#e535ab" />
						</Link>
					</div>
				</div>
			</>
		),
		link: "https://github.com/BlackMamba187/chat-app",
		images: [
			{
				number: "a",
				imageDescription:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quasi, vel autem magnam praesentium nam tempora, animi eaque aliquid quo ratione, quae nemo ab quos enim. Obcaecati aut quia neque!",
				video: false,
				image1: "https://mdbootstrap.com/img/new/standard/nature/182.jpg",
			},
			{
				number: "b",
				imageDescription:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quasi, vel autem magnam praesentium nam tempora, animi eaque aliquid quo ratione, quae nemo ab quos enim. Obcaecati aut quia neque!",
				video: false,
				image1: "https://mdbootstrap.com/img/new/standard/nature/182.jpg",
			},
			{
				number: "c",
				imageDescription:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quasi, vel autem magnam praesentium nam tempora, animi eaque aliquid quo ratione, quae nemo ab quos enim. Obcaecati aut quia neque!",
				video: true,
				image1: "https://mdbootstrap.com/img/new/standard/nature/182.jpg",
				video1: Basketball,
			},
		],
	},
	{
		id: 2,
		src: "https://mdbootstrap.com/img/new/standard/nature/182.jpg",
		title: "2D RPG Game",
		description: (
			<p
				className={`lg:text-xl text-base flex justify-center py-4 ${Theme.Text}`}
			>
				Top-down mulitplayer action-adventure game,Large open environment that
				players can explore together, with various enemies and hazards to face.
			</p>
		),
		techStack: (
			<>
				<div className="text-center mb-12 md:mb-0 ">
					<div className="flex justify-center row w-full ">
						<Link to="/skills">
							<SiTypescript size={50} color="#0067b8" />
						</Link>
					</div>
				</div>

				<div className="text-center mb-12 md:mb-0">
					<div className="flex justify-center row w-full">
						<Link to="/skills">
							<SiFirebase size={50} color="#ffca28" />
						</Link>
					</div>
				</div>
			</>
		),
		link: "https://github.com/BlackMamba187/my-game",
		images: [
			{
				number: "a",
				imageDescription:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quasi, vel autem magnam praesentium nam tempora, animi eaque aliquid quo ratione, quae nemo ab quos enim. Obcaecati aut quia neque!",
				video: false,
				image1:
					"https://www.bandt.com.au/information/uploads/2015/09/getty3.jpg",
			},
			{
				number: "b",
				imageDescription: "Lorem ipsum,",
				video: false,
				image1:
					"http://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg",
			},
			{
				number: "c",
				imageDescription:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quasi, vel autem magnam praesentium nam tempora, animi eaque aliquid quo ratione, quae nemo ab quos enim. Obcaecati aut quia neque!",
				video: true,
				image1: "https://mdbootstrap.com/img/new/standard/nature/182.jpg",
				video1: Basketball,
			},
			{
				number: "e",
				imageDescription:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quasi, vel autem magnam praesentium nam tempora, animi eaque aliquid quo ratione, quae nemo ab quos enim. Obcaecati aut quia neque!",
				video: false,
				image1:
					"https://www.bandt.com.au/information/uploads/2015/09/getty3.jpg",
			},
			{
				number: "f",
				imageDescription:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quasi, vel autem magnam praesentium nam tempora, animi eaque aliquid quo ratione, quae nemo ab quos enim. Obcaecati aut quia neque!",
				video: false,
				image1:
					"http://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg",
			},
			{
				number: "g",
				imageDescription:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quasi, vel autem magnam praesentium nam tempora, animi eaque aliquid quo ratione, quae nemo ab quos enim. Obcaecati aut quia neque!",
				video: false,
				image1:
					"http://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg",
			},
		],
	},
	{
		id: 3,
		src: "https://mdbootstrap.com/img/new/standard/nature/182.jpg",
		title: "Eccomerce Site",
		description: (
			<p
				className={`lg:text-xl text-base flex justify-center py-4 ${Theme.Text}`}
			>
				Top-down mulitplayer action-adventure game,Large open environment that
				players can explore together, with various enemies and hazards to face.
			</p>
		),
		techStack: (
			<>
				<div className="text-center mb-12 md:mb-0 ">
					<div className="flex justify-center row w-full ">
						<Link to="/skills">
							<SiTypescript size={50} color="#0067b8" />
						</Link>
					</div>
				</div>

				<div className="text-center mb-12 md:mb-0">
					<div className="flex justify-center row w-full">
						<Link to="/skills">
							<img src={Nextjs} width={100} />
						</Link>
					</div>
				</div>
			</>
		),
		link: "https://github.com/BlackMamba187/my-game",
		images: [
			{
				number: "a",
				imageDescription:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quasi, vel autem magnam praesentium nam tempora, animi eaque aliquid quo ratione, quae nemo ab quos enim. Obcaecati aut quia neque!",
				video: false,
				image1:
					"https://www.bandt.com.au/information/uploads/2015/09/getty3.jpg",
			},
			{
				number: "b",
				imageDescription: "Lorem ipsum,",
				video: false,
				image1:
					"http://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg",
			},
			{
				number: "c",
				imageDescription:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quasi, vel autem magnam praesentium nam tempora, animi eaque aliquid quo ratione, quae nemo ab quos enim. Obcaecati aut quia neque!",
				video: true,
				image1: "https://mdbootstrap.com/img/new/standard/nature/182.jpg",
				video1: Basketball,
			},
			{
				number: "e",
				imageDescription:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quasi, vel autem magnam praesentium nam tempora, animi eaque aliquid quo ratione, quae nemo ab quos enim. Obcaecati aut quia neque!",
				video: false,
				image1:
					"https://www.bandt.com.au/information/uploads/2015/09/getty3.jpg",
			},
			{
				number: "f",
				imageDescription:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quasi, vel autem magnam praesentium nam tempora, animi eaque aliquid quo ratione, quae nemo ab quos enim. Obcaecati aut quia neque!",
				video: false,
				image1:
					"http://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg",
			},
			{
				number: "g",
				imageDescription:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quasi, vel autem magnam praesentium nam tempora, animi eaque aliquid quo ratione, quae nemo ab quos enim. Obcaecati aut quia neque!",
				video: false,
				image1:
					"http://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg",
			},
		],
	},
];
export const SmallProjectInfo = [
	{
		id: 1,
		src: "https://mdbootstrap.com/img/new/standard/nature/182.jpg",
		video: Basketball,
		title: "Star rating component",
		link: "https://github.com/BlackMamba187/star-rating",
	},

	{
		id: 3,
		src: "https://mdbootstrap.com/img/new/standard/nature/182.jpg",
		video: Basketball,
		title: "Autocomplete feature",
		link: "https://github.com/BlackMamba187/my-game",
	},
	{
		id: 5,
		src: "https://mdbootstrap.com/img/new/standard/nature/182.jpg",
		video: Basketball,
		title: "Loading bar",
		link: "https://github.com/BlackMamba187/my-game",
	},
];
