import React, { useContext, useState } from "react";
import { TodoContext } from "../Context";
import { AppContextInterface } from "../interfaces";
import { default as cross } from "../public/Cross.svg";
import Image from "next/image";

const TodoList: React.FC = () => {
  const content = useContext<AppContextInterface | null>(TodoContext);
  const [nav, setNav] = useState<string>("All");
  console.log(content?.todo);

  return (
    <div className="mt-7">
      {content?.todo.map((res, idx) => (
        <div
          className={
            "shadow appearance-none border  py-2 px-3 text-grey-darker mx-auto block w-1/2 bg-gray-200 flex items-center justify-between w-3/4 sm:w-1/2" +
            (idx === 0 ? " rounded-t-md" : "")
          }
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
            <Image src={cross} />
          </div>
        </div>
      ))}
      <div className="shadow appearance-none text-gray-500 border py-2 px-3 mx-auto block w-1/2 bg-gray-200 flex items-center justify-between rounded-b-md mb-8 w-3/4 sm:w-1/2">
        <div className="text-gray-400">3 items left</div>
        <div
          className={`${
            nav === "All" ? "text-green-500" : ""
          } hidden lg:block cursor-pointer`}
          onClick={() => setNav("All")}
        >
          All
        </div>
        <div
          className={`${
            nav === "Active" ? "text-green-500" : ""
          } hidden lg:block cursor-pointer`}
          onClick={() => setNav("Active")}
        >
          Active
        </div>
        <div
          className={`${
            nav === "Completed" ? "text-green-500" : ""
          } hidden lg:block cursor-pointer`}
          onClick={() => setNav("Completed")}
        >
          Completed
        </div>
        <div>Clear completed</div>
      </div>
      <div className="shadow appearance-none text-gray-500 border py-2 px-3 mx-auto block w-1/2 bg-gray-200 flex items-center justify-between rounded-md lg:hidden w-3/4 sm:w-1/2">
        <div
          className={`${nav === "All" ? "text-green-500" : ""} cursor-pointer`}
          onClick={() => setNav("All")}
        >
          All
        </div>
        <div
          className={`${
            nav === "Active" ? "text-green-500" : ""
          } cursor-pointer`}
          onClick={() => setNav("Active")}
        >
          Active
        </div>
        <div
          className={`${
            nav === "Completed" ? "text-green-500" : ""
          } cursor-pointer`}
          onClick={() => setNav("Completed")}
        >
          Completed
        </div>
      </div>
    </div>
  );
};

export default TodoList;
