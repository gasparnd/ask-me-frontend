import { Button as NextUiButton, NormalColors } from "@nextui-org/react";
import { CSSProperties } from "react";
import { PropsWithChildren } from "react";

interface IProp {
  color: NormalColors;
  disabled?: boolean;
  className?: string;
  styles?: CSSProperties;
  type?: "button" | "submit" | "reset" | undefined;
}
const Button = (props: PropsWithChildren<IProp>) => {
  const { color, disabled = false, children, className, styles, type } = props;

  const PRIMARY_COLOR = "#0070f3";

  const DISABLED_COLOR = "#666666";

  let baseClassNames = "";

  let baseStyles = { backgroundColor: "", color: "" };

  if (disabled) {
    baseStyles.backgroundColor = DISABLED_COLOR;
    baseStyles.backgroundColor = "#999999";
  } else if (color === "primary") {
    baseStyles.backgroundColor = PRIMARY_COLOR;
  }

  return (
    <NextUiButton
      type={type}
      style={styles ? { ...styles, ...baseStyles } : baseStyles}
      className={className ? baseClassNames + " " + className : baseClassNames}
      color={color}
      disabled={disabled}
    >
      {children}
    </NextUiButton>
  );
};

export default Button;
