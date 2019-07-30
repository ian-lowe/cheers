document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button").onclick = drunkify;
});

let blur = 0;
const clink = new Audio("/static/clink.wav");
const audio = document.querySelector("audio");
const background = document.querySelector("body");
const slider = document.getElementById("myRange");

function drunkify() {
    let input_val = document.querySelector("input[name=drink]:checked").value;
    if (slider.value < 20) {
        if (input_val === "beer" || input_val === "wine") {
            audio.playbackRate -= 0.02;
            blur += 0.1;
            slider.value = parseInt(slider.value) + 1;
        } else {
            audio.playbackRate -= 0.05;
            blur += 0.2;
            slider.value = parseInt(slider.value) + 2;
        }
        background.style.filter = `blur(${blur}px)`;
        clink.play();
    }
}
