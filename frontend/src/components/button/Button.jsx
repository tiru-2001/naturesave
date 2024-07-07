import "./button.scss";
const Button = ({ bg, color, title, padding }) => {
  return (
    <>
      <button
        className="btn"
        style={{
          background: `var(${bg})`,
          color: `${color}`,
          padding: `${padding}`,
        }}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
