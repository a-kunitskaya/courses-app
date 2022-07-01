import { ACTIONS } from '../../../../constants';
import { AuthorItem } from '../index';

const AvailableAuthors = ({ availableAuthors, onAddCourseAuthor }) => {
	const addCourseAuthorHandler = (author) => onAddCourseAuthor(author);

	return (
		<>
			<h2>Authors</h2>
			<ul>
				{availableAuthors.map((author) => (
					<li key={author.id}>
						<AuthorItem
							name={author.name}
							action={ACTIONS.ADD}
							onClick={() => addCourseAuthorHandler(author)}
						/>
					</li>
				))}
			</ul>
		</>
	);
};

export default AvailableAuthors;
