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

	let previousFocused = null
	let minutes = 30

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

			changeStyleBack(previousFocused)
			previousFocused = this
			timerModule.stopTimer()
			timerModule.resetTimerDisplay(pomodoroDuration)
			changeStyle(pomodoroBtn)
			minutes = pomodoroDuration // minutes использовать в кнопке старт
		}
	}

	function handleShortBreakClick() {
		if (previousFocused != this) {
			let shortBreakDuration = settingsModule.getShortBreakDuration()

			changeStyleBack(previousFocused)
			previousFocused = this
			timerModule.stopTimer()
			timerModule.resetTimerDisplay(shortBreakDuration)
			changeStyle(shortBreakBtn)
			minutes = shortBreakDuration
		}
	}

	function handleLongBreakClick() {
		if (previousFocused != this) {
			let longBreakDuration = settingsModule.getLongBreakDuration()

			changeStyleBack(previousFocused)
			previousFocused = this
			timerModule.stopTimer()
			timerModule.resetTimerDisplay(longBreakDuration)
			changeStyle(longBreakBtn)
			minutes = longBreakDuration
		}
	}

	function handleStartClick() {
		// Реализуй функцию для обработки события при нажатии на кнопку "Старт"
	}

	function handleResetClick() {
		
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

	return {
		init,
	}
})()

export { buttonsModule }
