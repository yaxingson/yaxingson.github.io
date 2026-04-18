
const canvas = document.querySelector("#bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.cssText = `
position: absolute;
left: 0;
top: 0;
z-index: -1;
`

const branch = l => {
	if (l > 8) return;
	ctx.save();
	ctx.scale(1 - l * 0.1, 0.5);
	ctx.fillRect(-0.5, -0.5, 1, 1);
	ctx.restore();
	if (Math.random() * 1.04 < 0.04) {
		ctx.save();
		ctx.translate(-0.1, 0);
		ctx.rotate((Math.random() * 5 + 15) * Math.PI / 180);
		ctx.translate(0, 0.3);
		ctx.scale(0.7 * 0.9999995, 0.7 * 0.9999995);
		branch(l + 1);
		ctx.restore();
		ctx.translate(0.1, 0);
		ctx.rotate((-Math.random() * 15 - 10) * Math.PI / 180);
		ctx.translate(0, 0.3);
		ctx.scale(0.7 * 0.9999995, 0.7 * 0.9999995);
		return branch(l + 1);
	} else {
		ctx.rotate((Math.random() * 10 - 5) * Math.PI / 180);
		ctx.translate(0, 0.3);
		ctx.scale(0.9999995, 0.9999995);
		return branch(l);
	}
};

const requestAnimationFrame = () => {
	return new Promise(resolve => {
		window.requestAnimationFrame(resolve);
	});
};

let running = false;

async function start() {
	if (running === true) return;
	running = true;
	const w = (canvas.width = canvas.offsetWidth * 2);
	const h = (canvas.height = canvas.offsetHeight * 2);
	
  ctx.fillStyle = "#738073";
	ctx.fillRect(0, 0, w, h);
  
	for (let i = 0; i < 50; i++) {
		ctx.save();
		ctx.translate(w * 0.2 + Math.random() * w * 0.6, h);
		ctx.scale(-20 - i * 0.5, -20 - i * 0.5);
		ctx.fillStyle = `hsl(0, 0%, ${100 - i * 2}%)`;
		branch(0);
		ctx.restore();
		await requestAnimationFrame();
	}
	running = false;
}
["click", "touchdown"].forEach(event => {
	document.addEventListener(event, start, false);
});

start()
