import { Logo } from './components';
import { Button, User } from '../../common';
import { Container, Navbar } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { logoutAction } from '../../store/user/reducer';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
	const { pathname } = useLocation();
	const genericHeader = pathname === '/login' || pathname === '/registration';
	const username = useSelector((state) => state.user.name);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const logoutHandler = () => {
		dispatch(logoutAction());
		localStorage.removeItem('token');
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
