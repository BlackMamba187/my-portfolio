import React from "react";
import { Theme } from "../../theme/Theme";

const About = () => {
	return (
		<div className={Theme.gradientBg}>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="mt-20" />
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-20">
						About
					</p>
				</div>
        <div className="mt-5" />
				<ol className="border-l border-gray-300">
					<li>
						<div className="flex flex-start items-center pt-3">
							<div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
							<p className="text-gray-500 text-sm">01.07.2021</p>
						</div>
						<div className="mt-0.5 ml-4 mb-6">
							<h4 className="text-gray-800 font-semibold text-xl mb-1.5">
								Title of section 1
							</h4>
							<p className="text-gray-500 mb-3">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
								scelerisque diam non nisi semper, et elementum lorem ornare.
								Maecenas placerat facilisis mollis. Duis sagittis ligula in
								sodales vehicula.
							</p>
						</div>
					</li>
					<li>
						<div className="flex flex-start items-center pt-2">
							<div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
							<p className="text-gray-500 text-sm">13.09.2021</p>
						</div>
						<div className="mt-0.5 ml-4 mb-6">
							<h4 className="text-gray-800 font-semibold text-xl mb-1.5">
								Title of section 2
							</h4>
							<p className="text-gray-500 mb-3">
								Libero expedita explicabo eius fugiat quia aspernatur autem
								laudantium error architecto recusandae natus sapiente sit nam
								eaque, consectetur porro molestiae ipsam an deleniti.
							</p>
						</div>
					</li>
					<li>
						<div className="flex flex-start items-center pt-2">
							<div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
							<p className="text-gray-500 text-sm">25.11.2021</p>
						</div>
						<div className="mt-0.5 ml-4 pb-5">
							<h4 className="text-gray-800 font-semibold text-xl mb-1.5">
								Title of section 3
							</h4>
							<p className="text-gray-500 mb-3">
								Voluptatibus temporibus esse illum eum aspernatur, fugiat
								suscipit natus! Eum corporis illum nihil officiis tempore.
								Excepturi illo natus libero sit doloremque, laborum molestias
								rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
							</p>
						</div>
					</li>
				</ol>
			</div>
		</div>
	);
};

export default About;
