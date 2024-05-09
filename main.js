const playBtn = document.getElementById('play');
const audioEl = document.getElementById('audio');
const backwardEL = document.getElementById('backward');
const forwardEL = document.getElementById('forward');
const pEL = document.getElementById('text1');
const progressEl = document.getElementById('progress');
const progresscEle = document.getElementById('progress-container');
const changeVolume = document.getElementById('changeVolume');
const coverEl = document.getElementById('cover');


const tracks = ['Another-Love', 'MOE-MORE', 'MIX-Long-Version'];
let currentTrack = 0;

const chargeTrack = (index) => {
    coverEl.src = `./img/${tracks[index]}.gif`;
    audioEl.src = `./music/${tracks[index]}.mp3`;
}

chargeTrack(currentTrack);

let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        coverEl.classList.remove('play');
        audioEl.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        coverEl.classList.add('play');
        audioEl.play();
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    isPlaying = !isPlaying;
}

playBtn.addEventListener('click', togglePlay);

function nextTrack() {
    coverEl.classList.add('play');
    currentTrack = (currentTrack + 1) % tracks.length;
    chargeTrack(currentTrack);
    if (coverEl.classList.contains('play')) {
        audioEl.play();
        coverEl.classList.add('play');
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        coverEl.classList.remove('play');
        audioEl.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

function prevTrack() {
    coverEl.classList.add('play');
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    chargeTrack(currentTrack);
    if (coverEl.classList.contains('play')) {
        audioEl.play();
        coverEl.classList.add('play');
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        coverEl.classList.remove('play');
        audioEl.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

backwardEL.addEventListener('click', prevTrack);
forwardEL.addEventListener('click', nextTrack);

const playlistItems = document.querySelectorAll('.playlist li');
playlistItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentTrack = index;
        chargeTrack(currentTrack);
        togglePlay();
    });
});

audioEl.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.target;
    const progressPercent = (currentTime / duration) * 100;
    progressEl.style.width = `${progressPercent}%`;
});

changeVolume.addEventListener('input', (d) => {
    audioEl.volume = d.target.value;
});







// document.getElementById('Another-Love').addEventListener('click', () => {
//     audioEl.src = './music/Another-Love.mp3';
//     coverEl.src = './img/Another-Love.gif';
//     if (coverEl.classList.contains('play')) {
//         audioEl.play();
//         coverEl.classList.add('play');
//         playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
//     } else {
//         coverEl.classList.remove('play');
//         audioEl.pause();
//         playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
//     }
// });

// document.getElementById('MOE-MORE').addEventListener('click', () => {
//     audioEl.src = './music/MOE-MORE.mp3';
//     coverEl.src = './img/MOE-MORE.gif';
//     if (coverEl.classList.contains('play')) {
//         audioEl.play();
//         coverEl.classList.add('play');
//         playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
//     } else {
//         coverEl.classList.remove('play');
//         audioEl.pause();
//         playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
//     }
// });

// document.getElementById('MIX-Long').addEventListener('click', () => {
//     audioEl.src = './music/MIX-Long-Version.mp3';
//     coverEl.src = './img/MIX-Long-Version.gif';
//     if (coverEl.classList.contains('play')) {
//         audioEl.play();
//         coverEl.classList.add('play');
//         playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
//     } else {
//         coverEl.classList.remove('play');
//         audioEl.pause();
//         playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
//     }
// });



