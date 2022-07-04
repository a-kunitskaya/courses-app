import { AuthorItemsList } from '../../index';

import { ACTIONS } from '../../../../../constants';
import { Card } from 'react-bootstrap';

const AvailableAuthors = ({ availableAuthors, onAddCourseAuthor }) => (
	<>
		<Card.Text className='h4 fw-bold text-center'>Authors</Card.Text>
		<AuthorItemsList
			authors={availableAuthors}
			handler={onAddCourseAuthor}
			action={ACTIONS.ADD}
		/>
	</>
);

export default AvailableAuthors;
