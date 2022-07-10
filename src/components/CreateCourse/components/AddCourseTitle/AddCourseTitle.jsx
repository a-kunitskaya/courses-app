import { Button, Input } from '../../../../common';

import { Col, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const AddCourseTitle = ({ onAddTitle, onCreateCourse }) => {
	const { t } = useTranslation();
	const addTitleHandler = (event) => onAddTitle(event.target.value);

	return (
		<Form className='d-inline-flex'>
			<Col md='auto'>
				<Form.Group>
					<Input
						labelText={t('createCourse.inputTitle.name')}
						placeholderText={t('createCourse.inputTitle.placeholder')}
						className='border border-dark'
						onChange={addTitleHandler}
					/>
				</Form.Group>
			</Col>
			<Col />
			<Col md='auto'>
				<Button
					text={t('createCourse.createCourseBtn')}
					onClick={onCreateCourse}
				/>
			</Col>
		</Form>
	);
};

export default AddCourseTitle;
