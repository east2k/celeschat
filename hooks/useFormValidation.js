import { useRouter } from "next/navigation";
import { useState } from "react";
import useHandleAuth from "./useHandleAuth";

const validateLoginForm = (formValues) => {
    const errors = {};
    if (!formValues.email.trim()) {
        errors.email = "Email should not be empty.";
    }

    if (!formValues.password.trim()) {
        errors.password = "Password should not be empty.";
    } else if (formValues.password.length < 6) {
        errors.password = "Password should not be less than 6.";
    }

    return { errors };
};

const validateSignupForm = (formValues) => {
    const errors = {};
    if (!formValues.displayName.trim()) {
        errors.displayName = "Display name should not be empty";
    } else if (formValues.displayName.length > 15) {
        errors.displayName = "Display name should not exceed 15 characters.";
    }

    if (!formValues.email.trim()) {
        errors.email = "Email should not be empty";
    }

    if (!formValues.password.trim()) {
        errors.password = "Password should not be empty.";
    } else if (formValues.password.length < 6) {
        errors.password = "Password should not be less than 6.";
    }

    if (!formValues.confirmPassword.trim()) {
        errors.confirmPassword = "This field should not be empty.";
    } else if (formValues.confirmPassword.length < 6) {
        errors.confirmPassword = "This field should not be less than 6.";
    }

    if (formValues.password !== formValues.confirmPassword) {
        errors.confirmPassword = "Password do not match.";
    }

    return { errors };
};

const useFormValidation = (initialValues, currentAuthState) => {
    const router = useRouter();
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const { handleLoginUser, handleSignupUser } = useHandleAuth();

    const handleInsertValues = (event) => {
        const { name, value } = event.target;
        setValues((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentAuthState === "login") {
            const { errors } = validateLoginForm(values);
            if (Object.keys(errors).length === 0) {
                const result = await handleLoginUser(values);
                console.log(result);
            }
            setErrors(errors);
        } else {
            console.log("wtf");
            const { errors } = validateSignupForm(values);
            if (Object.keys(errors).length === 0) {
                const result = await handleSignupUser(values);
                console.log(result);
            }
            setErrors(errors);
        }
    };

    return { values, errors, handleInsertValues, handleSubmit };
};

export default useFormValidation;
