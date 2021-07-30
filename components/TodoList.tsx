import React, { useContext, useState } from "react";
import { TodoContext } from "../Context";
import { Todo } from "../interfaces";
import { default as cross } from "../public/Cross.svg";
import Image from "next/image";
import { db } from "../firebase";

const TodoList: React.FC = () => {
  const content = useContext<Todo[] | null>(TodoContext);
  const [finalList, setFinalList] = React.useState<Todo[] | undefined>([]);
  const [nav, setNav] = useState<string>("All");

  React.useEffect(() => {
    switch (nav) {
      case "All":
        setFinalList(content!);
        break;
      case "Active":
        setFinalList(content?.filter((data) => data.completed === false));
        break;
      case "Completed":
        setFinalList(content?.filter((data) => data.completed === true));
        break;
      default:
        break;
    }
  }, [nav, content]);

  const itemsLeft = (): number => {
    let count = 0;
    content?.forEach((data) => {
      if (data.completed === false) {
        count += 1;
      }
    });
    return count;
  };

  const clearAll = () => {
    let query = db.collection("todos").where("completed", "==", true);
    query.get().then((querySnapshot) =>
      querySnapshot.forEach((doc) => {
        doc.ref.delete();
      })
    );
  };

  const changeStatus = (id: string, bool: boolean) => {
    db.collection("todos").doc(id).set(
      {
        completed: !bool,
      },
      { merge: true }
    );
  };

  const removeTodo = (id: string) => {
    db.collection("todos").doc(id).delete();
  };

  return (
    <div className="mt-7">
      {finalList !== undefined &&
        finalList.map((res, idx) => (
          <div
            className={
              "shadow appearance-none  border-b border-gray-200 py-2 px-3 text-grey-darker mx-auto block w-1/2 bg-white flex items-center justify-between w-3/4 sm:w-1/2" +
              (idx === 0 ? " rounded-t-md" : "")
            }
            key={idx}
          >
            <div className="flex items-center break-all">
              <input
                type="checkbox"
                checked={res.completed === true ? true : false}
                className="form-checkbox rounded-full p-4 text-green-500 border-2 mr-3 border-gray-300"
                onChange={() => changeStatus(res.id, res.completed)}
              />
              <p
                className={
                  res.completed === true ? "line-through text-gray-400" : ""
                }
              >
                {res.text}
              </p>
            </div>
            <div
              className="cursor-pointer ml-5"
              onClick={() => removeTodo(res.id)}
            >
              <Image src={cross} />
            </div>
          </div>
        ))}
      <div className="shadow appearance-none text-gray-500 border py-3 px-3 mx-auto block w-1/2 bg-white flex items-center justify-between rounded-b-md mb-8 w-3/4 sm:w-1/2">
        <div className="text-gray-400">{`${itemsLeft()} item(s) left`}</div>
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
        <div onClick={clearAll} className="cursor-pointer">
          Clear completed
        </div>
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
