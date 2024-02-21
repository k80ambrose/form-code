document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.querySelector('#hydra-canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  new Hydra({
    canvas: canvas,
    detectAudio: false,
    enableStreamCapture: false,
    width: canvas.width,
    height: canvas.height
  });

  var clicks = 0;
  document.addEventListener('click', function() {
    clicks += 1;
  });

  document.body.onkeyup = function(space) {
    if(space.keyCode == 32) {
      location.reload();
    }
  };

  osc(1, 0.42, 0.7)
    .color((Math.random() - Math.sin(0.03 * time)), (Math.random() + Math.tan(0.08 * time)), (Math.random()), 0.5)
    .rotate(0.90, 0.1)
    .pixelate(4, 4)
    .modulate(noise(3), () => (1.5 + clicks) * Math.sin(0.025 * time))
    .out(o0);

  document.querySelector('#info-icon').addEventListener('click', function() {
    document.querySelector('#popup-message').style.display = 'block';
  });
  
  document.addEventListener('click', function(e) {
    var infoIcon = document.querySelector('#info-icon');
    var popupMessage = document.querySelector('#popup-message');
    if (!infoIcon.contains(e.target) && !popupMessage.contains(e.target)) {
      popupMessage.style.display = 'none';
    }
  });

  // Hide <h1> after 5 seconds
  setTimeout(function() {
    var h1 = document.querySelector('h1');
    if (h1) {
      h1.style.display = 'none';
    }
  }, 5000);
});
