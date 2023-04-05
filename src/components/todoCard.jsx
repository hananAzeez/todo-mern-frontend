import { BsThreeDots } from "react-icons/bs";

const TodoCard = ({ title, description, tags }) => {
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
    console.log("colors: ", color);
  };
  tagColor(tags);
  return (
    <div
      className="flex flex-col rounded text-darkDust bg-lightYellow
    px-6 pt-6 pb-4"
    >
      <div className="flex items-center justify-between">
        <p className="font-medium  text-xl">{title}</p>
        <BsThreeDots />
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