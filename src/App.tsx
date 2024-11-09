import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { TaskList } from "./components/TaskList";
import { useTasks } from "./hooks/useTasks";
import { useFilters } from "./hooks/useFilters";
import { Footer } from "./components/Footer";
import "./App.css";
import { TaskFilters } from "./components/TaskFilters";

function App() {
  const {
    tasks,
    addTasks,
    handleClearCompleted,
    handleCompletedTasks,
    handleRemoveTasks,
    handleDragEnd,
  } = useTasks();
  const actionTasks = {
    handleClearCompleted,
    handleCompletedTasks,
    handleRemoveTasks,
    handleDragEnd,
  };
  const { filteredTasks, filter, handleChangeFilter } = useFilters(tasks);
  const actionFilters = {
    filter,
    handleChangeFilter,
  };
  return (
    <>
      <div className="px-6 pb-10 md:text-base">
        <div className="mx-auto max-w-[540px]">
          <Header />
          <main className="mb-10">
            <InputTask addTasks={addTasks} />
            <TaskList
              tasks={filteredTasks}
              {...actionTasks}
              {...actionFilters}
            />
          </main>
          <div className="h-12 rounded bg-[var(--very-light-gray)] shadow-xl sm:hidden">
            <TaskFilters {...actionFilters} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
