function formatCreationDate(creationDate, locale) {
	const date = Date.parse(creationDate);
	const options = {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	};
	return new Intl.DateTimeFormat(locale, options).format(date);
}

export default formatCreationDate;
