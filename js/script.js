// fazer com que saiba qnd eu pressionei determinada tecla

document.body.addEventListener("keyup", (event) => {
  playDrum(event.code.toLowerCase());
});

function playDrum(sound) {
  let drumAudio = document.querySelector(`#s_${sound}`);
  let keyPressed = document.querySelector(`div[data-key=${sound}]`);
  if (drumAudio) {
    drumAudio.currentTime = 0;
    drumAudio.play();
  }
  if (keyPressed) {
    keyPressed.style.color = "white";
    keyPressed.style.borderColor = "yellow";
    setTimeout(() => {
      keyPressed.style = "none";
    }, 200);
  }
}

document.querySelector("button").addEventListener("click", () => {
  let input = document.querySelector("input").value;
  let inputArray = input.split("");
  playComposition(inputArray);
});

function playComposition(composition) {
  let waitToPlay = 0;
  for (let compositionLetters of composition) {
    // tudo do array ja ta dentro de composition letters
    // agora preciso fazer com q a cada loop ele pegue uma letra dessas
    setTimeout(() => {
      playDrum(`key${compositionLetters}`);
    }, waitToPlay),
      (waitToPlay += 250);
  }
}
