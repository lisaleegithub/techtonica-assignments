
const RadioButton = ({ label, value, onChange }) => {
    return (
        <label>
        <input type="radio" checked={value} name="radio" onChange={() => onChange(label)} />
        {label}
        </label>
    );
};
export default RadioButton;