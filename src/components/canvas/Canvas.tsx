import React, { useEffect, useRef } from "react";

let width = window.innerWidth;
let height = window.innerHeight;

const draw = (context: any) => {
  console.log("hello")
	window.onresize = () => {
		context.canvas.width = window.innerWidth;
		context.canvas.height = window.innerHeight;
	};
};

const Canvas = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas: any = canvasRef.current;
		const context = canvas.getContext("2d");
		let then = Date.now();
		let now;
		let fps = 60;

		const render = () => {
			now = Date.now();

			let diff = now - then;
			if (diff > 1000 / fps) {
				draw(context);
				then = now;
			}
			window.requestAnimationFrame(render);
		};
		render();
	}, []);

	return <canvas ref={canvasRef} height={height} width={width} />;
};

export default Canvas;
