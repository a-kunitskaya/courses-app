import { Logo } from './components';
import { Button, User } from '../../common';

import { LOGOUT_BTN_TXT } from '../../constants';
import { Container, Navbar } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
	const { pathname } = useLocation();
	const genericHeader = pathname === '/login' || pathname === '/registration';
	const username = localStorage.getItem('username');
	const navigate = useNavigate();
	const logoutHandler = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('username');
		navigate('/login');
	};
	return (
		<Navbar>
			<Container className='border border-danger'>
				<Navbar.Brand>
					<Logo />
				</Navbar.Brand>
				{!genericHeader && (
					<>
						<Navbar.Text>
							<User username={username} />
						</Navbar.Text>
						<Button text={LOGOUT_BTN_TXT} onClick={logoutHandler} />
					</>
				)}
			</Container>
		</Navbar>
	);
}

export default Header;
