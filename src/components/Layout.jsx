import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import TodoCard from "./todoCard";
import { HiPlus } from "react-icons/hi";
import { getAllTodo } from "../utils/handleApi";
import TodoModel from "./TodoModel";

const Layout = () => {
  const [todo, setTodo] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);
  return (
    <>
      <div
        className={`${
          showModel ? "" : "hidden"
        } w-full h-full bg-black absolute opacity-30`}
      />
      <div className="flex justify-start gap-5 max-w-7xl mx-auto">
        <Sidebar />
        <div className="content flex flex-col py-16 gap-16 w-full">
          <HiPlus
            className="self-end text-3xl cursor-pointer z-10"
            onClick={() => setShowModel(true)}
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
                    id={item._id}
                    title={item.title}
                    description={item.description}
                    tags={item.tags}
                    completed={item.completed}
                    setTodo={setTodo}
                    setShowModel={setShowModel}
                    editMode={editMode}
                    setEditMode={setEditMode}
                  />
                );
              })
            )}
            <TodoModel
              setShowModel={setShowModel}
              showModel={showModel}
              setTodo={setTodo}
              editMode={editMode}
              setEditMode={setEditMode}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
