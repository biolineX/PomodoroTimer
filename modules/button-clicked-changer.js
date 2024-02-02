import { startClicked } from "./listeners";


const highlightButton = (button) => {
  if(!highlighted) {
    button.classList.add('clicked')
    highlighted = true;
  }
}


const setPauseText = (button) => {
  button.textContent = 'pause';
  startClicked = true;
}

const setStartText = (button) => {
  button.textContent = 'start';
  startClicked = false;
}

export {setPauseText, setStartText}

