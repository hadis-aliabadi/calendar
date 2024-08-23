import create from 'zustand';

interface TaskState {
  tasks: Record<string, string[]>;
  addTask: (date: string, task: string) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: {},
  addTask: (date, task) => set((state) => ({
    tasks: {
      ...state.tasks,
      [date]: [...(state.tasks[date] || []), task],
    },
  })),
}));