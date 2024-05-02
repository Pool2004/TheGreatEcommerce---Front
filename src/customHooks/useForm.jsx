import { useState } from "react";

const useForm = (initialState) => {
  const [formState, setFormState] = useState(initialState);

  const onInputChange = (event, isACheckbox) => {
    const { name, value, checked } = event.currentTarget;
    setFormState({
      ...formState,
      [name]: isACheckbox ? checked : value,
    });
  };

  const onResetForm = () => {
    setFormState(initialState);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};

export default useForm;
