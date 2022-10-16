import { FaAws, FaJs, FaReact } from "react-icons/fa";
import Graphql from "./Icons/Graphql.png";
import Tailwind from "./Icons/tailwindcss.png";
import Firebase from "./Icons/firebase.png";

export const SkillDetails = [
	{
		id: 1,
		title: "Reactjs",
		child: (
			<div className="flex justify-center">
				<FaReact size={100} color="#61dbfb" />
			</div>
		),
		style: "orange-500",
		link: "/",
	},
	{
		id: 2,
		title: "Javascript",
		child: (
			<div className="flex justify-center">
				<FaJs size={100} color="#f0db4f" />
			</div>
		),
		style: "orange-500",
		link: "/",
	},
	{
		id: 3,
		title: "React Native",
		child: (
			<div className="flex justify-center">
				<FaReact size={100} color="#61dbfb" />
			</div>
		),
		style: "orange-500",
		link: "/",
	},
	{
		id: 5,
		title: "AWS",
		child: (
			<div className="flex justify-center">
				<FaAws size={100} color="#FF9900" />
			</div>
		),
		style: "orange-500",
		link: "/",
	},
	{
		id: 6,
		title: "Firebase",
		child: (
			<div className="flex justify-center">
				<img src={Firebase} alt="Firebase" width="100" />{" "}
			</div>
		),
		style: "orange-500",
		link: "/",
	},
	{
		id: 7,
		title: "GraphQL",
		child: (
			<div className="flex justify-center">
				<img src={Graphql} alt="Graphql" width="90" />
			</div>
		),
		style: "orange-500",
		link: "/",
	},
	{
		id: 4,
		title: "TailwindCSS",
		child: (
			<div className="flex justify-center">
				<img src={Tailwind} alt="Tailwind" width="100" />
			</div>
		),
		style: "orange-500",
		link: "/",
	},
];
