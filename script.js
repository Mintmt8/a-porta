
const audio = document.getElementById('bg-audio');
let audioLoopTimeout;
let audioStarted = false;

function playWithDelay() {
  audio.play().catch((e) => {
    console.log("Autoplay bloqueado até interação do usuário.");
  });

  audio.onended = () => {
    audioLoopTimeout = setTimeout(() => {
      playWithDelay();
    }, 10000);
  };
}

function stopAudioLoop() {
  clearTimeout(audioLoopTimeout);
  audio.pause();
  audio.currentTime = 0;
  audio.onended = null;
}

function startAudioOnce() {
  if (!audioStarted) {
    playWithDelay();
    audioStarted = true;
  }
}

function checkPassword() {
  const input = document.getElementById('password').value;
  const error = document.getElementById('error-message');

  if (input === 'memento') {
    document.querySelector('.overlay').style.display = 'none';
    stopAudioLoop();

    const successVideo = document.getElementById('success-video');
   successVideo.style.display = 'block';
successVideo.style.position = 'fixed';
successVideo.style.top = '0';
successVideo.style.left = '0';
successVideo.style.width = '100vw';
successVideo.style.height = '100vh';
successVideo.style.objectFit = 'cover';
successVideo.style.zIndex = '10';
successVideo.removeAttribute("controls");
successVideo.play();

  } else {
    error.textContent = 'Senha incorreta!';
  }
}
