import { useState } from 'react';

const useForm = (initialState) => {
    const [formState, setFormState] = useState(initialState);

    const onInputChange = (event) => {
        const { name, value } = event.currentTarget;
        setFormState({
            ...formState,
            [name]: value,
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