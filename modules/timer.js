import { settingsModule } from './settings.js'

const timerModule = (function () {
	let pomodoroDuration = settingsModule.getPomodoroDuration()
	let shortBreakDuration = settingsModule.getShortBreakDuration()
	let longBreakDuration = settingsModule.getLongBreakDuration()

	let timer
	let seconds
	let totalSeconds = 0
	const timeElement = document.querySelector('.time__timer')

	let shortBreaksAmount = 0

	function startTimer(minutes) {
		totalSeconds = minutes * 60
		seconds = minutes * 60
		timer = setInterval(updateTimer, 1000)
	}

	function stopTimer() {
		clearInterval(timer)
	}

	function updateTimer() {
		if (totalSeconds > 0) {
			totalSeconds -= 1

			const minutes = Math.floor(totalSeconds / 60)
			const seconds = totalSeconds % 60

			const formattedTime = `${formatTime(minutes)}:${formatTime(seconds)}`

			timeElement.textContent = formattedTime
		} else {
			stopTimer()
			if (shortBreaksAmount < 4 && isPomodoro(seconds)) {
				// shortBreakBtn.click()
				// shortBreaksAmount++
			}
		}
	}

	function resetTimerDisplay(minutes) {
		timeElement.textContent = minutes + ':00'
	}

	function formatTime(value) {
		return value < 10 ? `0${value}` : value
	}

	function setShortBreaksAmountToZero() {
		shortBreaksAmount = 0
	}

	function isPomodoro(seconds) {
		if (+seconds == pomodoroDuration) {
			return true
		} else {
			return false
		}
	}

	function isShortBreak(seconds) {
		if (+seconds == shortBreakDuration) {
			return true
		} else {
			return false
		}
	}

	function isLongBreak(seconds) {
		if (+seconds == longBreakDuration) {
			return true
		} else {
			return false
		}
	}

	return {
		startTimer,
		stopTimer,
		resetTimerDisplay,
	}
})()

export { timerModule }
