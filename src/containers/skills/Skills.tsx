import React from "react";
import { Link } from "react-router-dom";
import { SkillDetails } from "../../data/SkillDetails";
import { Theme } from "../../theme/Theme";

const Skills = () => {
	return (
		<div className={Theme.gradientBg}>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
      <div className="mt-20" />
        <div className="mt-20">
					<p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
						Experience
					</p>
					<p className="py-6">These are the technologies I've worked with</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
					{SkillDetails.map(({ id, child, title, style, link }) => (
						<Link to={link}>
							<div
								key={id}
								className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-${style}`}
							>
								{child}
								<p className={`text-${style}`}>{title}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
