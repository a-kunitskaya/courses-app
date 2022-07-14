const getCourseAuthor = ({ course, authors }) => {
	if (!course.authors.length || !authors.length) return [];
	return course.authors.map(
		(courseAuthor) => authors.find(({ id }) => id === courseAuthor).name
	);
};

export default getCourseAuthor;
