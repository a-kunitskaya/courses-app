import { AuthorItemsList } from '../../index';

import { ADD_AUTHOR_BTN_TXT } from '../../../../../constants';
import { Card } from 'react-bootstrap';

const AvailableAuthors = ({ availableAuthors, onAddCourseAuthor }) => (
	<>
		<Card.Text className='h4 fw-bold text-center'>Authors</Card.Text>
		<AuthorItemsList
			authors={availableAuthors}
			handler={onAddCourseAuthor}
			actionLabel={ADD_AUTHOR_BTN_TXT}
		/>
	</>
);

export default AvailableAuthors;
