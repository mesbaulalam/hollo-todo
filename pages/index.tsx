import React from "react";
import AddTodo from "../components/AddTodo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import GithubCorner from "react-github-corner";
import { Todo } from "../interfaces";
import { TodoContext } from "../Context";
import { db } from "../firebase";
import CircularProgress from "@material-ui/core/CircularProgress";

const home: React.FC = () => {
  const [todo, setTodo] = React.useState<Todo[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setLoading(false);
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
      {loading === false ? (
        <div className="relative text-base bg-gray-800">
          <Header />
          <AddTodo />
          <TodoList />
          <Footer />
          <GithubCorner
            href="https://github.com/mesbaulalam/hollo-todo"
            direction="left"
            target="_blank"
            size="100"
          />
        </div>
      ) : (
        <div className="bg-white flex justify-center items-center text-green-400">
          <CircularProgress color="inherit" />
        </div>
      )}
    </TodoContext.Provider>
  );
};

export default home;
