import { settingsModule } from './settings.js'
import { timerModule } from './timer.js'

const buttonsModule = (function () {
	const pomodoroBtn = document.querySelector('.pomodoro-buttons__pomodoro')
	const shortBreakBtn = document.querySelector('.pomodoro-buttons__short-break')
	const longBreakBtn = document.querySelector('.pomodoro-buttons__long-break')

	const startBtn = document.querySelector('.clock-actions__start')
	const refreshBtn = document.querySelector('.clock-actions__refresh')
	const settingsBtn = document.querySelector('.clock-actions__settings')

	const timeElement = document.querySelector('time__timer')

	let timeForReset
	let previousFocused = null
	let seconds = 1800
	let isRunning

	function init() {
		pomodoroBtn.addEventListener('click', handlePomodoroClick)
		pomodoroBtn.click()
		shortBreakBtn.addEventListener('click', handleShortBreakClick)
		longBreakBtn.addEventListener('click', handleLongBreakClick)
		startBtn.addEventListener('click', handleStartClick)
		refreshBtn.addEventListener('click', handleResetClick)
		settingsBtn.addEventListener('click', handleSettingsClick)
	}

	function handlePomodoroClick() {
		if (previousFocused != this) {
			let pomodoroDuration = settingsModule.getPomodoroDuration()
			changeStyle(previousFocused)
			previousFocused = this
			timerModule.stopTimer()
			timerModule.resetTimerDisplay(pomodoroDuration)
			changeStyle(pomodoroBtn)
			seconds = pomodoroDuration // minutes использовать в кнопке старт
			refreshStart()
			timeForReset = pomodoroDuration
		}
	}

	function handleShortBreakClick() {
		if (previousFocused != this) {
			let shortBreakDuration = settingsModule.getShortBreakDuration()
			changeStyle(previousFocused)
			previousFocused = this
			timerModule.stopTimer()
			timerModule.resetTimerDisplay(shortBreakDuration)
			changeStyle(shortBreakBtn)
			seconds = shortBreakDuration
			refreshStart()
			timeForReset = shortBreakDuration
		}
	}

	function handleLongBreakClick() {
		if (previousFocused != this) {
			let longBreakDuration = settingsModule.getLongBreakDuration()
			changeStyle(previousFocused)
			previousFocused = this
			timerModule.stopTimer()
			timerModule.resetTimerDisplay(longBreakDuration)
			changeStyle(longBreakBtn)
			seconds = longBreakDuration
			refreshStart()
			timeForReset = longBreakDuration
		}
	}

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
		refreshStart()
		timerModule.stopTimer()
		timerModule.resetTimerDisplay(timeForReset)
	}

	function handleSettingsClick() {
		// Реализуй функцию для обработки события при нажатии на кнопку "Настройки"
	}

	function changeStyle(btn) {
		if (btn != null) {
			btn.classList.toggle('clicked')
		}
	}

	function changeStyleBack(btn) {
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

	function refreshStart() {
		isRunning = false
		startBtn.textContent = 'start'
	}

	return {
		init,
	}
})()

export { buttonsModule }
