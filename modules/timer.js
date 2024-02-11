const timerModule = (function () {
	let timer, totalSeconds, stopTime
	const timeElement = document.querySelector('.time__timer')

	let shortBreaksAmount = 0

	function startTimer(seconds) {
		totalSeconds = seconds
		timer = setInterval(updateTimer, 10)
	}

	function stopTimer() {
		stopTime = totalSeconds
		clearInterval(timer)
	}

	function getStopTime() {
		return stopTime
	}

	function updateTimer() {
		if (totalSeconds > 0) {
			totalSeconds -= 1
			const [minutes, seconds] = calcMinsAndSecs(totalSeconds)
			showFormattedTime(minutes, seconds)
		} else {
			stopTimer()
		}
	}

	function resetTimerDisplay(seconds) {
		timeElement.textContent = seconds / 60 + ':00'
	}

	function formatTime(value) {
		return value < 10 ? `0${value}` : value
	}

	function calcMinsAndSecs(seconds) {
		let mins = Math.floor(seconds / 60)
		let secs = seconds % 60
		return [mins, secs]
	}

	function showFormattedTime(mins, secs) {
		const formattedTime = `${formatTime(mins)}:${formatTime(secs)}`
		timeElement.textContent = formattedTime
	}

	return {
		startTimer,
		stopTimer,
		resetTimerDisplay,
		getStopTime,
	}
})()

export { timerModule }
