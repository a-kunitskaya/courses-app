import { LOCALES } from '../../../../constants';

import {
	formatCreationDate,
	getCourseAuthor,
	getCourseDuration,
} from '../../../../helpers';
import { Card, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const CourseCard = ({ course, authors }) => {
	const { title, description, duration, creationDate } = course;
	const { t } = useTranslation();

	const cardItems = [
		{
			label: t('courses.authors'),
			value: getCourseAuthor({ course, authors }).join(', '),
		},
		{
			label: t('courses.duration'),
			value: getCourseDuration(duration),
		},
		{
			label: t('courses.created'),
			value: formatCreationDate(creationDate, LOCALES.pl),
		},
	];
	return (
		<Card border='success' className='my-4'>
			<Card.Body>
				<Row>
					<Col>
						<Card.Title className='display-6 fw-bold'>{title}</Card.Title>
						<Card.Text>{description}</Card.Text>
					</Col>
					<Col>
						{cardItems.map(({ label, value }) => {
							return (
								<Card.Text key={label}>
									<span className='fw-bold'>{label}</span>: {value}
								</Card.Text>
							);
						})}
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default CourseCard;
