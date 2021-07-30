import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { TodoContext } from "../Context";
import { Todo } from "../interfaces";
import { db } from "../firebase";

function MyApp({ Component, pageProps }: AppProps) {
  const [todo, setTodo] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodo(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              text: doc.data().text,
              completed: doc.data().completed,
            };
          })
        );
      });
  }, []);

  return (
    <TodoContext.Provider value={todo}>
      <Component {...pageProps} />
    </TodoContext.Provider>
  );
}
export default MyApp;
