import { getTasks } from "@/api";
import { Task } from "@/interfaces/task";
import { useQuery } from 'react-query';

export const useTask = () =>
  useQuery<Task[]>(
    ['getTasks'],
    getTasks,
  );