import { ACTIONS, AUTHOR_LIST_EMPTY_TXT } from '../../../../../constants';
import { AuthorItemsList } from '../../index';

const CourseAuthors = ({ courseAuthors, onDeleteCourseAuthor }) => {
	const deleteCourseAuthorHandler = (author) => onDeleteCourseAuthor(author);

	return (
		<div>
			<h2>Course authors</h2>
			{!courseAuthors.length && <p>{AUTHOR_LIST_EMPTY_TXT}</p>}
			<AuthorItemsList
				authors={courseAuthors}
				handler={deleteCourseAuthorHandler}
				action={ACTIONS.DELETE}
			/>
		</div>
	);
};

export default CourseAuthors;
