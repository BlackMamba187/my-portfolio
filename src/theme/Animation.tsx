export const PageAnimation = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	transition: { duration: 0.4 },
};

export const HoverAnimation = {
	initial: { y: 20, opacity: 0 },
	whileHover: { y: 0, opacity: 1 },
	exit: { y: -20, opacity: 0 },
	transition: { duration: 0.9 },
};

export const ButtonAnimation = {
	whileHover: { scale: 1.05 },
	transition: { type: "spring", stiffness: 200, damping: 10 },
	whileTap: { scale: 0.9 },
};

export const NavbarAnimation = {
	open: {
		opacity: 1,
		x: "0%",
		transition: {
			duration: 1,
			type: "spring",
		},
	},
	closed: {
		opacity: 0,
		x: "-200%",
		transition: {
			duration: 0.4,
			type: "spring",
		},
	},
};
export const BackdropAnimation = {
	initial: {  opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
};
export const ModalAnimation = {
	initial: { y: "-100vh", opacity: 0 },
	animate: { y: "0", opacity: 1 },
	exit: { y: "100vh", opacity: 0 },
	 transition: {
        duration: 1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
};
