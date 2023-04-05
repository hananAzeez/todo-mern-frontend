import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import TodoCard from "./todoCard";
import { HiPlus } from "react-icons/hi";
import { getAllTodo } from "../utils/handleApi";
import TodoModel from "./TodoModel";

const Layout = () => {
  const [todo, setTodo] = useState([]);
  const [displayModel, setDisplayModel] = useState(false);

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);
  return (
    <>
      <div
        className={`${
          displayModel ? "" : "hidden"
        } w-full h-full bg-black absolute opacity-30`}
      />
      <div className="flex justify-start gap-5 max-w-7xl mx-auto">
        <Sidebar />
        <div className="content flex flex-col py-16 gap-16 w-full">
          <HiPlus
            className="self-end text-3xl cursor-pointer z-10"
            onClick={() => setDisplayModel(true)}
          />
          <div className="grid grid-cols-2 gap-5">
            {Array.isArray(todo) && todo.length === 0 ? (
              <p>Add to do</p>
            ) : (
              todo.map((item) => {
                console.log(item);
                return (
                  <TodoCard
                    key={item._id}
                    title={item.title}
                    description={item.description}
                    tags={item.tags}
                    completed={item.completed}
                  />
                );
              })
            )}
            <TodoModel
              setDisplayModel={setDisplayModel}
              displayModel={displayModel}
              setTodo={setTodo}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
