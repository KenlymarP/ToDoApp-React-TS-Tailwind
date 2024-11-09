import iconCross from "../assets/icon-cross.svg";
import { useState } from "react";
import { TaskCompleted } from "../interfaces/TaskInterfaces";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
type Props = {
  id: number;
  name: string;
  completed: boolean;
  handleRemoveTasks: (id: number) => void;
  handleCompletedTasks: ({ id, completed }: TaskCompleted) => void;
};
const Tasks: React.FC<Props> = ({
  id,
  name,
  completed,
  handleCompletedTasks,
  handleRemoveTasks,
}) => {
  const [showBorder, setShowBorder] = useState(false);
  const hoverEnter = () => {
    setShowBorder(true);
  };
  const hoverLeave = () => {
    setShowBorder(false);
  };
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <>
      <li
        ref={setNodeRef}
        style={style}
        className="flex py-4 hover:cursor-pointer border-b border-solid border-[var(--very-light-midnight-blue)] dark:text-[var(--light-mode-very-dark-grayish-blue)]"
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}
      >
        <label
          htmlFor=""
          className="relative inline-flex items-center cursor-pointer flex-none"
        >
          <input
            type="checkbox"
            className="ml-3 appearance-none"
            checked={completed}
            onChange={(e) =>
              handleCompletedTasks({ id, completed: e.target.checked })
            }
          />
          <div className={`${showBorder ? "gradient-border-wrapper" : ""}`}>
            <div className={`${showBorder ? "gradient-border" : ""}`}></div>
          </div>
        </label>

        <div {...attributes} {...listeners} className="flex-1">
          <span
            className={`${
              completed ? "line-through text-[var(--dark-grayish-blue)]" : ""
            }`}
          >
            {name}
          </span>
        </div>

        <button className="flex-none w-14 pr-5 pl-5 cursor-pointer transition-all duration-300 ease-in">
          <img src={iconCross} alt="" onClick={() => handleRemoveTasks(id)} />
        </button>
      </li>
    </>
  );
};
export { Tasks };
