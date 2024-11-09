import { useState } from "react";
type Props = {
  addTasks: (inputValue: string) => void;
};
const InputTask: React.FC<Props> = ({ addTasks }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTasks(inputValue);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && e.stopPropagation()) {
      handleSubmit(e);
    }
  };
  return (
    <>
      <form
        className="relative mb-4 h-12 w-full rounded bg-[var(--very-light-gray)] focus-visible:border-transparent"
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          handleKeyPress(e);
        }}
      >
        <span className="absolute w-[26px] h-[28px] left-3 rounded-3xl border border-solid border-[var(--very-light-midnight-blue)] top-3"></span>
        <input
          type="text"
          placeholder="Create new tasks..."
          className="h-full w-full rounded-md  bg-transparent md:text-base px-12"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </>
  );
};
export { InputTask };
