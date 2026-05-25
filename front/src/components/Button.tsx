import { useState } from "react";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    onClick?.();
  };

  return (
    <button type="button" className="counter" onClick={handleClick}>
      <span className="count">Count is {count}</span>
      {children}
    </button>
  );
};
