import { CSSProperties, FC } from "react";
import rippleEffect from "./ripple-effect";

interface Props {
  label?: any;
  className?: string;
  loading?: boolean;
  onClick?: () => any;
  disabled?: boolean;
  style?: CSSProperties;
  href?: string;
  type?: "button" | "submit" | "reset" | undefined;
  ripple?: boolean;
}

const Button: FC<Props> = ({
  style,
  label,
  className,
  loading,
  onClick,
  disabled,
  type,
  ripple = true,
}) => {
  return (
    <button
      className={`btn text-small-200 body flex-center gap-xs br-s bg-primary-800 ${className} text-neutral-100`}
      onClick={(e) => {
        if (!disabled) {
          onClick && onClick();
          ripple && rippleEffect(e);
        }
      }}
      type={type ?? "submit"}
      disabled={disabled ?? false}
      style={{
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
