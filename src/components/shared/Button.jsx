const Button = ({ children, type, isDisabled, version }) => {
    return (
        <button
            type={type}
            className={`btn btn-${version}`}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
};

export default Button;
