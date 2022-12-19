import UFC from "../data/Interests/UFC.mp4";
import Gaming from "../data/Interests/Gaming.mp4";
import Travel from "../data/Interests/Travel.mp4";
import Basketball from "../data/Interests/Basketball.mp4";
import PCBuilding from "../data/Interests/PCBuilding.mp4";
import { Theme } from "../theme/Theme";
import ReactCountryFlag from "react-country-flag";

export const AboutEducation = [
	{
		id: 1,
		title: (
			<>
				<p>
					11 A*-C GCSE
					<br />
					St Edward's Church of England
				</p>
			</>
		),
		dates: "2009 to 2014",
		description: (
			<ul className={`list-disc p-3 ${Theme.Text}`}>
				<li className={`py-4`}>Maths</li>
				<li className={`py-4`}>Chemistry</li>
				<li className={`py-4`}>Biology</li>
				<li className={`py-4`}>Physics</li>
				<li className={`py-4`}>History</li>
				<li className={`py-4`}>Business</li>
				<li className={`py-4`}>Business Commmunications</li>
				<li className={`py-4`}>English Literature</li>
				<li className={`py-4`}>English Language</li>
				<li className={`py-4`}>Statistics</li>
				<li className={`py-4`}>German</li>
			</ul>
		),
	},
	{
		id: 2,
		title: (
			<>
				<p>
					3 A levels
					<br />
					St Edward's Church of England
				</p>
			</>
		),
		dates: "2014 to 2016",
		description: (
			<ul className={`list-disc p-3 ${Theme.Text}`}>
				<div className={`py-4`}>
					<li className={`${Theme.TextColour} `}>Maths</li>
					<div className="p-2 ">
						<p className="flex flex-col">
							"Math classes were like watching a foreign movie without
							subtitles"
						</p>

						<p className="py-2 ">
							This qoute pretty much summarises my experiences with maths in sixth
							form.
						</p>
					</div>
				</div>
				<div className={`py-4`}>
					<li className={`${Theme.TextColour} `}>Chemistry</li>
					<p className="p-2">
						Chemistry is like Lego! Ideas and frameworks can be broken down into
						smaller pieces and then reassembled in different ways to build
						something entirely new. You’ll find with each new thing you learn,
						everything else you’ve learned before makes more and more sense as
						the concepts all start to piece together.
					</p>
				</div>
				<div className={`py-4`}>
					<li className={`${Theme.TextColour} `}>Classical Civilisation</li>
					<div className="p-2">
						<p>
							Classical Civilisation is the study of the period of cultural
							history between the 8th century BC and the 6th century AD centred
							on the Mediterranean Sea.
						</p>
						<p className={`pt-8 p-4 font-bold`}> Top 3 Favourite stories</p>
						<p className={`pb-4 px-4`}>
							Medea - A greek tradegy about betrayal and vengeance
						</p>
						<p className={`p-4`}>
							The Odyssey - A epic poem telling the story of the Greek hero
							Odysseus struggles as he admits to joueny home after Ten years at
							war
						</p>
						<p className={`p-4`}>
							Oedipus - A Greek tragedy about fate and prophecy with the main
							focus of denying your own destiny only to find out, the more you
							try you played a part in fueling the prophecy
						</p>
					</div>
				</div>
			</ul>
		),
	},
	{
		id: 3,
		title: (
			<>
				<p>
					Biochemistry BSc (Hons)
					<br />
					Kingston London university
				</p>
			</>
		),
		dates: "2019 to 2022",
		description: (
			<ul className={`list-disc p-3 ${Theme.Text}`}>
				<div className={`py-2`}>
					<li className={`${Theme.TextColour} `}>Biochemistry skills</li>
					<p className={`py-1`}>
						I am proficient in research skills such as practical skills in the
						laboratory and the principles of experimental design as well as
						statistical analysis of data.
					</p>
					<p className={`py-1`}>
						I've completed research on pharmacodynamics (how drugs take their
						effect at given targets) and drug disposition/pharmacokinetics (the
						effect the body has on administered drugs)
					</p>
				</div>
				<div className={`py-2`}>
					<li className={`${Theme.TextColour} `}>
						The human body (proteins and metabolism)
					</li>
					<p className={`py-1`}>
						I gained knowledge on human health and disease, on a molecular
						level, which involves the understanding of many hormones and
						proteins including enzymes.
					</p>
				</div>
				<div className={`py-2`}>
					<li className={`${Theme.TextColour} `}>Molecular Biology</li>
					<p className={`py-1`}>
						I can show an insight into the structure and function of cells, from
						receptor interactions and intracellular signalling pathways through
						to the regulation of gene expression and changes in cellular
						processes.
					</p>
				</div>
				<div className={`py-2`}>
					<li className={`${Theme.TextColour} `}>Bioinformatics</li>
					<p className={`py-1`}>
						I've used various databases and analysing tools to understand
						gene/genome variability, which is related to my knowledge of
						molecular diagnostics and drug development.
					</p>
				</div>
			</ul>
		),
	},
];

export const AboutWorkExp = [
	{
		id: 1,
		title: (
			<>
				<p>
					Sainsbury's Barkingside
					<br />
					Customer Service Assistant
				</p>
			</>
		),
		dates: "2014 to 2017",
		description: (
			<>
				<p className={`${Theme.TextColour} pt-3`}>Main Role</p>
				<ul className={`list-disc p-3 ${Theme.Text}`}>
					<li className="pb-3">
						{" "}
						As a Sainsbury's representative, my role was serving customers using
						the till systems, making sure their shopping was processed, packed,
						and paid for without unnecessary delays.
					</li>
					<li className="py-3">
						This role also required me to be engaging and friendly with a
						variety of different people and because of my excellent customer
						service I had a 92% overall customer service satisfaction which led
						to everyone having an enjoyable shopping experience.
					</li>
				</ul>
			</>
		),
	},
	{
		id: 2,
		title: (
			<>
				<p>
					Maplin
					<br /> Customer service assistant
					<br />
				</p>
			</>
		),
		dates: "2018 to 2019",
		description: (
			<>
				<p className={`${Theme.TextColour} pt-3`}>Main Role</p>
				<ul className={`list-disc p-3 ${Theme.Text}`}>
					<li className="pb-3">
						{" "}
						In this role I combined my extensive IT knowledge and my knowledge
						of maplin products and services to assist and consult customers on
						an individual use case.
					</li>
					<li className="py-3">
						I always maintained a positive, empathetic and professional attitude
						toward customers at all times, to ensure I was giving the best
						customer possible.
					</li>
				</ul>
			</>
		),
	},
	{
		id: 3,
		title: (
			<>
				<p>
					Stint Ltd
					<br />
					Senior Customer Support executive
				</p>
			</>
		),
		dates: "2021 to Present",
		description: (
			<>
				<p className={`${Theme.TextColour} pt-3`}>Main Role</p>
				<ul className={`list-disc pb-3 ${Theme.Text}`}>
					<li className="py-2">Experienced in the B2B SAAS support service</li>
					<li className="py-2">
						Offering support to users through multiple channels: Phone,
						LiveChat, Email & Socials.
					</li>
					<li className="py-2">
						In depth experience with the ticket management system Zendesk to
						help receive, categorise and solve tickets.
					</li>
					<li className="py-2">
						Helping businesses and users with their day to day use of the Stint
						app.
					</li>
					<li className="py-2">
						Analysing and Evaluating students progression and skill improvement
						through daily feedback calls.
					</li>{" "}
					<li className="py-2">
						Troubleshooting or escalating technical & financial issues.
					</li>{" "}
					<li className="py-2">
						Inputting and transferring data from Microsoft spreadsheets.
					</li>
					<li className="py-2">
						Creating business accounts and supporting new businesses in
						navigating the platform.
					</li>
					<li className="py-2">
						Outbound engagement & experience calls to both users and businesses.
					</li>
					<li className="py-2 ">
						Managing Bug reporting for an application with 50k+ downloads
					</li>
				</ul>
			</>
		),
	},
];

export const Interests = [
	{
		id: 1,
		title: "UFC",
		src: UFC,
		intro: (
			<div className="my-2">
				<p>
					I personally love the UFC for its fast-paced and unpredictable nature.
					There is always something at stake. Whether it is a title fight or a
					grudge match, the stakes are always high in the UFC and the talent is
					amazing.
				</p>
			</div>
		),
		ranking: (
			<>
				<div className="flex grid grid-cols-2 gap-2 place-content-center">
					<div>
						<p className="my-2">My 5 Favourite Current</p>
						<ul className="list-decimal">
							<li className="py-1">Israel Adesanya</li>
							<li className="py-1">kamaru usman</li>
							<li className="py-1">Amanda Nunes</li>
							<li className="py-1">Valentina Shevchenko</li>
							<li className="py-1">Francis Ngannou</li>
						</ul>
					</div>
					<div>
						<p className="my-2">Top 5 All-time</p>
						<ul className="list-decimal">
							<li className="py-1">Jon Jones</li>
							<li className="py-1">Khabib Nurmagomedov</li>
							<li className="py-1">Georges St. Pierre</li>
							<li className="py-1">Anderson Silva</li>
							<li className="py-1">Demetrious Johnson</li>
						</ul>
					</div>
				</div>
			</>
		),
	},
	{
		id: 2,
		title: "Gaming",
		src: Gaming,
		intro: (
			<div className="my-2">
				<p>
					Whether it's interactive long form story telling or fast paced
					emersion, there is a game for everyone and I've met so many people all
					over the world just by sharing similar interests.
				</p>
			</div>
		),
		ranking: (
			<>
				<p className="my-2">Top 5 Favourite Games</p>
				<ul className="list-decimal">
					<li className="py-1">Pokemon Emerald</li>
					<li className="py-1">Dark Souls I</li>
					<li className="py-1">Divinity: Orginal Sin 2</li>
					<li className="py-1">The Witcher 3: Wild Hunt</li>
					<li className="py-1">Burnout Revenge</li>
				</ul>
			</>
		),
	},
	{
		id: 3,
		title: "Traveling",
		src: Travel,
		intro: (
			<div className="my-2">
				<p>
					Backpacking or trekking through another country really got out of my
					comfort zone but I also found new and interesting things to learn
					about new cultures and different histories.
				</p>
			</div>
		),
		ranking: (
			<>
				<p className="my-4">The list of crountries I've been too are below:</p>
				<div className="flex grid grid-cols-2 place-content-center">
					<ul className="list-disc">
						<li className="p-2 bg-sky-500 text-white rounded-l-lg">
							Uganda{" "}
							<ReactCountryFlag
								countryCode="UG"
								className="px-1"
								style={{
									fontSize: "2.4em",
								}}
							/>
						</li>
						<li className="p-2">
							Thailand{" "}
							<ReactCountryFlag
								countryCode="TH"
								className="px-1"
								style={{
									fontSize: "2.4em",
								}}
							/>
						</li>
						<li className="p-2 bg-sky-500 text-white rounded-l-lg">
							Malaysia{" "}
							<ReactCountryFlag
								countryCode="MY"
								className="px-1"
								style={{
									fontSize: "2.4em",
								}}
							/>
						</li>
						<li className="p-2">
							India{" "}
							<ReactCountryFlag
								countryCode="IN"
								className="px-1"
								style={{
									fontSize: "2.4em",
								}}
							/>
						</li>
					</ul>
					<ul className="list-disc">
						<li className="p-2 bg-sky-500 text-white rounded-r-lg">
							Singapore{" "}
							<ReactCountryFlag
								countryCode="SG"
								className="px-1 "
								style={{
									fontSize: "2.4em",
								}}
							/>
						</li>
						<li className="p-2">
							Italy{" "}
							<ReactCountryFlag
								countryCode="IT"
								className="px-1"
								style={{
									fontSize: "2.4em",
								}}
							/>
						</li>

						<li className="p-2 bg-sky-500 text-white rounded-r-lg">
							Japan{" "}
							<ReactCountryFlag
								countryCode="JP"
								className="px-1"
								style={{
									fontSize: "2.4em",
								}}
							/>
						</li>
						<li className="p-2">
							Turkey{" "}
							<ReactCountryFlag
								countryCode="TR"
								className="px-1"
								style={{
									fontSize: "2.4em",
								}}
							/>
						</li>
					</ul>
				</div>
			</>
		),
	},
	{
		id: 4,
		title: "Basketball",
		src: Basketball,
		intro: (
			<div>
				<p className="my-4">
					Basketball is the sport I grew up watching and it always surprises me
					with all the chaos that can take place over the course of the regular
					season.
				</p>
			</div>
		),
		ranking: (
			<div className="my-8 flex grid grid-cols-2 gap-2 place-content-center">
				<div>
					<p>Top 5 Current Players</p>
					<ul className="list-decimal">
						<li className="py-1">Giannis Antetokounmpo</li>
						<li className="py-1">Luka Dončić</li>
						<li className="py-1">Stephen Curry</li>
						<li className="py-1">Nikola Jokic</li>
						<li className="py-1">Joel Embiid</li>
					</ul>
				</div>
				<div>
					<p>Top 5 All-time</p>
					<ul className="list-decimal">
						<li className="py-1">Michael Jordan</li>
						<li className="py-1">LeBron James</li>
						<li className="py-1">Kobe Bryant</li>
						<li className="py-1">Stephen Curry</li>
						<li className="py-1">Shaquille O’Neal</li>
					</ul>
				</div>
			</div>
		),
	},
	{
		id: 6,
		title: "PC Building",
		src: PCBuilding,
		intro: (
			<div className="my-2">
				<p>
					Without computers we wouldn't have the amazing ability to access
					information quickly and easily, and the ability to perform complex
					tasks.
				</p>
			</div>
		),
		ranking: (
			<>
				<p className="my-1">My current specs are below:</p>
				<div className="my-1">
					<ul className="list-disc">
						<li className="py-1">CPU: i7 7700k</li>
						<li className="py-1">CPU Cooler: Corsair H100i</li>
						<li className="py-1">Motherboard: MSI Z270 Motherboard</li>
						<li className="py-1">Memory: Corsair Vengeance 16 GB</li>
						<li className="py-1">Grapics Card: GeForce GTX 1080</li>
						<li className="py-1">Power Supply: Corsair RM1000x 1000W</li>
						<li className="py-1">
							Monitor-1: Gigabyte 27.0" 2560 x 1440 165Hz
						</li>
						<li className="py-1">Monitor-2: Samsung 21.5 1920 x 1080</li>
					</ul>
				</div>
			</>
		),
	},
];
