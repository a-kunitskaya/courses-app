import { Button } from '../../../../common/Button/Button';
import {
	ACTIONS,
	ADD_AUTHOR_BTN_TXT,
	DELETE_AUTHOR_BTN_TXT,
} from '../../../../constants';

function AuthorItem(props) {
	const { name, action, onClick } = props;

	return (
		<div>
			<h3>{name}</h3>
			{action === ACTIONS.ADD ? (
				<Button text={ADD_AUTHOR_BTN_TXT} onClick={onClick} />
			) : (
				<Button text={DELETE_AUTHOR_BTN_TXT} onClick={onClick} />
			)}
		</div>
	);
}
export default AuthorItem;
