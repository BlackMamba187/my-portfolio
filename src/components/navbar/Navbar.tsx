import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { NavbarOpen } from "../../Recoil/Atoms";

const Navbar = () => {
	const links = [
		{
			id: 1,
			link: "home",
			to: "/"
		},
		{
			id: 2,
			link: "about",
			to:"/about"
		},
		{
			id: 3,
			link: "projects",
			to: "/projects"
		},
		{
			id: 4,
			link: "skills",
			to: "/skills"
		},
	];

	const [nav, setNav] = useRecoilState(NavbarOpen);
	return (
		<div className="flex justify-between items-center w-full h-20 px-4 text-white bg-sky-500 fixed">
			<div>
				<h1 className="text-5xl ml-2">PM</h1>
			</div>

			<ul className="hidden md:flex">
				{links.map(({ id, link,to }) => (
					<li
						key={id}
						className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200"
					>
						<Link to={to}>
						<li>{link}</li>
						</Link>
						
					</li>
				))}
			</ul>

			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-4 z-10 md:hidden"
			>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>

			{nav && (
				<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-sky-500 via-sky-500 to-white">
					{links.map(({ id, link, to}) => (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize py-6 text-4xl"
						>
							<Link to={to} onClick={() => setNav(!nav)}>{link}</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Navbar;
