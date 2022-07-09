import {
	AUTHOR_LIST_EMPTY_TXT,
	COURSE_AUTHORS_TXT,
	DELETE_AUTHOR_BTN_TXT,
} from '../../../../../constants';
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
			{!courseAuthors.length && <Card.Text>{AUTHOR_LIST_EMPTY_TXT}</Card.Text>}
			<Card.Text>
				<AuthorItemsList
					authors={courseAuthors}
					handler={onDeleteCourseAuthor}
					actionLabel={DELETE_AUTHOR_BTN_TXT}
				/>
			</Card.Text>
		</>
	);
};

export default CourseAuthors;
