import { Tasks } from "./Tasks";
import { InterfacesTask, TaskCompleted } from "../interfaces/TaskInterfaces";
import { TaskFilters } from "./TaskFilters";
import { Filters } from "../types/typeFilters";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
type Props = {
  tasks: InterfacesTask[];
  handleClearCompleted: () => void;
  handleRemoveTasks: (id: number) => void;
  handleCompletedTasks: ({ id, completed }: TaskCompleted) => void;
  filter: Filters;
  handleChangeFilter: (selectedFilter: Filters) => void;
  handleDragEnd: (e: DragEndEvent) => void;
};
const TaskList: React.FC<Props> = ({
  tasks,
  handleClearCompleted,
  handleCompletedTasks,
  handleRemoveTasks,
  filter,
  handleChangeFilter,
  handleDragEnd,
}) => {
  const actionTasks = { handleCompletedTasks, handleRemoveTasks };
  const actionFilters = { filter, handleChangeFilter };
  return (
    <>
      <section className="relative w-full rounded bg-[var(--very-light-gray)] max-h-[400px] overflow-y-auto overflow-x-hidden">
        {tasks.length > 0 ? (
          <ul>
            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={tasks}
                strategy={verticalListSortingStrategy}
              >
                {tasks.map((task) => (
                  <Tasks
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    completed={task.completed}
                    {...actionTasks}
                  />
                ))}
              </SortableContext>
            </DndContext>
          </ul>
        ) : (
          <p className="text-[var(--medium-dark-grayish-blue)] text-center py-2">
            No items on the list
          </p>
        )}
      </section>
      <div className="flex w-full items-center justify-between px-4 py-4 font-bold bg-[var(--very-light-gray)]">
        <span className="text-[var(--medium-dark-grayish-blue)]">
          {tasks.length} items left
        </span>
        <div className="hidden sm:block">
          <TaskFilters {...actionFilters} />
        </div>
        <button
          className="text-[var(--medium-dark-grayish-blue)] hover:text-[var(--light-mode-very-dark-grayish-blue)]"
          onClick={() => handleClearCompleted()}
        >
          Clear Completed
        </button>
      </div>
    </>
  );
};
export { TaskList };
