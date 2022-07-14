const getCourseAuthor = ({ course, authors }) => {
	if (!course.authors.length || !authors.length) return [];
	return course.authors.map((courseAuthor) => {
		const author = authors.find((a) => a.id === courseAuthor);
		return author ? author.name : 'Unknown Author';
	});
};

export default getCourseAuthor;
