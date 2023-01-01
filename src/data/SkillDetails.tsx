import { FaAws, FaJs, FaReact } from "react-icons/fa";
import Tailwind from "./Icons/tailwindcss.png";

import Recoil from "./Icons/Recoil.png";
import Python from "./Icons/Python.png";
import CSharp from "./Icons/CSharp.png";
import Nextjs from "./Icons/Nextjs.png";
import { SiFirebase, SiTypescript } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";

export const SkillDetails = [
	{
		id: 1,
		title: "ReactJS",
		child: (
			<div className="flex justify-center">
				<FaReact size={100} color="#61dbfb" />
			</div>
		),
		style: "border-[#61dbfb]",
		text: "text-[#61dbfb]",
		link: "https://reactjs.org/",
	},
	{
		id: 2,
		title: "Javascript",
		child: (
			<div className="flex justify-center">
				<FaJs size={100} color="#f0db4f" />
			</div>
		),
		style: "border-[#f0db4f]",
		text: "text-[#f0db4f]",
		link: "https://www.javascript.com/",
	},
	{
		id: 3,
		title: "Typescript",
		child: (
			<div className="flex justify-center">
				<SiTypescript size={100} color="#0067b8" />
			</div>
		),
		style: "border-[#0067b8]",
		text: "text-[#0067b8]",
		link: "https://www.typescriptlang.org/",
	},
	{
		id: 4,
		title: "React Native",
		child: (
			<div className="flex justify-center">
				<FaReact size={100} color="#61dbfb" />
			</div>
		),
		style: "border-[#61dbfb]",
		text: "text-[#61dbfb]",
		link: "https://reactnative.dev/",
	},
	{
		id: 5,
		title: "AWS",
		child: (
			<div className="flex justify-center">
				<FaAws size={100} color="#FF9900" />
			</div>
		),
		style: "border-[#ff9900]",
		text: "text-[#ff9900]",
		link: "https://aws.amazon.com/",
	},
	{
		id: 6,
		title: "TailwindCSS",
		child: (
			<div className="flex justify-center">
				<img src={Tailwind} alt="Tailwind" width="100" />
			</div>
		),
		style: "border-[#45aab3]",
		text: "text-[#45aab3]",
		link: "https://tailwindcss.com/",
	},
	{
		id: 7,
		title: "GraphQL",
		child: (
			<div className="flex justify-center">
				<GrGraphQl  size={100} color="#e535ab"/>
			</div>
		),
		style: "border-[#e536ac]",
		text: "text-[#e536ac]",
		link: "https://graphql.org/",
	},
	{
		id: 8,
		title: "Firebase",
		child: (
			<div className="flex justify-center">
			<SiFirebase size={100} color="#ffca28" />
			</div>
		),
		style: "border-[#ffca28]",
		text: "text-[#ffca28]",
		link: "https://firebase.google.com/",
	},
	{
		id: 9,
		title: "Recoil",
		child: (
			<div className="flex justify-center">
				<img src={Recoil} alt="Recoil" width="100" />{" "}
			</div>
		),
		style: "border-[#007af4]",
		text: "text-[#007af4]",
		link: "https://recoiljs.org/",
	},{
		id: 10,
		title: "Next.js",
		child: (
			<div className="flex justify-center">
				<img src={Nextjs} alt="Recoil" width="150" />{" "}
			</div>
		),
		style: "border-[#000000]",
		text: "text-[#000000]",
		link: "https://nextjs.org/",
	},
];

export const MoreSkills = [
	{
		id: 1,
		title: "Python",
		child: (
			<div className="flex justify-center my-2">
				<img src={Python} alt="Python" width="100" />
			</div>
		),
		style: "border-[#3475a6]",
		text: "text-[#ffd544]",
		link: "https://www.python.org/",
	},
	{
		id: 2,
		title: "C#",
		child: (
			<div className="flex justify-center my-2">
				<img src={CSharp} alt="CSharp" width="100" />
			</div>
		),
		style: "border-[#953dac]",
		text: "text-[#68217a]",
		link: "https://dotnet.microsoft.com/en-us/languages/csharp",
	},
];