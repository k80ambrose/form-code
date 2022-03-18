<style>
  body {
    margin: 0;
  }
</style>
<body>

  <canvas id="hydra-canvas"></canvas>

  <script src="https://unpkg.com/hydra-synth"></script>
  <script>
    /* global Hydra, osc, noise, o0, time */

    const canvas = document.querySelector('#hydra-canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    new Hydra({
      canvas: canvas,
      detectAudio: false,
      enableStreamCapture: false,
      width: canvas.width,
      height: canvas.height
    })

    // by Olivia Jack
    // https://ojack.github.io
    osc(4, 0.042, 0.481)
      .color(1.17, 0.387, -1.1)
      .rotate(0.30, 0.1)
      .pixelate(0.076, 20)
      .modulate(noise(2.5), () => 1.5 * Math.sin(0.08 * time))
      .out(o0)

  </script>
</body>
