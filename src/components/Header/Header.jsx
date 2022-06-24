import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';
import { User } from '../../common/User/User';

import { LOGOUT_BTN_TXT } from '../../constants';

function Header() {
	return (
		<div>
			<Logo />
			<User />
			<Button text={LOGOUT_BTN_TXT} onClick='' />
		</div>
	);
}
export default Header;
