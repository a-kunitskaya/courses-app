import { Button } from '../../../../common';
import { Card } from 'react-bootstrap';

const AuthorItem = ({ name, actionLabel, onClick }) => (
	<div className='d-flex justify-content-between'>
		<Card.Text>{name}</Card.Text>
		<Button text={actionLabel} onClick={onClick} />
	</div>
);

export default AuthorItem;
