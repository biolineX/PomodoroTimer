import { settingsModule } from './settings.js'
import { timerModule } from './timer.js'

const mainModule = (function () {
	const mainContainer = document.querySelector('.container')
	const modalContainer = document.querySelector('.modal__container')

	const pomodoroBtn = document.querySelector('.pomodoro-buttons__pomodoro')
	const shortBreakBtn = document.querySelector('.pomodoro-buttons__short-break')
	const longBreakBtn = document.querySelector('.pomodoro-buttons__long-break')

	const startBtn = document.querySelector('.clock-actions__start')
	const refreshBtn = document.querySelector('.clock-actions__refresh')
	const settingsBtn = document.querySelector('.clock-actions__settings')

	let timeForReset = settingsModule.getPomodoroDuration()
	let isRunning
	let previousClickedBtn = pomodoroBtn
	let seconds = settingsModule.getPomodoroDuration()

	// Initialization
	function init() {
		pomodoroBtn.addEventListener('click', handlePomodoroClick)
		shortBreakBtn.addEventListener('click', handleShortBreakClick)
		longBreakBtn.addEventListener('click', handleLongBreakClick)
		startBtn.addEventListener('click', handleStartClick)
		refreshBtn.addEventListener('click', handleResetClick)
		settingsBtn.addEventListener('click', handleSettingsClick)
	}

	// Pomodoro buttons handlers
	function handlePomodoroClick() {
		if (previousClickedBtn != this) {
			const pomodoroDuration = settingsModule.getPomodoroDuration()
			changeButtonsStyles(this)
			stopTimeAndResetDisplay(pomodoroDuration)
			setStartToDefault()
			timeForReset = seconds = pomodoroDuration
		}
	}

	function handleShortBreakClick() {
		if (previousClickedBtn != this) {
			const shortBreakDuration = settingsModule.getShortBreakDuration()
			changeButtonsStyles(this)
			stopTimeAndResetDisplay(shortBreakDuration)
			setStartToDefault()
			timeForReset = seconds = shortBreakDuration
		}
	}

	function handleLongBreakClick() {
		if (previousClickedBtn != this) {
			const longBreakDuration = settingsModule.getLongBreakDuration()
			changeButtonsStyles(this)
			stopTimeAndResetDisplay(longBreakDuration)
			setStartToDefault()
			timeForReset = seconds = longBreakDuration
		}
	}

	// Pomodoro actions buttons handlers
	function handleStartClick() {
		changeStartStyle()
		if (!isRunning) {
			isRunning = true
			timerModule.startTimer(seconds)
		} else {
			isRunning = false
			timerModule.stopTimer()
			seconds = timerModule.getStopTime()
		}
	}

	function handleResetClick() {
		setStartToDefault()
		stopTimeAndResetDisplay(timeForReset)
		seconds = timeForReset
	}

	function handleSettingsClick() {
		modalContainer.classList.toggle('none')
		mainContainer.setAttribute('inert', 'inert')
	}

	// Helper functions

	function changeButtonsStyles(btn) {
		changeStyle(previousClickedBtn)
		previousClickedBtn = btn
		changeStyle(btn)
		console.log('style changed')
	}

	function stopTimeAndResetDisplay(seconds) {
		timerModule.stopTimer()
		timerModule.resetTimerDisplay(seconds)
	}

	function changeStyle(btn) {
		if (btn != null) {
			btn.classList.toggle('clicked')
		}
	}

	function changeStartStyle() {
		if (startBtn.textContent == 'start') {
			startBtn.textContent = 'pause'
		} else {
			startBtn.textContent = 'start'
		}
	}

	function setStartToDefault() {
		isRunning = false
		startBtn.textContent = 'start'
	}

	return {
		init,
	}
})()

export { mainModule }
