document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("button").onclick = drunkify;
});

blur = 0;
blackout = 1000;
clink = new Audio("/static/clink.wav");

function drunkify() {
  if (document.getElementById("myRange").value < 10) {
    audio = document.querySelector("audio");
    background = document.querySelector("body");
    audio.playbackRate -= 0.05;
    blur += 0.2;
    background.style.filter = `blur(${blur}px)`;
    clink.play();
    document.getElementById("myRange").value++;
  }
}
