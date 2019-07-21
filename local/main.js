document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').onclick = drunkify;
});

blur = 0;

function drunkify() {
    audio = document.querySelector('audio');
    background = document.querySelector('body');
    audio.playbackRate -= .075;
    blur += .2;
    background.style.filter = `blur(${blur}px)`;
} 