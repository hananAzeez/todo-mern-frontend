import { BsThreeDots } from "react-icons/bs";
import TodoCardOptions from "./TodoCardOptions";
import { useState } from "react";

const TodoCard = ({
  title,
  description,
  tags,
  setTodo,
  id,
  editMode,
  setEditMode,
}) => {
  const [formData, setFormData] = useState({
    _id: id,
    title: title,
    description: description,
    tags: tags,
  });
  const [showOptions, setShowOptions] = useState(false);
  const color = [];
  const tagColor = (tags) => {
    Array.isArray(tags) &&
      tags.length !== 0 &&
      tags.map((tag) => {
        switch (tag) {
          case "work":
            return color.push("violet");
          case "study":
            return color.push("skyBlue");
          case "entertainment":
            return color.push("pink");
          case "family":
            return color.push("green");
          default:
            break;
        }
        return color;
      });
  };
  tagColor(tags);
  return (
    <div
      className="flex flex-col rounded text-darkDust bg-lightYellow
    px-6 pt-6 pb-4"
    >
      <div className="flex items-center justify-between">
        <p className="font-medium  text-xl">{title}</p>
        <div className="relative">
          <BsThreeDots
            className="cursor-pointer"
            onClick={() => setShowOptions(!showOptions)}
          />
          <TodoCardOptions
            showOptions={showOptions}
            setTodo={setTodo}
            id={id}
            formData={formData}
            setFormData={setFormData}
            setEditMode={setEditMode}
          />
        </div>
      </div>
      <p className="max-w-[400px] pt-5">{description}</p>
      <div className="tags pt-6 flex w-full items-center justify-between">
        <div className="flex gap-2">
          {color.length !== 0 &&
            color.map((col) => (
              <div className={`w-7 h-7 rounded-full bg-${col}`} />
            ))}
        </div>
        <div className="flex gap-2 ">
          <input type="checkbox" name="" id="" />
          <p className="text-light-dust text-sm">Done</p>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
