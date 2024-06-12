const AuthInputFields = ({
    name,
    error,
    formValue,
    inputLabel,
    inputType,
    inputPlaceholder,
    handleInsertValues,
}) => {
    return (
        <div className="flex flex-col mb-3">
            <label className="text-xl font-medium">{inputLabel}</label>
            <input
                name={name}
                value={formValue}
                type={inputType}
                className="outline-none px-2 py-1 border border-slate-500 rounded-sm"
                placeholder={inputPlaceholder}
                onChange={handleInsertValues}
            />
            {error && <div className="text-sm text-red-400">{error}</div>}
        </div>
    );
};

export default AuthInputFields;
