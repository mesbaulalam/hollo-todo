import React from "react";
import AddTodo from "../components/AddTodo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TodoList from "../components/TodoList";

const home: React.FC = () => {
  return (
    <div className="relative text-base">
      <Header />
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
};

export default home;
