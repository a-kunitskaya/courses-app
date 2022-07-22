import { AuthorItemsList } from '../../index';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const AvailableAuthors = ({ availableAuthors, onAddCourseAuthor }) => {
	const { t } = useTranslation();
	return (
		<>
			<Card.Text className='h4 fw-bold text-center'>Authors</Card.Text>
			<AuthorItemsList
				authors={availableAuthors}
				handler={onAddCourseAuthor}
				actionLabel={t('createCourse.addAuthorBtn')}
			/>
		</>
	);
};

export default AvailableAuthors;
