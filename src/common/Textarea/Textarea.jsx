const Textarea = ({ labelText, placeholderText, onChange, minlength }) => (
	<form>
		<label>
			{labelText}
			<textarea
				minLength={minlength}
				placeholder={placeholderText}
				onChange={onChange}
			/>
		</label>
	</form>
);

export default Textarea;
