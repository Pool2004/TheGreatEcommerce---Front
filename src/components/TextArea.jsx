import React from "react";

const TextArea = ({
  label,
  placeholder,
  name,
  value,
  isRequired,
  onChange,
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          id={name}
          name={name}
          rows="3"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required={isRequired ? true : false}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        ></textarea>
      </div>
    </>
  );
};

export default TextArea;
