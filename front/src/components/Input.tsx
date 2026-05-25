import { useState } from "react";

type InputProps = {
  placeholder?: string;
};

export const Input = ({ placeholder }: InputProps) => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = e.target.value;
    setValue(t);
    console.log(t);
  };
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};
