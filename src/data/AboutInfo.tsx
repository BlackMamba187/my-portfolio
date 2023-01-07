import UFC from "../data/Interests/UFC.mp4";
import Gaming from "../data/Interests/Gaming.mp4";
import Travel from "../data/Interests/Travel.mp4";
import Basketball from "../data/Interests/Basketball.mp4";
import PCBuilding from "../data/Interests/PCBuilding.mp4";
import { Theme } from "../theme/Theme";

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
							"Taking math classes in sixth form felt like watching a foreign
							movie without subtitles"
						</p>

						<p className="py-2 ">
							That's how much I struggled with it. However, I was able to
							persevere and eventually improve my understanding of math
							concepts.
						</p>
					</div>
				</div>
				<div className={`py-4`}>
					<li className={`${Theme.TextColour} `}>Chemistry</li>
					<p className="p-2">
						To me, Chemistry is like playing with Lego - you can take ideas and
						frameworks apart, rearrange them in different ways, and build
						something entirely new. As you learn more and more, everything
						you've learned before starts to come together and make more sense.
						It's a fascinating and rewarding field of study.
					</p>
				</div>
				<div className={`py-4`}>
					<li className={`${Theme.TextColour} `}>Classical Civilisation</li>
					<div className="p-2">
						<p>
							Classical Civilisation is the study of the cultural history of the
							Mediterranean region between the 8th century BC and the 6th
							century AD. It covers a wide range of topics including art,
							literature, philosophy, politics, and religion from ancient Greek
							and Roman civilizations.
						</p>
						<p className={`pt-8 p-4 font-bold`}> Top 3 Favourite stories</p>
						<p className={`pb-4 px-4`}>
							Medea - A Greek tradegy that explores complex themes such as love,
							betrayal, revenge,
						</p>
						<p className={`p-4`}>
							The Odyssey - An epic adventure that follows the hero Odysseus on
							his journey home after the Trojan War. Along the way, he
							encounters exciting battles, mythological creatures, and
							unexpected twists and turns. All while dealing with themes of
							hospitality, loyalty, courage, and the dangers of pride.
						</p>
						<p className={`p-4`}>
							Oedipus - A Greek tragedy that follows the hero Oedipus as he
							discovers a dark secret about his past that leads to his downfall.
							It explores themes such as fate, free will, and the consequences
							of human actions.
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
						As a Sainsbury's representative, I was responsible for serving
						customers at the check-out and ensuring that their shopping
						experience was smooth and efficient. This included using the till
						systems to process and pack orders, as well as assisting with
						payments.
					</li>
					<li className="py-3">
						I was also trained in customer service best practices and worked to
						maintain a friendly and helpful attitude towards all customers.
					</li>
					<li className="py-3">
						In this role, I was expected to be engaging and friendly with a
						diverse group of customers. My strong customer service skills
						contributed to a 98% overall satisfaction rating, which helped to
						create an enjoyable shopping experience for all customers.
					</li>
					<li className="py-3">
						I took pride in providing excellent customer service and enjoyed
						interacting with people from all walks of life.
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
					<br />
					Senior Customer service assistant
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
						At Maplin, I utilised my extensive knowledge of IT and Maplin
						products and services to assist and consult customers on their
						specific needs.
					</li>
					<li className="py-3">
						I was able to provide personalised recommendations and solutions
						based on each individual's unique use case, drawing on my technical
						expertise and product knowledge. My goal was to help customers make
						informed decisions and find the right products and services to meet
						their needs.
					</li>
					<li className="py-3">
						In this role, I consistently maintained a positive, empathetic, and
						professional attitude towards customers in order to provide the best
						possible service.
					</li>
					<li className="py-3">
						I recognised the importance of building trust and rapport with
						customers, and worked to create a friendly and welcoming environment
						that made them feel comfortable and valued.
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
					<li className="py-2">Experienced in the B2B SAAS support service.</li>
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
						Analysing and evaluating students progression and skill improvement
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
						Managing bug reporting for an application with 50k+ downloads.
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
				<p className="my-2">Top 5 All-time</p>
				<ul className="">
					<li className="py-1">Jon Jones</li>
					<li className="py-1">Khabib Nurmagomedov</li>
					<li className="py-1">Georges St. Pierre</li>
					<li className="py-1">Anderson Silva</li>
					<li className="py-1">Demetrious Johnson</li>
				</ul>
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
				<ul className="">
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
					<ul className="">
						<li className="p-2 bg-sky-500 text-white rounded-l-lg">
							Uganda{" "}
							
						</li>
						<li className="p-2">
							Thailand{" "}
							
						</li>
						<li className="p-2 bg-sky-500 text-white rounded-l-lg">
							Malaysia{" "}
							
						</li>
						<li className="p-2">
							India{" "}
							
						</li>
					</ul>
					<ul className="">
						<li className="p-2 bg-sky-500 text-white rounded-r-lg">
							Singapore{" "}
							
						</li>
						<li className="p-2">
							Italy{" "}
							
						</li>

						<li className="p-2 bg-sky-500 text-white rounded-r-lg">
							Japan{" "}
							
						</li>
						<li className="p-2">
							Turkey{" "}
							
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
			<>
				<p className="my-2">Top 5 All time</p>
				<ul className="">
					<li className="py-1">Michael Jordan</li>
					<li className="py-1">LeBron James</li>
					<li className="py-1">Kobe Bryant</li>
					<li className="py-1">Stephen Curry</li>
					<li className="py-1">Shaquille O’Neal</li>
				</ul>
			</>
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
					<ul className="">
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
