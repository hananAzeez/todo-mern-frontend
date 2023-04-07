import { deleteTodo } from "../utils/handleApi";

const TodoCardOptions = ({
  showOptions,
  id,
  setTodo,
  setIsUpdating,
  editMode,
}) => {
  // console.log("editMode", editMode._id);
  return (
    <div
      className={`${
        showOptions ? "flex" : "hidden"
      } flex-col rounded-xl bg-white w-44 absolute right-0 top-full shadow-sm`}
    >
      <div
        className="edit px-6 hover:bg-gray-100 pb-3 pt-4 rounded-t-xl cursor-pointer`"
        onClick={() => {
          setIsUpdating(true);
          editMode();
        }}
      >
        Edit...
      </div>
      <div className="h-[1px] w-full bg-gray-200" />
      <div
        className="delete px-6 hover:bg-gray-100 pt-3 pb-4 rounded-b-xl cursor-pointer"
        onClick={() => deleteTodo(id, setTodo)}
      >
        Delete
      </div>
    </div>
  );
};

export default TodoCardOptions;
