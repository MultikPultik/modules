import './howler.js';



const sound = new Howl({
  src: ['../sound/zvuk11.mp3']
});


export function playSound() {
  sound.play();
}
// var vol = 1.0;

// document.getElementById('start').addEventListener('click', (ev) => {
//   sound.play();
// });

  // sound.rate(vol > .5 ? vol -= 0.5 : vol = .5);
