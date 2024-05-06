import React from "react";

const Select = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  options,
  isRequired,
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
        <select
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required={isRequired ? true : false}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-full sm:text-sm sm:leading-6"
        >
          <option value={0} disabled>
            Selecciona una opcion
          </option>
          {options?.map((option) => {
            return (
              <option value={option.id} key={name + "_" + option.id}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Select;
