export interface InterfacesTask {
  id: number;
  name: string;
  completed: boolean;
  /*   
  
  handleClearCompleted?: () => void; */
}
export type TaskCompleted = Pick<InterfacesTask, "id" | "completed">;
