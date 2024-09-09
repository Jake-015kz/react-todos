import styles from "./Button.module.css";

const Button = (props) => {
  const { children, onClick, disabled, title } = props;
  return (
    <button
      {...props}
      className={styles.btn}
      onClick={onClick}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
