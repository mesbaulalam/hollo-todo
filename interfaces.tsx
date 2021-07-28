export interface Todo {
  text: string;
  complete: boolean;
}

export interface AppContextInterface {
  todo: Todo[];
  addTodo: (data: Todo) => void;
  removeTodo: (index: number) => void;
  changeStatus: (index: number) => void;
}
