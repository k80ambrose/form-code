osc(7.044, 0.042, 0.471)
	.color(1.17, 0.76, -1.1)
	.rotate(0.90, 0.124)
	.pixelate(8.76, 22.063)
	.modulate(noise(5.09), () => 0.5 * Math.sin(0.08 * time))
	.out(o0);
