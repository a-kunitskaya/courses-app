import { ACTIONS, AUTHOR_LIST_EMPTY_TXT } from '../../../../../constants';
import { AuthorItemsList } from '../../index';
import { Card } from 'react-bootstrap';

const CourseAuthors = ({ courseAuthors, onDeleteCourseAuthor }) => {
	const deleteCourseAuthorHandler = (author) => onDeleteCourseAuthor(author);

	return (
		<>
			<Card.Text className='h4 fw-bold text-center'>Course authors</Card.Text>
			{!courseAuthors.length && <Card.Text>{AUTHOR_LIST_EMPTY_TXT}</Card.Text>}
			<Card.Text>
				<AuthorItemsList
					authors={courseAuthors}
					handler={deleteCourseAuthorHandler}
					action={ACTIONS.DELETE}
				/>
			</Card.Text>
		</>
	);
};

export default CourseAuthors;
