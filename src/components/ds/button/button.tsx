import styles from "./button.module.css";
import { Loading } from "../../icons/loading";
import cn from "classnames/bind";
import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";
const cx = cn.bind(styles);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: "primary" | "secondary" | "success" | "error";
  size?: "small" | "regular" | "medium" | "large";
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  intent = "primary",
  size = "small",
  icon,
  iconPosition = "left",
  loading,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(cx("button", intent, size), className)}
    >
      {icon && iconPosition === "left" ? (
        <>
          {loading ? <Loading /> : icon}
          <span>{children}</span>
        </>
      ) : (
        <>
          <span>{children}</span>
          {loading ? <Loading /> : icon}
        </>
      )}
    </button>
  );
};

export default Button;