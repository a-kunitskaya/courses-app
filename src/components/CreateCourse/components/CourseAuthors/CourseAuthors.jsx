import { ACTIONS, AUTHOR_LIST_EMPTY_TXT } from '../../../../constants';
import { AuthorItem } from '../index';

const CourseAuthors = ({ courseAuthors, onDeleteCourseAuthor }) => {
	const deleteCourseAuthorHandler = (author) => onDeleteCourseAuthor(author);

	return (
		<div>
			<h2>Course authors</h2>
			{!courseAuthors.length && <p>{AUTHOR_LIST_EMPTY_TXT}</p>}
			<ul>
				{courseAuthors.map((author) => (
					<li key={author.id}>
						<AuthorItem
							name={author.name}
							action={ACTIONS.DELETE}
							onClick={() => deleteCourseAuthorHandler(author)}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CourseAuthors;
