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

  // Initiate fade-in for <h1>
  var h1 = document.querySelector('h1');
  if (h1) {
    h1.style.opacity = '1'; // Start fade-in
    h1.style.transition = 'opacity 2s ease-out'; // Set transition for fade-in
  }

  // Fade out <h1> after 7 seconds (2s for fade in + 5s wait)
  setTimeout(function() {
    if (h1) {
      h1.style.opacity = '0'; // Start fade-out
      h1.style.transition = 'opacity 5s ease-out'; // Adjust transition for fade-out

      // Optional: Remove the element from document flow after fade-out
      setTimeout(function() {
        h1.style.display = 'none';
      }, 5000); // Wait for fade-out to complete
    }
  }, 7000); // Total wait time before starting fade-out
});