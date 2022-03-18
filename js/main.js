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

      var clicks = 0;
      function onClick () {
        clicks += 1;
      }

      var x = MouseEvent.clientX;
      var y = MouseEvent.clientY;

      osc(1, 0.42, 0.7)
        .color((Math.random() - Math.sin(0.03 * time)), (Math.random() + Math.sin(0.08 * time)),(Math.random()))
        .rotate(0.90, 0.1)
        .pixelate(4, 4)
        .modulate(noise(3), () => (1.5 + clicks) * Math.sin(0.03 * time))
        .out(o0)

        // by Olivia Jack
        // https://ojack.github.io
