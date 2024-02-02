import { element, time } from './selectors.js'
import { setStartText, setPauseText } from './button-clicked-changer.js'

let highlighted, seconds, intervalId, startClicked

const addPomodoroButtonListener = () => {
	element.pomodoroButton.addEventListener('click', function pomodoroClickHandler() {
		highlightButton(this)
		highlighted = this
	})
}

const addShortBreakButtonListener = () => {}

const addLongBreakButtonListener = () => {}

const addStartButtonListener = () => {
	element.startButton.addEventListener('click', function startClickHandler() {
		if (!startClicked) {
			setPauseText(this)
			let minutes = +time.minutes
			if (seconds == 0 && minutes != 0) {
				seconds = 60
				minutes -= 1

				intervalId = setInterval(function () {
					startClicked = true
				}, 1000)
			}
		} else {
		}
	})
}

const addRefreshButtonListener = () => {}

const addSettingsButtonListener = () => {}

function addEventListeners() {
	addPomodoroButtonListener()
	addShortBreakButtonListener()
	addLongBreakButtonListener()
	addStartButtonListener()
	addRefreshButtonListener()
	addSettingsButtonListener()
}

export { startClicked }
