function getCourseDuration(mins) {
	const minutes = +mins;
	let h = Math.floor(minutes / 60);
	let m = minutes % 60;
	const word = h === 1 ? 'hour' : 'hours';
	h = h < 10 ? `0${h}` : h;
	m = m < 10 ? `0${m}` : m;
	return `${h}:${m} ${word}`;
}

export default getCourseDuration;
