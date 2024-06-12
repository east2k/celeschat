import Link from "next/link";

const AuthSwitchPages = ({ itemLabel, itemText }) => {
    return (
        <p className="flex flex-row items-center justify-center mt-5 mb-5">
            {itemLabel}
            <Link
                href={itemText === "Login" ? "/login" : "/register"}
                className="ml-2 text-emerald-950 cursor-pointer font-semibold"
            >
                {itemText}
            </Link>
        </p>
    );
};

export default AuthSwitchPages;
