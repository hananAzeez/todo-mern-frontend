import { BsThreeDots } from "react-icons/bs";
import TodoCardOptions from "./TodoCardOptions";
import { useState } from "react";

const TodoCard = ({
  title,
  description,
  tags,
  setTodo,
  id,
  isUpdating,
  setIsUpdating,
  editMode,
  selectedTag,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [completed, setCompleted] = useState(false);
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

  const displayTodo = () => {
    const selectedTags = selectedTag.filter((tag) => tag.selected === true);
    if (selectedTags.length === 0) {
      return true;
    } else {
      return (
        selectedTags.length > 0 &&
        selectedTags.some((tag) => tags.includes(tag.name))
      );
    }
  };
  return (
    <div
      className={`${
        displayTodo() ? "flex" : "hidden"
      } flex-col rounded text-darkDust bg-lightYellow
    px-6 pt-6 pb-4`}
    >
      <div className="flex items-center justify-between">
        <p className="font-medium  text-xl">
          {completed ? <s>{title}</s> : title}
        </p>
        <div className="relative">
          <BsThreeDots
            className="cursor-pointer"
            onClick={() => setShowOptions(!showOptions)}
          />
          <TodoCardOptions
            showOptions={showOptions}
            setTodo={setTodo}
            id={id}
            setIsUpdating={setIsUpdating}
            editMode={editMode}
          />
        </div>
      </div>
      <p className="max-w-[400px] pt-5">
        {completed ? <s>{description}</s> : description}
      </p>
      <div className="tags pt-6 flex w-full items-center justify-between">
        <div className="flex gap-2">
          {color.length !== 0 &&
            color.map((col) => (
              <div className={`w-7 h-7 rounded-full bg-${col}`} key={col} />
            ))}
        </div>
        <div className="flex gap-2 ">
          <input
            type="checkbox"
            name=""
            id=""
            className=""
            onClick={() => setCompleted(!completed)}
          />
          <p className="text-light-dust text-sm">Done</p>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
