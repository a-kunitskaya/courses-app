import { AuthorItemsList } from '../../index';

import { ACTIONS } from '../../../../../constants';

const AvailableAuthors = ({ availableAuthors, onAddCourseAuthor }) => (
	<>
		<h2>Authors</h2>
		<AuthorItemsList
			authors={availableAuthors}
			handler={onAddCourseAuthor}
			action={ACTIONS.ADD}
		/>
	</>
);

export default AvailableAuthors;
