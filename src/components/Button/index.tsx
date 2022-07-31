import { CSSProperties, PropsWithChildren } from "react";

interface IProp {
  color: any;
  disabled?: boolean;
  className?: string;
  styles?: CSSProperties;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}
const Button = (props: PropsWithChildren<IProp>) => {
  const {
    onClick,
    color,
    disabled = false,
    children,
    className,
    styles,
    type,
  } = props;

  const PRIMARY_COLOR = "#0070f3";

  const DISABLED_COLOR = "#666666";

  const ERROR_COLOR = "#d66565";

  let baseClassNames = "";

  let baseStyles = { backgroundColor: "", color: "" };

  if (disabled) {
    baseStyles.backgroundColor = DISABLED_COLOR;
    baseStyles.backgroundColor = "#999999";
  } else if (color === "primary") {
    baseStyles.backgroundColor = PRIMARY_COLOR;
  } else if (color === "error") {
    baseStyles.backgroundColor = ERROR_COLOR;
  }

  return (
    <button
      onClick={onClick}
      type={type}
      style={styles ? { ...styles, ...baseStyles } : baseStyles}
      className={className ? baseClassNames + " " + className : baseClassNames}
      color={color}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
