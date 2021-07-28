import React, { useContext } from "react";
import { TodoContext } from "../Context";
import { Todo, AppContextInterface } from "../interfaces";

const TodoList: React.FC = () => {
  const content = useContext<AppContextInterface | null>(TodoContext);

  return (
    <div>
      {content?.todo.map((res) => (
        <div className="text-center text-white">{res.text}</div>
      ))}
    </div>
  );
};

export default TodoList;
