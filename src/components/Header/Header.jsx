import { Logo } from './components';
import { Button, User } from '../../common';
import { Container, Navbar } from 'react-bootstrap';
import { Routes, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { logoutAction } from '../../store/user/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../services';

function Header() {
	const { pathname } = useLocation();
	const genericHeader = [Routes.REGISTRATION, Routes.LOGIN].includes(pathname);
	const username = useSelector((state) => state.user.name);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const logoutHandler = () => {
		dispatch(logoutAction());
		const token = localStorage.getItem('token');
		if (token) logout(token).then(() => localStorage.removeItem('token'));

		navigate('/login');
	};

	const { t } = useTranslation();
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
						<Button text={t('header.logoutBtnTxt')} onClick={logoutHandler} />
					</>
				)}
			</Container>
		</Navbar>
	);
}

export default Header;
