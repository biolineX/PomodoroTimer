import { settingsModule } from './settings.js'

const modalMadule = (function () {
	const mainContainerElem = document.querySelector('.container')
	const modalContainerElem = document.querySelector('.modal__container')

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
		closeBtn.addEventListener('click', handleCloseBtn)

		pomodoroIncrementBtn.addEventListener('click', handlePomodoroIncrementBtn)
		pomodoroDecrementBtn.addEventListener('click', handlePomodoroDecrementBtn)

		shortBreakIncrementBtn.addEventListener('click', handleShortBreakIncrementBtn)
		shortBreakDecrementBtn.addEventListener('click', handleShortBreakDecrementBtn)

		longBreakIncrementBtn.addEventListener('click', handleLongBreakIncrementBtn)
		longBreakDecrementBtn.addEventListener('click', handleLongBreakDecrementBtn)
	}

	function handleCloseBtn() {
		modalContainerElem.classList.toggle('none')
		mainContainerElem.removeAttribute('inert')
	}

	function handlePomodoroIncrementBtn() {
		pomodoroInputElem.value = +pomodoroInputElem.value + 1
	}

	function handlePomodoroDecrementBtn() {
		pomodoroInputElem.value = +pomodoroInputElem.value - 1
	}

	function handleShortBreakIncrementBtn() {
		shortBreakInputElem.value = +shortBreakInputElem.value + 1
	}

	function handleShortBreakDecrementBtn() {
		shortBreakInputElem.value = shortBreakInputElem.value - 1
	}

	function handleLongBreakIncrementBtn() {
		longBreakInputElem.value = longBreakInputElem.value + 1
	}

	function handleLongBreakDecrementBtn() {
		longBreakInputElem.value = longBreakInputElem.value - 1
	}

	return {
		init,
	}
})()

export { modalMadule }
