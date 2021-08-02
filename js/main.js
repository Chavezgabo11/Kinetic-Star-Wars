(() =>{
  let audioEl = document.querySelector('audio'),
      playButton = document.querySelector('.play_anim');

  function playAudio() {
    document.querySelector("#Text1").classList.add('text-anim');
    document.querySelector("#Text2").classList.add('text-anim');
    document.querySelector("#Text3").classList.add('text-3');
    document.querySelector("#Darth").classList.add('zoom');
    document.querySelector("#Luke").classList.add('Luke-animation');
    document.querySelector("#Hand").classList.add('Hand-animation');
    document.querySelector("#Darth2").classList.add('zoom');
    document.querySelector("#No").classList.add('no');
    document.querySelector("#No2").classList.add('no');
    document.querySelector("#Text4").classList.add('text-4');
    document.querySelector("#Darth3").classList.add('Darth');
    document.querySelector("#Text5").classList.add('text-3');
    document.querySelector("#Text6").classList.add('text-3');
    document.querySelector("#Luke2").classList.add('Darth');

    audioEl.play();
  }

  playButton.addEventListener("click", playAudio);
})();
