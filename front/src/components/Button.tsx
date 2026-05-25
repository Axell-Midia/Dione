import { useState } from "react";

type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
};

export const Button = ({ children }: ButtonProps) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button type="button" className="counter" onClick={handleClick}>
      <span className="count">Count is {count}</span>
      {children}
    </button>
  );
};
