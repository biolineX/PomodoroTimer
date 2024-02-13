const settingsModule = (function () {
	let pomodoroDuration = 3000
	let shortBreakDuration = 600
	let longBreakDuration = 1200

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

	// Default Setters

	function setDurationsToDefault() {
		pomodoroDuration = 3000
		shortBreakDuration = 600
		longBreakDuration = 1200
	}
	return {
		getPomodoroDuration,
		setPomodoroDuration,
		getShortBreakDuration,
		setShortBreakDuration,
		getLongBreakDuration,
		setLongBreakDuration,
		setDurationsToDefault,
	}
})()

export { settingsModule }
