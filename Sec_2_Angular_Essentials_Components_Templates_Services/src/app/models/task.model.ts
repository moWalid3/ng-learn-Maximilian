export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface NewTask {
  id: string;
  title: string;
  summary: string;
  dueDate: string;
}
