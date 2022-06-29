import { Button } from '../../../../common/Button/Button';
import { LOCALES, SHOW_COURSE_BTN_TXT } from '../../../../constants';
import getCourseDuration from '../../../../helpers/getCourseDuration';
import formatCreationDate from '../../../../helpers/formatCreationDate';
function CourseCard({ course, authorsList }) {
	const { title, description, authors, duration, creationDate } = course;

	const authorsFormatted = authors
		.map((author) => authorsList.find(({ id }) => id === author).name)
		.join(', ');
	const durationFormatted = getCourseDuration(duration);
	const creationDateFormatted = formatCreationDate(creationDate, LOCALES.pl);

	return (
		<div>
			<h2>{title}</h2>
			<p>{description}</p>
			<h3>Authors:</h3>
			<p>{authorsFormatted}</p>
			<h3>Duration:</h3>
			<p>{durationFormatted}</p>
			<h3>Created:</h3>
			<p>{creationDateFormatted}</p>
			<Button text={SHOW_COURSE_BTN_TXT} />
		</div>
	);
}
export default CourseCard;
