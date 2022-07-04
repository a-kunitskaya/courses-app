import { Button } from '../../../../common';
import {
	ACTIONS,
	ADD_AUTHOR_BTN_TXT,
	DELETE_AUTHOR_BTN_TXT,
} from '../../../../constants';
import { Card } from 'react-bootstrap';

const AuthorItem = ({ name, action, onClick }) => (
	<div className='d-flex justify-content-between'>
		<Card.Text>{name}</Card.Text>
		{action === ACTIONS.ADD ? (
			<Button text={ADD_AUTHOR_BTN_TXT} onClick={onClick} />
		) : (
			<Button text={DELETE_AUTHOR_BTN_TXT} onClick={onClick} />
		)}
	</div>
);

export default AuthorItem;
