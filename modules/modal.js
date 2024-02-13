import { timerModule } from './timer.js'
import { settingsModule } from './settings.js'

const modalMadule = (function () {
	const mainContainerElem = document.querySelector('.container')
	const modalContainerElem = document.querySelector('.modal__container')

	const crossCloseBtn = document.querySelector('.modal_close-button')

	const pomodoroInputElem = document.querySelector('.pomodoro-input')
	const shortBreakInputElem = document.querySelector('.short-break-input')
	const longBreakInputElem = document.querySelector('.long-break-input')

	const resetBtn = document.querySelector('.buttons__reset')
	const closeBtn = document.querySelector('.buttons__close')
	const saveBtn = document.querySelector('.buttons__save')

	function init() {
		crossCloseBtn.addEventListener('click', handleCloseBtn)
		closeBtn.addEventListener('click', handleCloseBtn)
		resetBtn.addEventListener('click', handleResetBtn)
		saveBtn.addEventListener('click', handleSaveBtn)
	}

	function handleCloseBtn() {
		modalContainerElem.classList.toggle('none')
		mainContainerElem.removeAttribute('inert')
	}

	function handleResetBtn() {
		settingsModule.setDurationsToDefault()
		const minutesPomodoro = settingsModule.getPomodoroDuration() / 60
		const minutesShortBreak = settingsModule.getShortBreakDuration() / 60
		const minutesLongBreak = settingsModule.getLongBreakDuration() / 60

		pomodoroInputElem.value = minutesPomodoro
		shortBreakInputElem.value = minutesShortBreak
		longBreakInputElem.value = minutesLongBreak
	}
// Fix this, its not updating unless you change button state
	function handleSaveBtn() {
		const pomodoroSeconds = pomodoroInputElem.value * 60
		const shortBreakSeconds = shortBreakInputElem.value * 60
		const longBreakSeconds = longBreakInputElem.value * 60

		settingsModule.setPomodoroDuration(pomodoroSeconds)
		settingsModule.setShortBreakDuration(shortBreakSeconds)
		settingsModule.setLongBreakDuration(longBreakSeconds)

		handleCloseBtn()
	}

	return {
		init,
	}
})()

export { modalMadule }
