import { FaAws, FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiFirebase, SiTypescript } from "react-icons/si";
import { Link } from "react-router-dom";
import Recoil from "../data/Icons/Recoil.png";
import Nextjs from "../data/Icons/Nextjs.png";
import { Theme } from "../theme/Theme";

import chatapp1 from "../data/project-data/chat-app/Screenshot_2.jpg";
import chatapp3 from "../data/project-data/chat-app/Screenshot_3.jpg";
import chatapp4 from "../data/project-data/chat-app/Screenshot_4.jpg";
import chatapp5 from "../data/project-data/chat-app/Screenshot_6.jpg";
import chatapp6 from "../data/project-data/chat-app/Screen_Recording_1.mp4";
import chatapp7 from "../data/project-data/chat-app/Screenshot_5.jpg";
import chatapp8 from "../data/project-data/chat-app/Screen_Recording_2.mp4";
import chatapp9 from "../data/project-data/chat-app/Screenshot_7.jpg";
import chatapp10 from "../data/project-data/chat-app/Screenshot_8.jpg";

import game1 from "../data/project-data/game/Screenshot_1.jpg";
import game2 from "../data/project-data/game/Screenshot_2.jpg";
import game3 from "../data/project-data/game/Screenshot_3.jpg";
import game4 from "../data/project-data/game/Screen_Recording_1.mp4";
import game5 from "../data/project-data/game/Screenshot_4.jpg";
import game6 from "../data/project-data/game/Screenshot_5.jpg";
import game7 from "../data/project-data/game/Screenshot_6.jpg";
import game8 from "../data/project-data/game/Screen_Recording_2.mp4";

import eccomerce1 from "../data/project-data/eccomerce/Screenshot_1.jpg";
import eccomerce2 from "../data/project-data/eccomerce/Screen_Recording_1.mp4";
import eccomerce3 from "../data/project-data/eccomerce/Screenshot_3.jpg";
import eccomerce4 from "../data/project-data/eccomerce/Screenshot_5.jpg";
import eccomerce5 from "../data/project-data/eccomerce/Screenshot_6.jpg";

import starRating1 from "../data/project-data/star-rating/star-rating.mp4";
import starRating2 from "../data/project-data/star-rating/Screenshot_1.jpg";

import autoComplete1 from "../data/project-data/auto-complete/auto-complete.mp4";
import autoComplete2 from "../data/project-data/auto-complete/Screenshot_1.jpg";

import validation1 from "../data/project-data/validation/Screen_Recording_1.mp4";
import validation2 from "../data/project-data/validation/Screenshot_1.jpg";

export const ProjectInfo = [
	{
		id: 1,
		src: chatapp1,
		title: "Chat App",
		description: (
			<p
				className={`lg:text-xl text-base py-4 ${Theme.Text}`}
			>
				This messaging app is a React Native application that enables users to
				exchange private messages. This was the first big project I built in order to learn and
				improve their skills in software development.
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
					"The sign in page was built using Amazon Cognito and the AWS Amplify API. Initially, there was no way to automatically log the user onto Amazon DynamoDB. To solve this issue, I used GraphQL to double check the details and create a new user on DynamoDB for creating chat rooms.",
				video: false,
				image1: chatapp4,
			},
			{
				number: "b",
				imageDescription:
					"The profile page allows users to view and update their own details. Currently, this app does not have a page for viewing other users' profiles.",
				video: false,
				image1: chatapp3,
			},
			{
				number: "c",
				imageDescription:
					"I implemented Amazon Cognito for user authentication and Amazon DynamoDB to store and retrieve data for creating chat rooms between users. To do this, I used the joining table in a many-to-many relationship and queried all chat rooms that the user is a part of using the user's ID.",
				video: false,
				image1: chatapp5,
			},
			{
				number: "d",
				imageDescription:
					"This is a demonstration of the chat room functionality. The delay in the reply is due me being slow with an old phone. However, once a user is in a specific chat room, all messages will belong to that chat room's ID.",
				video: true,
				image1: chatapp9,
				video1: chatapp6,
			},
			{
				number: "e",
				imageDescription:
					"I added dark mode to this chat app by using Recoil as the global state management library.",
				video: false,
				image1: chatapp10,
			},
			{
				number: "f",
				imageDescription:
					"The jumping donut animation was created using Lottie, a tool that allows for the rendering of Adobe After Effects animations exported as JSON on mobile and web platforms.",
				video: true,
				image1: chatapp7,
				video1: chatapp8,
			},
		],
	},
	{
		id: 2,
		src: game1,
		title: "2D RPG Game",
		description: (
			<p
				className={`lg:text-xl text-base py-4 ${Theme.Text}`}
			>
				This is a 2D top-down multiplayer action-adventure game that I am
				currently working on. The goal is to create a large, open environment
				that players can explore together.
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
					"This is a screenshot a Demo Town, used for demonstrating and testing design purposes. It is a representation of a typical town, complete with buildings, streets, and other features commonly found in real-life towns.",
				video: false,
				image1: game2,
			},
			{
				number: "b",
				imageDescription:
					"This is a screenshot of a shipping yard, players will be able to interact with the shipping yard and board boats.",
				video: false,
				image1: game3,
			},
			{
				number: "c",
				imageDescription:
					"This is an early stage demonstration of sprite animation using a point-and-click system. It is possible that this may be changed to a WASD movement system in the future.",
				video: true,
				image1: game6,
				video1: game8,
			},
			{
				number: "d",
				imageDescription:
					"The tree animation in the background is intended to bring life to the virtual environment and create a sense of movement. The animated trees add a dynamic element to the background and help to create a more immersive experience for the user. Other objects will be animated as well.",
				video: true,
				image1: game5,
				video1: game4,
			},

			{
				number: "e",
				imageDescription:
					"The maps for this 2D game are created using the software Tiled and are built from scratch.",
				video: false,
				image1: game7,
			},
		],
	},
	{
		id: 3,
		src: eccomerce1,
		title: "E-commerce Site",
		description: (
			<p
				className={`lg:text-xl text-base py-4 ${Theme.Text}`}
			>
				Inspired by the buzz surrounding Next.js, I decided to build an
				e-commerce site using this popular JavaScript framework. Next.js is
				known for its ability to create fast and scalable web applications,
				making it an excellent choice for powering an e-commerce site.
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
							<img alt="next.js" src={Nextjs} width={100} />
						</Link>
					</div>
				</div>
			</>
		),
		link: "https://github.com/BlackMamba187/ecommerce",
		images: [
			{
				number: "a",
				imageDescription:
					"This is a demonstration of an e-commerce site built using Next.JS and the React Context API. The demo includes the homepage, a product details page, and a shopping cart drawer. ReactJS is a JavaScript library for building user interfaces and the Context API is a feature of React that allows for the sharing of state and data between components without the need for props drilling. In this e-commerce site, these tools were used to create a seamless and intuitive shopping experience for the user.",
				video: true,
				image1: eccomerce1,
				video1: eccomerce2,
			},
			{
				number: "b",
				imageDescription:
					"This is a part of the product details page for an e-commerce site. Please note that the product shown is not a real product and all images used are from Google and have been made transparent for demonstration purposes.",
				video: false,
				image1: eccomerce3,
			},
			{
				number: "c",
				imageDescription:
					"This is the add to cart drawer menu for an e-commerce site. The menu is designed to be responsive on various devices and provide a convenient way for users to add items to their shopping cart. When a user adds a product to their cart, the menu will display the updated cart total and give the user the option to view their cart or continue shopping. The add to cart drawer menu is an important feature of an e-commerce site as it allows users to easily add and track the items they wish to purchase.",
				video: false,
				image1: eccomerce4,
			},
			{
				number: "d",
				imageDescription:
					"This e-commerce site is built using Sanity as the back end platform, which allows for easy management of products and website content. With Sanity, it is possible to quickly add new products and make changes to the main products displayed on the header and foot banner of the site.",
				video: false,
				image1: eccomerce5,
			},
		],
	},
];
export const SmallProjectInfo = [
	{
		id: 1,
		src: starRating2,
		video: starRating1,
		title: "Star rating component",
		link: "https://github.com/BlackMamba187/star-rating",
	},
	{
		id: 2,
		src: autoComplete2,
		video: autoComplete1,
		title: "Auto-complete feature",
		link: "https://github.com/BlackMamba187/auto-complete",
	},
	{
		id: 3,
		src: validation2,
		video: validation1,
		title: "Log-in Validation",
		link: "https://github.com/BlackMamba187/login-val",
	},
];
