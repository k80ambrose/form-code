function setup() {
  createCanvas(innerWidth, innerHeight)
  background(0)
  let x = width / 2
  let y = height / 2
  let r = width / 4
  ellipse(x, y, r)
}
osc(4, 0.042, 0.481)
	.color(1.17, 0.387, -1.1)
	.rotate(0.30, 0.1)
	.pixelate(0.076, 20)
	.modulate(noise(2.5), () => 1.5 * Math.sin(0.08 * time))
	.out(o0);
