function getCourseDuration(mins) {
	let h = Math.floor(mins / 60);
	let m = mins % 60;
	const word = h === 1 ? 'hour' : 'hours';
	h = h < 10 ? `0${h}` : h;
	m = m < 10 ? `0${m}` : m;
	return `${h}:${m} ${word}`;
}

export default getCourseDuration;
