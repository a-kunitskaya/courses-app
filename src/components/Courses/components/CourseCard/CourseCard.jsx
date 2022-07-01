import { Button } from '../../../../common';

import { LOCALES, SHOW_COURSE_BTN_TXT } from '../../../../constants';

import {
	getCourseDuration,
	formatCreationDate,
	getCourseAuthor,
} from '../../../../helpers';

const CourseCard = ({ course, authors }) => {
	const { title, description, duration, creationDate } = course;

	const authorsFormatted = getCourseAuthor({ course, authors }).join(', ');
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
};
export default CourseCard;
