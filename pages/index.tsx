import React from "react";
import AddTodo from "../components/AddTodo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import GithubCorner from "react-github-corner";

const home: React.FC = () => {
  return (
    <div className="relative text-base">
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
  );
};

export default home;
