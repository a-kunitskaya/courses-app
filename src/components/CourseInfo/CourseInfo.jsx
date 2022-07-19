import { Card, Col, Container, Row } from 'react-bootstrap';
import { Header } from '../index';
import { LOCALES } from '../../constants';
import { formatCreationDate, getCourseDuration } from '../../helpers';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const CourseInfo = () => {
	//for some reason 'courses' is empty here. But this same array is not empty in 'Courses.jsx'. Why?
	const courses = useSelector((state) => state.courses);
	const { t } = useTranslation();
	const { courseId } = useParams();
	const course = courses.find(({ id }) => id === courseId);
	if (!course) return null;

	const { id, title, description, duration, authors, creationDate } = course;

	const cardItems = [
		{ label: t('courseInfo.id'), value: id },
		{
			label: t('courseInfo.authors'),
			value: authors.join(', '),
		},
		{
			label: t('courseInfo.duration'),
			value: getCourseDuration(duration),
		},
		{
			label: t('courseInfo.created'),
			value: formatCreationDate(creationDate, LOCALES.pl),
		},
	];
	return (
		<div>
			<Header />
			<Container className='border border-primary p-5'>
				<Link to='/courses' className='text-decoration-none link-dark'>
					{`< ${t('courseInfo.backToCoursesBtn')}`}
				</Link>
				<Row>
					<Col className='text-center'>
						<h1 className='mb-5'>{title}</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<p>{description}</p>
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
			</Container>
		</div>
	);
};

export default CourseInfo;
