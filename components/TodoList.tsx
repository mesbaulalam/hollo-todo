import React, { useContext } from "react";
import { TodoContext } from "../Context";
import { AppContextInterface } from "../interfaces";

const TodoList: React.FC = () => {
  const content = useContext<AppContextInterface | null>(TodoContext);
  console.log(content?.todo);

  return (
    <div>
      {content?.todo.map((res, idx) => (
        <div
          className="shadow appearance-none border rounded py-2 px-3 text-grey-darker mx-auto block w-1/2 rounded-md bg-gray-200 mt-7 flex items-center justify-between"
          key={idx}
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={res.complete === true ? true : false}
              className="form-checkbox rounded-full p-4 text-green-500 border-2 mr-3 border-gray-300"
              onChange={() => content.changeStatus(idx)}
            />
            <p
              className={
                res.complete === true ? "line-through text-gray-400" : ""
              }
            >
              {res.text}
            </p>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => content.removeTodo(idx)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
