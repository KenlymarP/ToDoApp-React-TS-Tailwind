import { Filters } from "../types/typeFilters";
type Props = {
  filter: Filters;
  handleChangeFilter: (selectedFilter: Filters) => void;
};
const TaskFilters: React.FC<Props> = ({ filter, handleChangeFilter }) => {
  return (
    <>
      <div className="flex h-full justify-center items-center gap-5 text-[var(--medium-dark-grayish-blue)] font-bold">
        <button
          onClick={() => handleChangeFilter("all")}
          className={`${
            filter === "all" ? "text-[var(--bright-blue)]" : ""
          } hover:text-[var(--light-mode-very-dark-grayish-blue)]`}
        >
          {" "}
          All
        </button>
        <button
          onClick={() => handleChangeFilter("active")}
          className={`${
            filter === "active" ? "text-[var(--bright-blue)]" : ""
          } hover:text-[var(--light-mode-very-dark-grayish-blue)]`}
        >
          Active
        </button>
        <button
          onClick={() => handleChangeFilter("completed")}
          className={`${
            filter === "completed" ? "text-[var(--bright-blue)]" : ""
          } hover:text-[var(--light-mode-very-dark-grayish-blue)]`}
        >
          Completed
        </button>
      </div>
    </>
  );
};
export { TaskFilters };
