import React from "react";
import AddTodo from "../components/AddTodo";
import Header from "../components/Header";
import TodoList from "../components/TodoList";

const home: React.FC = () => {
  return (
    <div className="h-screen relative bg-gray-800">
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default home;
