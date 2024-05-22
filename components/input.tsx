import InputField from './input-field';

const Input = () => {
  return (
    <InputField labelText="Title">
      <input className="input" placeholder="e.g. Take coffee break" />
    </InputField>
  );
};

export default Input;
