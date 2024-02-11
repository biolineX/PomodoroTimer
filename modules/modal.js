import { settingsModule } from './settings.js'

const modalMadule = (function () {
	const modalElem = document.querySelector('.modal')

	const crossCloseBtn = document.querySelector('.modal_close-button')

	const pomodoroInputElem = document.querySelector('.pomodoro-input')
	const shortBreakInputElem = document.querySelector('.short-break-input')
	const longBreakInputElem = document.querySelector('.long-break-input')

	const pomodoroIncrementBtn = document.querySelector('.pomodoro-increment')
	const pomodoroDecrementBtn = document.querySelector('.pomodoro-decrement')

	const shortBreakIncrementBtn = document.querySelector('.short-break-increment')
	const shortBreakDecrementBtn = document.querySelector('.short-break-decrement')

	const longBreakIncrementBtn = document.querySelector('.long-break-increment')
	const longBreakDecrementBtn = document.querySelector('.long-break-decrement')

	const resetBtn = document.querySelector('.buttons__reset')
	const closeBtn = document.querySelector('.buttons__close')
	const saveBtn = document.querySelector('.buttons__save')

	function init() {
		crossCloseBtn.addEventListener('click', handleCloseBtn)
	}

	function handleCloseBtn() {
		modalElem.classList.toggle('none')
	}

	return {
		init,
	}
})()

export { modalMadule }
