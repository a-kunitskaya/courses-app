import { Logo } from './components';
import { Button, User } from '../../common';

import { LOGOUT_BTN_TXT } from '../../constants';
import { Container, Navbar } from 'react-bootstrap';

function Header() {
	return (
		<Navbar>
			<Container className='border border-danger'>
				<Navbar.Brand>
					<Logo />
				</Navbar.Brand>
				<Navbar.Text>
					<User />
				</Navbar.Text>
				<Button text={LOGOUT_BTN_TXT} />
			</Container>
		</Navbar>
	);
}

export default Header;
