const playBtn = document.getElementById('play');
const audioEl = document.getElementById('audio');
const backwardEL = document.getElementById('backward');
const forwardEL = document.getElementById('forward');
const coverEl = document.getElementById('cover');

const tracks = ['Another-Love', 'MOE-MORE']
let currentTrack = 0;

const chargeTrack = (index) => {
    coverEl.src = `./img/${tracks[index]}.gif`;
    audioEl.src = `./music/${tracks[index]}.mp3`;
}

chargeTrack(currentTrack);

let isPlaying = false;

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioEl.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        audioEl.play();
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

const nextTrack = () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    chargeTrack(currentTrack);
    audioEl.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

const prevTrack = () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    chargeTrack(currentTrack);
    audioEl.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

backwardEL.addEventListener('click', () => {
    prevTrack();
});

forwardEL.addEventListener('click', () => {
    nextTrack();
});


