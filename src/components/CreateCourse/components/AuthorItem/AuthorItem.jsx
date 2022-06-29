import { Button } from '../../../../common/Button/Button';
import {
	ACTIONS,
	ADD_AUTHOR_BTN_TXT,
	DELETE_AUTHOR_BTN_TXT,
} from '../../../../constants';

function AuthorItem(props) {
	const { name, action } = props;
	const buttonTxt =
		action === ACTIONS.ADD ? ADD_AUTHOR_BTN_TXT : DELETE_AUTHOR_BTN_TXT;

	return (
		<div>
			<h3>{name}</h3>
			<Button text={buttonTxt} />
		</div>
	);
}
export default AuthorItem;
