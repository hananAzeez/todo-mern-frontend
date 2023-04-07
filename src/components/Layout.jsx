import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import TodoCard from "./todoCard";
import { HiPlus } from "react-icons/hi";
import { getAllTodo } from "../utils/handleApi";
import TodoModel from "./TodoModel";

const Layout = () => {
  const [todo, setTodo] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateForm, setUpdateForm] = useState({});
  const [selectedTag, setSelectedTag] = useState([]);

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const editMode = (updateForm) => {
    setIsUpdating(true);
    // console.log("Layout updateform ", updateForm);
    setUpdateForm(updateForm);
  };
  return (
    <>
      <div
        className={`${
          showModel || isUpdating ? "" : "hidden"
        } w-full h-full bg-black absolute opacity-30 z-10`}
      />
      <div className="flex justify-start gap-5 max-w-7xl mx-auto">
        <Sidebar setSelectedTag={setSelectedTag} />
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
                // console.log(item);
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
                    isUpdating={isUpdating}
                    setIsUpdating={setIsUpdating}
                    selectedTag={selectedTag}
                    editMode={() =>
                      editMode({
                        _id: item._id,
                        title: item.title,
                        description: item.description,
                        tags: item.tags,
                      })
                    }
                  />
                );
              })
            )}
            <TodoModel
              setShowModel={setShowModel}
              showModel={showModel}
              setTodo={setTodo}
              isUpdating={isUpdating}
              setIsUpdating={setIsUpdating}
              updateForm={updateForm}
              setUpdateForm={setUpdateForm}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
