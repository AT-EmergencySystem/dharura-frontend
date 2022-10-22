import { CSSProperties, FC } from "react";
import styles from "./selector.module.sass";

interface Props {
  type?: "radio" | "checkbox";
  options: {
    label?: string;
    value?: any;
    disabled?: boolean;
  }[];
  setSelected: any;
  selected: {
    label?: string;
    value?: any;
    disabled?: boolean;
  }[];
  style?: CSSProperties;
  className?: any;
  onChange?: any;
}

const Selector: FC<Props> = ({
  type = "radio",
  options,
  selected,
  setSelected,
  style,
  className,
  onChange,
}) => {
  return (
    <div className={`${styles.select}`}>
      <ul
        className={`flex-start flex-column gap-m ${className}`}
        style={{
          alignItems: "flex-start",
          ...style,
        }}
      >
        {options?.length > 0 &&
          options.map((option: any) => (
            <Option
              key={option.value}
              type={type}
              option={option}
              selected={selected}
              setSelected={setSelected}
              onChange={onChange}
            />
          ))}
      </ul>
    </div>
  );
};

const Option: FC<{
  type?: "radio" | "checkbox";
  setSelected: any;
  selected: {
    label?: string;
    value?: any;
    disabled?: boolean;
  }[];
  option: {
    label?: string;
    value?: any;
    disabled?: boolean;
  };
  onChange?: any;
}> = ({ type = "radio", selected, setSelected, option, onChange }) => {
  const { value, label } = option;
  const select = () => {
    //   update states
    if (type === "radio") {
      setSelected([option]);
      return;
    }
    if (type === "checkbox") {
      // check if exists
      let findOption = selected?.find((el: any) => el?.value === value);
      if (findOption) {
        // remove from options
        setSelected(selected?.filter((el: any) => el.value !== value));
        return;
      } else {
        // add to options
        setSelected([...selected, option]);
        return;
      }
    }
  };
  return (
    <li
      className={`${styles.disabled} flex-start gap-l cursor-pointer`}
      onClick={() => {
        if (!option?.disabled) {
          onChange && onChange(option);
          select();
        }
      }}
    >
      <span
        title={label}
        className={`${
          type === "radio"
            ? styles.radio
            : type === "checkbox"
            ? styles.checkbox
            : ""
        } ${styles.selector__box} flex-center ${
          selected?.find((el: any) => el?.value === value)
            ? styles.selected
            : ""
        } ${type === "radio" ? "br-700" : type === "checkbox" ? "br-xs" : ""}`}
      />
      {label}
    </li>
  );
};

export default Selector;
