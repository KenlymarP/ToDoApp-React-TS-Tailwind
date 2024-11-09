import { useState, useEffect } from "react";
import { initialTasks } from "../data/InitialTasks";
import { InterfacesTask, TaskCompleted } from "../interfaces/TaskInterfaces";
import { arrayMove } from "@dnd-kit/sortable";

const useTasks = () => {
  const [tasks, setTasks] = useState<InterfacesTask[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : initialTasks;
  });

  /* Save tasks to localStorage whenever tasks change */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTasks = (inputValue: string): void => {
    const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 1;
    const newTask = {
      id: lastId + 1,
      name: inputValue,
      completed: false,
    };
    const newTasks = [...tasks];
    newTasks.push(newTask);
    setTasks(newTasks);
  };

  const handleRemoveTasks = (id: number): void => {
    const updateTasks = tasks.filter((task) => task.id !== id);
    setTasks(updateTasks);
  };

  const handleCompletedTasks = ({ id, completed }: TaskCompleted) => {
    const updateTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed,
        };
      }
      return task;
    });
    setTasks(updateTasks);
  };
  const handleClearCompleted = (): void => {
    const updateTasks = tasks.filter((task) => !task.completed);
    setTasks(updateTasks);
  };

  const handleDragEnd = (e: any) => {
    const { active, over } = e;
    setTasks((task) => {
      const oldIndex = task.findIndex((task) => task.id === active.id);
      const newIndex = task.findIndex((task) => task.id === over.id);
      return arrayMove(task, oldIndex, newIndex);
    });
  };

  return {
    tasks,
    setTasks,
    handleRemoveTasks,
    handleCompletedTasks,
    handleClearCompleted,
    addTasks,
    handleDragEnd,
  };
};

export { useTasks };
