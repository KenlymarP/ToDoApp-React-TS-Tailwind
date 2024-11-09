import { useState } from "react";
import { InterfacesTask } from "../interfaces/TaskInterfaces";
import { Filters } from "../types/typeFilters";

const useFilters = (tasks: InterfacesTask[]) => {
  const [filter, setFilter] = useState<Filters>("all");
  const handleChangeFilter = (selectedFilter: Filters): void => {
    setFilter(selectedFilter);
  };
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    } else if (filter === "completed") {
      return task.completed;
    } else {
      return true;
    }
  });
  return {
    filter,
    handleChangeFilter,
    filteredTasks,
  };
};
export { useFilters };
