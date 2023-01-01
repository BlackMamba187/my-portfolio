import React from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { NavbarOpen } from "../../recoil/Atoms";
import { NavbarAnimation } from "../../theme/Animation";
import { Theme } from "../../theme/Theme";

const links = [
	{
		id: 1,
		link: "home",
		to: "/",
	},
	{
		id: 2,
		link: "about",
		to: "/about",
	},
	{
		id: 3,
		link: "projects",
		to: "/projects",
	},
	{
		id: 4,
		link: "skills",
		to: "/skills",
	},
];

const Navbar = () => {
	const [nav, setNav] = useRecoilState(NavbarOpen);

	return (
		<header id="nav" className="">
			<div
				className={`relative flex row justify-between items-center w-full p-2 bg-sky-500 mt-0 z-20`}
			>
				<div>
					<h1 className={`${Theme.TextWhite} md:text-6xl text-5xl ml-2`}>PM</h1>
				</div>

				<ul className="hidden md:flex">
					{links.map(({ id, link, to }) => (
						<Link
							to={to}
							key={id}
							className={`${Theme.TextWhite} px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 text-4xl`}
						>
							{link}
						</Link>
					))}
				</ul>
				<div
					onClick={() => setNav(!nav)}
					className={`${Theme.TextWhite} cursor-pointer pr-4 z-10 md:hidden`}
				>
					{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
				</div>
				<motion.div
					initial={false}
					animate={nav ? "open" : "closed"}
					variants={NavbarAnimation}
					className={`flex flex-col justify-center w-full items-center fixed top-0 left-0 ${Theme.Bg}`}
				>
					{links.map(({ id, link, to }) => (
						<Link
							to={to}
							onClick={() => setNav(!nav)}
							key={id}
							className={`${Theme.Text} cursor-pointer capitalize py-6 text-5xl`}
						>
							{link}
						</Link>
					))}
				</motion.div>
			</div>
			<div className="w-full h-[10rem] overflow-hidden">
				<svg
					id="svg"
					className={`relative w-[800%] h-[100%] z-10 md:animate-wave top-[-1%]`}
					preserveAspectRatio="none"
					viewBox="0 0 1440 500"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M 0,500 C 0,500 0,250 0,250 C 22.3842671949266,249.09667008844892 44.7685343898532,248.19334017689783 77,256 C 109.2314656101468,263.80665982310217 151.3101296355138,280.32330938085767 179,297 C 206.6898703644862,313.67669061914233 219.9909470680916,330.51342229967145 249,317 C 278.0090529319084,303.48657770032855 322.7260820921196,259.62300142045666 354,236 C 385.2739179078804,212.37699857954334 403.10472456342984,208.99457201850186 428,243 C 452.89527543657016,277.00542798149814 484.8550196541611,348.3987105055359 515,326 C 545.1449803458389,303.6012894944641 573.4751968199263,187.41058595935434 596,186 C 618.5248031800737,184.58941404064566 635.2441930661339,297.9589456570466 664,300 C 692.7558069338661,302.0410543429534 733.5480309155378,192.75363141245913 761,187 C 788.4519690844622,181.24636858754087 802.5636832717148,279.02652869311686 831,280 C 859.4363167282852,280.97347130688314 902.1972359976028,185.14025381507318 934,165 C 965.8027640023972,144.85974618492682 986.6473727378741,200.41245604659036 1013,217 C 1039.352627262126,233.58754395340964 1071.2132730509013,211.20992199856556 1101,196 C 1130.7867269490987,180.79007800143444 1158.4995350585214,172.7478559591474 1190,161 C 1221.5004649414786,149.2521440408526 1256.7885867150135,133.7986541648449 1281,169 C 1305.2114132849865,204.2013458351551 1318.3461180814245,290.0575273814729 1343,312 C 1367.6538819185755,333.9424726185271 1403.8269409592876,291.97123630926353 1440,250 C 1440,250 1440,500 1440,500 Z"
						stroke="none"
						strokeWidth="0"
						fill="#0ea5e9"
						fillOpacity="1"
						transform="rotate(-180 720 250)"
					></path>
				</svg>
			</div>
		</header>
	);
};

export default Navbar;
