import { Form } from 'react-bootstrap';

const Input = ({
	labelText,
	placeholderText,
	onChange,
	minLength,
	type = 'text',
	min,
	value,
	required = true,
	className,
}) => (
	<>
		<Form.Label>{labelText}</Form.Label>
		<Form.Control
			type={type}
			placeholder={placeholderText}
			onChange={onChange}
			minLength={minLength}
			min={min}
			value={value}
			required={required}
			className={className}
		/>
	</>
);

export default Input;
