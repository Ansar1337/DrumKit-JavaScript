'use strict'

function playSound(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if (!audio) return; //stops the function
    audio.currentTime = 0; //rewinds to the start
    audio.play();
    key.classList.add('playing');
    console.log(audio);
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform property
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);