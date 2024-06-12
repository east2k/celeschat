import { loginUser } from "@/auth-actions/loginUser";
import { registerUser } from "@/auth-actions/registerUser";
import { signoutUser } from "@/auth-actions/signoutUser";

const useHandleAuth = () => {
    const handleLoginUser = async (values) => {
        const result = await loginUser(values);
        const { error } = JSON.parse(result);
        return error;
    };

    const handleSignupUser = async (values) => {
        const result = await registerUser(values);
        const { data, error } = JSON.parse(result);
        console.log(data);
        return error;
    };

    const handleSignout = async () => {
        const result = await signoutUser();
        const { error } = JSON.parse(result);
        return error;
    };

    return { handleLoginUser, handleSignupUser, handleSignout };
};

export default useHandleAuth;
