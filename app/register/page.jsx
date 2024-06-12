import readUserSession from "@/auth-actions/readUserSession";
import AuthPage from "@/components/AuthPage/AuthPage";
import { redirect } from "next/navigation";

const Register = async () => {
    const { data } = await readUserSession();
    if (data.user) {
        redirect("/");
    }
    return <AuthPage currentAuthState="register" />;
};

export default Register;
