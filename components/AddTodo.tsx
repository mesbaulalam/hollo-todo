import React, { useState, useContext } from "react";
import { TodoContext } from "../Context";
import { AppContextInterface } from "../interfaces";

const AddTodo: React.FC = () => {
  const content = useContext<AppContextInterface | null>(TodoContext);
  const [text, setText] = useState<string>("");

  const addTask = (): void => {
    content?.addTodo({ complete: false, text: text });
    setText("");
  };

  return (
    <div>
      <input
        className="shadow appearance-none border rounded py-2 px-3 text-grey-darker mx-auto block w-3/4 sm:w-1/2 left-0 right-0 h-14 -mt-8 absolute rounded-md"
        placeholder="Add Todo"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <div className="flex pt-10 justify-center">
        <div
          className="py-2 px-4 bg-green-400 text-white rounded-md mr-5 cursor-pointer"
          onClick={addTask}
        >
          Add Todo!
        </div>
        <div
          className="py-2 px-4 bg-green-400 text-white rounded-md cursor-pointer"
          onClick={() => setText("")}
        >
          Clear Text
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
