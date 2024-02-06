const settingsModule = (function () {
	let pomodoroDuration = 1800
	let shortBreakDuration = 300
	let longBreakDuration = 600

	function getPomodoroDuration() {
		return pomodoroDuration
	}

	function setPomodoroDuration(minutes) {
		pomodoroDuration = minutes
	}

	function getShortBreakDuration() {
		return shortBreakDuration
	}

	function setShortBreakDuration(minutes) {
		shortBreakDuration = minutes
	}

	function getLongBreakDuration() {
		return longBreakDuration
	}

	function setLongBreakDuration(minutes) {
		longBreakDuration = minutes
	}


	return {
		getPomodoroDuration,
		setPomodoroDuration,
		getShortBreakDuration,
		setShortBreakDuration,
		getLongBreakDuration,
		setLongBreakDuration,
	}
})()

export { settingsModule }
