"use client";

import useFormValidation from "@/hooks/useFormValidation";

import AuthInputFields from "./AuthInputFields";
import AuthSwitchPages from "./AuthSwitchPages";
import AuthButton from "./AuthButton";

const AuthPage = ({ currentAuthState }) => {
    const { values, errors, handleInsertValues, handleSubmit } =
        useFormValidation(
            {
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            },
            currentAuthState
        );

    return (
        <div className="flex w-screen h-screen bg-ocean-950 ">
            <div className="m-auto w-1/3 font-secondary">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white px-10 py-7 rounded-lg"
                >
                    <h1 className="text-3xl text-center font-semibold mb-5">
                        {currentAuthState === "login" ? "Login" : "Sign Up"}
                    </h1>
                    {errors.formError && (
                        <div className="text-sm text-red-400">
                            {errors.formError}
                        </div>
                    )}
                    {currentAuthState === "register" && (
                        <AuthInputFields
                            name="displayName"
                            error={errors.displayName}
                            formValue={values.displayName}
                            inputLabel="Diplay Name"
                            inputType="displayName"
                            inputPlaceholder="Enter here..."
                            handleInsertValues={handleInsertValues}
                        />
                    )}
                    <AuthInputFields
                        name="email"
                        error={errors.email}
                        formValue={values.email}
                        inputLabel="Email"
                        inputType="email"
                        inputPlaceholder="Enter here..."
                        handleInsertValues={handleInsertValues}
                    />
                    <AuthInputFields
                        name="password"
                        error={errors.password}
                        formValue={values.password}
                        inputLabel="Password"
                        inputType="password"
                        inputPlaceholder="Enter at least 6 characters..."
                        handleInsertValues={handleInsertValues}
                    />
                    {currentAuthState === "register" && (
                        <AuthInputFields
                            name="confirmPassword"
                            error={errors.confirmPassword}
                            formValue={values?.confirmPassword}
                            inputLabel="Confirm Password"
                            inputType="password"
                            inputPlaceholder="Confirm your password..."
                            handleInsertValues={handleInsertValues}
                        />
                    )}
                    {currentAuthState === "login" ? (
                        <>
                            <AuthButton buttonText="Login" />
                            <AuthSwitchPages
                                itemLabel="Do not have an account?"
                                itemText="Sign Up"
                            />
                        </>
                    ) : (
                        <>
                            <AuthButton buttonText="Sign Up" />
                            <AuthSwitchPages
                                itemLabel="Already have an Account?"
                                itemText="Login"
                            />
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AuthPage;
