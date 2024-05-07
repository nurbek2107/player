const playBtn = document.getElementById('play');
const audioEl = document.getElementById('audio');
const backwardEL = document.getElementById('backward');
const forwardEL = document.getElementById('forward');
const coverEl = document.getElementById('cover');
const AnotherEl = document.getElementById('Another-Love');
const MOEEl = document.getElementById('MOE-MORE');
const MIXEL = document.getElementById('MIX-Long')
const imageEL = document.getElementById('cover')


const tracks = ['Another-Love', 'MOE-MORE','MIX-Long-Version']
let currentTrack = 0;

const chargeTrack = (index) => {
    coverEl.src = `./img/${tracks[index]}.gif`;
    audioEl.src = `./music/${tracks[index]}.mp3`;
}

chargeTrack(currentTrack);

let track=true;
playBtn.addEventListener('click', () => {
    if (imageEL.classList.contains('play')) {
        imageEL.classList.remove('play');
        audioEl.pause()
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
    else {
        audioEl.play()
        imageEL.classList.add('play');
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'

    }
    track = !track;
});


const plas = () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    chargeTrack(currentTrack);
    audioEl.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
}
const minus = () => {
    currentTrack = (currentTrack - 1 + tracks.length ) % tracks.length;
    chargeTrack(currentTrack);
    audioEl.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
}

backwardEL.addEventListener('click', () => {
    plas();
});

forwardEL.addEventListener('click', () => {
    minus();
});

document.getElementById('Another-Love').addEventListener('click', () => {
    audio.src = './music/Another-Love.mp3';
    coverEl.src = './img/Another-Love.gif';
    if (track) {
        audioEl.play()
       
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
    }

});

document.getElementById('MOE-MORE').addEventListener('click', () => {
    audio.src = './music/MOE-MORE.mp3';
    coverEl.src = './img/MOE-MORE.gif';
    audio.play();
    if (track) {
        audioEl.play()

        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
    }
});

document.getElementById('MIX-Long').addEventListener('click', () => {
    audio.src = './music/MIX-Long-Version.mp3';
    coverEl.src = './img/MIX-Long-Version.gif';
    audio.play();
    if (track) {
        audioEl.play()
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
    }
});