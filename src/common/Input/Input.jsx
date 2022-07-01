const Input = ({
	labelText,
	placeholderText,
	onChange,
	minLength,
	type = 'text',
	min,
	value,
}) => (
	<form>
		<label>
			{labelText}
			<input
				type={type}
				name='name'
				placeholder={placeholderText}
				onChange={onChange}
				minLength={minLength}
				min={min}
				value={value}
			/>
		</label>
	</form>
);

export default Input;
