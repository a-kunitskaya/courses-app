const getCourseAuthor = ({ course, authors }) =>
	course.authors.map((author) => authors.find(({ id }) => id === author).name);

export default getCourseAuthor;
