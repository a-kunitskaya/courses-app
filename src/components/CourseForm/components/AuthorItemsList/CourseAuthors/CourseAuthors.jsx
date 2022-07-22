import { AuthorItemsList } from '../../index';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const CourseAuthors = ({ courseAuthors, onDeleteCourseAuthor }) => {
	const { t } = useTranslation();
	return (
		<>
			<Card.Text className='h4 fw-bold text-center'>
				{t('createCourse.courseAuthors')}
			</Card.Text>
			{!courseAuthors.length && (
				<Card.Text>{t('createCourse.noAuthorsTxt')}</Card.Text>
			)}
			<Card.Text>
				<AuthorItemsList
					authors={courseAuthors}
					handler={onDeleteCourseAuthor}
					actionLabel={t('createCourse.deleteAuthorBtn')}
				/>
			</Card.Text>
		</>
	);
};

export default CourseAuthors;
