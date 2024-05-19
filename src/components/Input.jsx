const Input = ({
  label,
  placeholder,
  name,
  type,
  value,
  onChange,
  isRequired,
  disabled = false,
}) => {
  const styleInput = type === "checkbox" ? " h-7 w-7" : "";
  return (
    <>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={
            "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" +
            styleInput
          }
          required={isRequired ? true : false}
          disabled={disabled ? true : false}
        />
      </div>
    </>
  );
};

export default Input;
