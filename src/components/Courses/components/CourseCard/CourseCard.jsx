import { Button } from '../../../../common';

import { LOCALES, SHOW_COURSE_BTN_TXT } from '../../../../constants';

import {
	getCourseDuration,
	formatCreationDate,
	getCourseAuthor,
} from '../../../../helpers';
import { Card, Col, Row } from 'react-bootstrap';

const CourseCard = ({ course, authors }) => {
	const { title, description, duration, creationDate } = course;

	const authorsFormatted = getCourseAuthor({ course, authors }).join(', ');
	const durationFormatted = getCourseDuration(duration);
	const creationDateFormatted = formatCreationDate(creationDate, LOCALES.pl);

	return (
		<Card border='success' className='my-4'>
			<Card.Body>
				<Row>
					<Col>
						<Card.Title className='display-6 fw-bold'>{title}</Card.Title>
						<Card.Text>{description}</Card.Text>
					</Col>
					<Col>
						<Card.Text>
							<span className='fw-bold'>Authors</span>: {authorsFormatted}
						</Card.Text>
						<Card.Text>
							<span className='fw-bold'>Duration</span>: {durationFormatted}
						</Card.Text>
						<Card.Text>
							<span className='fw-bold'>Created</span>: {creationDateFormatted}
						</Card.Text>
						<Button text={SHOW_COURSE_BTN_TXT} />
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};
export default CourseCard;
