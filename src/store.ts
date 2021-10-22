import { createContext } from 'react';

export interface Task {
  title: string | '';
  description: string | '';
  category: TaskCategory;
}

export enum TaskCategory {
  any = 'GENERAL',
  music = 'MUSIC',
  coding = 'CODING',
}

export const initialState: Task[] = [
  {
    title: 'Make To Do App with React',
    description: 'Make a to do app using React to learn context',
    category: TaskCategory.coding
  },
  {
    title: 'Practice Dom7 Arp',
    description: 'Practice Dominant 7th arppegios for blues soloing on guitar',
    category: TaskCategory.music
  },
  {
    title: 'Sleep',
    description: 'Get a full night of sleep and wake up early',
    category: TaskCategory.any
  }
]

const context = createContext<Task[]>([]);

export default context;

