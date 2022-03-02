export interface Task {
  id: number;
  title: string;
  description: string;
  category: TaskCategory;
  completed: boolean;
}

export enum TaskCategory {
  any = "GENERAL",
  music = "MUSIC",
  coding = "CODING",
}

export const initialState: Task[] = [
  {
    id: 1,
    title: "Make To Do App with React",
    description: "Make a to do app using React to learn context",
    category: TaskCategory.coding,
    completed: false,
  },
  {
    id: 2,
    title: "Practice Dom7 Arp",
    description: "Practice Dominant 7th arppegios for blues soloing on guitar",
    category: TaskCategory.music,
    completed: false,
  },
  {
    id: 3,
    title: "Sleep",
    description: "Get a full night of sleep and wake up early",
    category: TaskCategory.any,
    completed: false,
  },
];
