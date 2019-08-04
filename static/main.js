document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button").onclick = drink;
});

let blur = 0;
const clink = new Audio("/static/clink.wav");
const audio = document.querySelectorAll("audio");
const background = document.querySelector(".container");
const slider = document.querySelector("#myRange");

function drink() {
    let input_val = document.querySelector("input[name=drink]:checked").value;
    if (slider.value < 20) {
        if (input_val === "beer" || input_val === "wine") {
            for (podcast of audio) {
                podcast.playbackRate -= 0.02;
            }
            blur += 0.1;
            slider.value = parseInt(slider.value) + 1;
        } else if(input_val === "gin" || input_val === "whiskey") {
            for (podcast of audio) {
                podcast.playbackRate -= 0.05;
            }
            blur += 0.2;
            slider.value = parseInt(slider.value) + 2;
        }
        background.style.filter = `blur(${blur}px)`;
        clink.play();
    }
    if (slider.value > 0 && input_val === "water") {
      for (podcast of audio) {
        podcast.playbackRate += 0.02;
      }
      blur -= 0.1;
      slider.value = parseInt(slider.value) - 1;
      background.style.filter = `blur(${blur}px)`;
      clink.play();
    }
}
