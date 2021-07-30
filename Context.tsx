import { createContext } from "react";
import { Todo } from "./interfaces";

export const TodoContext = createContext<Todo[] | null>(null);
