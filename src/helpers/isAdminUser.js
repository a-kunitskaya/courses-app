import { ROLES } from '../constants';

const isAdminUser = (user) => user.role === ROLES.ADMIN;

export default isAdminUser;
