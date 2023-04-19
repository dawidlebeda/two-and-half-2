const audio = document.querySelector("#audio");
const audioButton = document.querySelector("#audioButton");

const cards = [
  document.querySelector("#andilci"),
  document.querySelector("#chlastat"),
  document.querySelector("#rozumim"),
  document.querySelector("#hlava"),
  document.querySelector("#pocit"),
  document.querySelector("#tekutiny"),
  document.querySelector("#opera"),
  document.querySelector("#vysavac"),
  document.querySelector("#kondom"),
  document.querySelector("#ukol"),
  document.querySelector("#cigaretka"),
  document.querySelector("#peklo"),
];

const audioUrls = [
  "audio/charlie_andilci.mp3",
  "audio/charlie_chlastat.mp3",
  "audio/charlie_rozumim.mp3",
  "audio/alan_pe.mp3",
  "audio/alan_proktolog.mp3",
  "audio/alan_tekutiny.mp3",
  "audio/berta_opera.mp3",
  "audio/berta_vysavac.mp3",
  "audio/berta_kondom.mp3",
  "audio/jake_ukol.mp3",
  "audio/evelyn_cigaretka.mp3",
  "audio/herb.mp3",
];

// a function that randomly generates audio track from array "audioUrls"

const randomAudio = () => {
  const index = Math.floor(Math.random() * audioUrls.length);
  const audioUrl = audioUrls[index];

  return audioUrl;
};

// a function that runs randomly generated audio track from array "audioUrls"

audioButton.addEventListener("click", () => {
  audio.addEventListener("loadeddata", () => {
    audio.play();
  });

  const catchphrase = randomAudio();
  audio.src = catchphrase;
});

// foreach loop that runs concrete audio track from array "audioUrls"

cards.forEach((audioButon, index) => {
  audioButon.addEventListener("click", () => {
    audio.addEventListener("loadeddata", () => {
      audio.play();
    });
    const catchphrase = audioUrls[index];
    audio.src = catchphrase;
  });
});
