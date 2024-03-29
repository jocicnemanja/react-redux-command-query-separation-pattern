import React from "react";
import "./button.css";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
}) => {
  const mode = primary
    ? "button--primary"
    : "button--secondary";
  return (
    <button
      type="button"
      className={["button", `button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
    >
      {label}
    </button>
  );
};
