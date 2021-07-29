import React from "react";

export interface Todo {
  text: string;
  complete: boolean;
  id: number;
}

export interface AppContextInterface {
  todo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  id: number;
  incrementId: React.Dispatch<React.SetStateAction<number>>;
}
