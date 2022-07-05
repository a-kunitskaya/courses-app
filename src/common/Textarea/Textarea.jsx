import { Form } from 'react-bootstrap';

const Textarea = ({
	labelText,
	placeholderText,
	onChange,
	minlength,
	rows,
	className,
}) => (
	<Form>
		<Form.Group>
			<Form.Label className='w-100'>
				{labelText}
				<Form.Control
					as='textarea'
					rows={rows}
					minLength={minlength}
					placeholder={placeholderText}
					onChange={onChange}
					className={className}
				/>
			</Form.Label>
		</Form.Group>
	</Form>
);

export default Textarea;
