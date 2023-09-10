const soundKeyArray = document.querySelectorAll(".tecla");
const sound = document.querySelector("#som_tecla_pom");

const playSound = (soundElementById) => {
  soundElementById.play();
};

soundKeyArray?.forEach(
  (soundKey) =>
    (soundKey.onclick = function () {
      const soundElementById = document.querySelector(
        `#som_${soundKey?.classList[1]}`
      );
      playSound(soundElementById);
    })
);
