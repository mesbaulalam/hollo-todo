import { createContext } from "react";
import { AppContextInterface, Todo } from "./interfaces";

export const TodoContext = createContext<AppContextInterface | null>(null);
