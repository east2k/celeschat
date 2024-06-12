const AuthButton = ({ buttonText }) => {
    return (
        <button
            type="submit"
            className="text-white rounded-sm bg-emerald-950 w-full px-5 py-1 mt-3"
        >
            {buttonText}
        </button>
    );
};

export default AuthButton;
