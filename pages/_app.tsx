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

  const provider: AppContextInterface = {
    todo,
    setTodo,
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
