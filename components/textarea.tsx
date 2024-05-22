import InputField from './input-field';

const TextArea = () => {
  return (
    <InputField labelText="Description">
      <textarea
        className="input"
        placeholder="e.g. It's always good to take a break. This 15 minutes break will recharge the batteries a little."
      />
    </InputField>
  );
};

export default TextArea;
