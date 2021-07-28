import React from "react";

export interface Todo {
  text: string;
  complete: boolean;
  id: number;
}

export interface AppContextInterface {
  todo: Todo[];
  addTodo: (data: Todo) => void;
  removeTodo: (index: number) => void;
  changeStatus: (index: number) => void;
  id: number;
  incrementId: React.Dispatch<React.SetStateAction<number>>;
}
