import { motion } from "framer-motion";
import { ButtonAnimation } from "../../theme/Animation";
import { Theme } from "../../theme/Theme";

type Props = {
	action: any;
	text: string;
	state: Boolean ;
	width: string
};
const Button = (button: Props) => {
	return (
		<motion.div
			className={`${button.width} h-[3rem] m-2 md:m-4 flex justify-center border-4 ${
				Theme.Border
			} ${
				button.state
					? ` ${Theme.Colour} ${Theme.TextWhite}`
					: `${Theme.TextColour}`
			} rounded-full cursor-pointer`}
			whileHover={ButtonAnimation.whileHover}
			transition={ButtonAnimation.transition}
			whileTap={ButtonAnimation.whileTap}
			onClick={button.action}
		>
			<b className="self-center">{button.text}</b>
		</motion.div>
	);
};

export default Button;
