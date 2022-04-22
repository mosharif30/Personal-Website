import "./Button.css";
const Button = ({ linkForBtn, children, type = "primary" }) => {
  return (
    <>
      <a href={linkForBtn}>
        <button className={`Button Button--${type}`}>{children}</button>
      </a>
    </>
  );
};

export default Button;
