import { Logo } from './components';
import { Button, User } from '../../common';

import { LOGOUT_BTN_TXT } from '../../constants';

function Header() {
	return (
		<div>
			<Logo />
			<User />
			<Button text={LOGOUT_BTN_TXT} />
		</div>
	);
}
export default Header;
