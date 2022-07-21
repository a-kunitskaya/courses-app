import { useSelector } from 'react-redux';
import { isAdminUser } from '../../helpers';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '../../routes';

const PrivateRoute = () => {
	const user = useSelector((state) => state.user);
	return isAdminUser(user) ? <Outlet /> : <Navigate to={ROUTES.COURSES} />;
};

export default PrivateRoute;
