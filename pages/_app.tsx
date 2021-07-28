import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { TodoContext } from "../Context";
import { Todo, AppContextInterface } from "../interfaces";

function MyApp({ Component, pageProps }: AppProps) {
  const [todo, setTodo] = React.useState<Todo[]>([
    { text: "LOL", complete: false, id: 0 },
  ]);
  const [id, incrementId] = React.useState<number>(1);

  const addTodo = (data: Todo) => setTodo([...todo, data]);

  const removeTodo = (index: number) => {
    let ini = [...todo];
    ini = ini.filter((data) => data.id !== index);
    setTodo(ini);
  };

  const changeStatus = (index: number) => {
    let ini = [...todo];
    ini.some((data, idx) => {
      if (data.id === index) {
        ini[idx].complete = !ini[idx].complete;
        return true;
      }
      return false;
    });
    setTodo(ini);
  };

  const provider: AppContextInterface = {
    todo,
    addTodo,
    removeTodo,
    changeStatus,
    id,
    incrementId,
  };
  return (
    <TodoContext.Provider value={provider}>
      <Component {...pageProps} />
    </TodoContext.Provider>
  );
}
export default MyApp;
