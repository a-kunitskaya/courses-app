import { AuthorItem } from '../index';
import { ListGroup } from 'react-bootstrap';

const AuthorItemsList = ({ authors, handler, action }) => (
	<ListGroup variant='flush'>
		{authors.map((author) => (
			<ListGroup.Item key={author.id}>
				<AuthorItem
					name={author.name}
					action={action}
					onClick={() => handler(author)}
				/>
			</ListGroup.Item>
		))}
	</ListGroup>
);

export default AuthorItemsList;
