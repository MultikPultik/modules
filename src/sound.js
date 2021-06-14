import {Howl} from 'howler';



const sound = new Howl({
  src: ['../sound/zvuk11.mp3']
});


export function playSound() {
  sound.play();
}

