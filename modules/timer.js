import { settingsModule } from './settings.js'

const timerModule = (function () {
	let pomodoroDuration = settingsModule.getPomodoroDuration()
	let shortBreakDuration = settingsModule.getShortBreakDuration()
	let longBreakDuration = settingsModule.getLongBreakDuration()

	let timer
	let seconds
	let totalSeconds = 0
	let stopTime
	const timeElement = document.querySelector('.time__timer')

	let shortBreaksAmount = 0

	function startTimer(secondsParam) {
		totalSeconds = secondsParam
		seconds = secondsParam
		timer = setInterval(updateTimer, 10)
	}

	function stopTimer() {
		stopTime = totalSeconds
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

	function resetTimerDisplay(seconds) {
		timeElement.textContent = seconds / 60 + ':00'
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

	function getStopTime() {
		return stopTime
	}

	return {
		startTimer,
		stopTimer,
		resetTimerDisplay,
		getStopTime,
	}
})()

export { timerModule }
