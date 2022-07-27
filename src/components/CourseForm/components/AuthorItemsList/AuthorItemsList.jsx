import { AuthorItem } from '../index';
import { ListGroup } from 'react-bootstrap';

const AuthorItemsList = ({ authors, handler, actionLabel }) => (
	<ListGroup variant='flush'>
		{authors.map((author) => (
			<ListGroup.Item key={author.id}>
				<AuthorItem
					name={author.name}
					actionLabel={actionLabel}
					onClick={() => handler(author)}
				/>
			</ListGroup.Item>
		))}
	</ListGroup>
);

export default AuthorItemsList;
