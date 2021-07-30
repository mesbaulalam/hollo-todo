import React, { useState, useContext } from "react";
import { db } from "../firebase";
import firebase from "firebase";

const AddTodo: React.FC = () => {
  const [text, setText] = useState<string>("");

  const addTask = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    if (text.trim() === "") {
      return;
    }
    db.collection("todos").add({
      text: text,
      completed: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setText("");
  };

  return (
    <form>
      <input
        className="shadow appearance-none border rounded py-2 px-3 text-grey-darker mx-auto block w-3/4 sm:w-1/2 left-0 right-0 h-14 -mt-8 absolute rounded-md"
        placeholder="Add Todo"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <div className="flex pt-10 justify-center">
        <button
          className="py-2 px-4 bg-green-400 text-white rounded-md mr-5 cursor-pointer"
          onClick={addTask}
          type="submit"
        >
          Add Todo!
        </button>
        <div
          className="py-2 px-4 bg-green-400 text-white rounded-md cursor-pointer"
          onClick={() => setText("")}
        >
          Clear Text
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
