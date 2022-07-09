import { useTranslation } from 'react-i18next';

const User = ({ username }) => {
	const { t } = useTranslation();
	return <p>{username || t('user.defaultUsername')}</p>;
};

export default User;
