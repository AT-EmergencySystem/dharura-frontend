import { FC, useState, ChangeEvent, CSSProperties } from "react";

interface Props {
  label?: string;
  disabled?: boolean;
  autoComplete?: string;
  className?: string;
  style?: CSSProperties;
  error?: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => any;
  type?: string;
  success?: string;
  value: string | number;
  name?: string;
  required?: boolean;
  showLabel?: boolean;
  textarea?: boolean;
  placeholder?: string;
  inputMode?:
    | "search"
    | "text"
    | "none"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | undefined;
}

const Input: FC<Props> = ({
  label,
  disabled,
  autoComplete = "",
  className,
  style,
  success,
  value,
  name,
  error = "",
  onChange,
  type,
  required,
  showLabel = true,
  textarea,
  inputMode,
  placeholder,
}) => {
  const [isFocused, setFocused] = useState<boolean>(!!value);
  const [isPassword, setPassword] = useState<boolean>(!!type);

  return (
    <div
      className="field-group mb-l"
      style={{
        ...style,
      }}
    >
      <div className="input-group p-r">
        {label && showLabel && (
          <label
            className={
              isFocused || value
                ? "focus text-neutral-900 text-small-100 body"
                : "text-neutral-600 body text-small-100"
            }
            htmlFor={name}
          >
            {label}
          </label>
        )}
        {!textarea && (
          <input
            id={name}
            inputMode={inputMode ?? "text"}
            // pattern={pattern ?? ""}
            type={
              type === "password" ? (isPassword ? "password" : "text") : type
            }
            name={name}
            disabled={disabled}
            className={`${error && "error"} ${
              success && "success"
            } p-1 br-xs ${className} `}
            onChange={onChange}
            autoComplete={autoComplete}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            value={value}
            placeholder={placeholder}
            style={{
              paddingRight: type === "password" ? "50px" : "1rem",
            }}
            required={required}
          />
        )}
        {textarea && (
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            className={`${error && "error"} ${
              success && "success"
            } p-1 pb-s br-xs scroll-bar ${className} `}
            onChange={onChange}
            autoComplete={autoComplete}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            value={value}
            style={{
              paddingRight: type === "password" ? "50px" : "1rem",
            }}
            required={required}
          ></textarea>
        )}
        {type === "password" && value && (
          <div className="toggle-password p-a right-0 top-m flex-center">
            <button
              onClick={() => setPassword(!isPassword)}
              type="button"
              className={`${
                isPassword ? "text-neutral-700" : "text-primary-700"
              } flex-center`}
            >
              {isPassword ? "show" : "hide"}
              {/* add eye icon */}
            </button>
          </div>
        )}
      </div>
      {/* {!required } */}
      {error && !required && (
        <small className="text-danger-500 text-small-50">{error}</small>
      )}
      {success && (
        <small className="text-success-500 text-small-50">{success}</small>
      )}
    </div>
  );
};

export default Input;
