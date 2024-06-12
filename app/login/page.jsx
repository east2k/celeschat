import readUserSession from "@/auth-actions/readUserSession";
import AuthPage from "@/components/AuthPage/AuthPage";
import { redirect } from "next/navigation";

const Login = async () => {
    const { data } = await readUserSession();
    if (data.user) {
        redirect("/");
    }
    return <AuthPage currentAuthState="login" />;
};

export default Login;
