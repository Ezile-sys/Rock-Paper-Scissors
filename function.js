const music = document.getElementById('bMusic');
const muteBtn = document.getElementById('muteBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playPauseBtn = document.getElementById('playPauseBtn');
const begin = document.getElementById('begin');
const play = document.getElementById('play');
const home = document.getElementById('home');

// Playlist with full paths
const playlist = [
  "music/basketball.mp3",
  "music/Duel.mp3",
  "music/heroes.mp3",
  "music/power.mp3",
  "music/Rap.mp3",
  "music/P_tonight.mp3"
];

let currentTrack = 0;

// Load and play a track
function loadTrack(index) {
  music.src = playlist[index];
  music.play();
  playPauseBtn.textContent = "⏸️";
}

// Autoplay first track on load
window.addEventListener("load", () => {
  loadTrack(currentTrack);
});

// Mute/unmute
muteBtn.addEventListener("click", () => {
  music.muted = !music.muted;
  muteBtn.textContent = music.muted ? "🔈" : "🔇";
});

// Next track
nextBtn.addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
});

// Previous track
prevBtn.addEventListener("click", () => {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrack);
});

// Play/pause
playPauseBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playPauseBtn.textContent = "⏸️";
  } else {
    music.pause();
    playPauseBtn.textContent = "▶️";
  }
});

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.animationDuration = (2 + Math.random() * 2) + 's';
  sparkle.style.opacity = Math.random();
  document.getElementById('sparkle-container').appendChild(sparkle);

  // Remove it after animation ends
  setTimeout(() => {
    sparkle.remove();
  }, 4000);
}

//  Generate sparkles continuously
setInterval(createSparkle, 150); // Lower = more sparkles



