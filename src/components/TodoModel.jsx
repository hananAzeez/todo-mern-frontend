import { useState, useEffect } from "react";
import { createTodo } from "../utils/handleApi";

function useLogFormData(formData) {
  useEffect(() => {
    console.log("formData", formData);
  }, [formData]);
}

const TodoModel = ({ showModel, setShowModel, setTodo }) => {
  const tagsInitial = [
    { id: 1, name: "work", color: "violet", selected: false },
    { id: 2, name: "study", color: "skyBlue", selected: false },
    { id: 3, name: "entertainment", color: "pink", selected: false },
    { id: 4, name: "family", color: "green", selected: false },
  ];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: [],
  });
  const [tags, setTags] = useState(tagsInitial);

  const handleTagClick = (tagId) => {
    setTags((prevTags) => {
      return prevTags.map((tag) => {
        if (tag.id === tagId) {
          return { ...tag, selected: !tag.selected };
        } else {
          return tag;
        }
      });
    });
  };

  // Call custom hook to log formData updates
  useLogFormData(formData);

  const todoForm = async (title, description, tags) => {
    const selectedTags = tags.filter((tag) => tag.selected === true);
    const selectedTagNames = selectedTags.map((tag) => tag.name);

    const formData = {
      title: title,
      description: description,
      tags: selectedTagNames,
    };
    setFormData(formData);
    console.log("formData", formData);
    try {
      await createTodo(formData, setFormData, setTodo);
      setTitle("");
      setDescription("");
      setTags(tagsInitial);
      setShowModel(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`${
        showModel ? "flex" : "hidden"
      } flex-col gap-7 text-darkDust pt-9 px-12 pb-8 w-[734px] shadow-md rounded-2xl absolute bg-white z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
    >
      <div className="flex items-center justify-between">
        <p
          className="text-sm cursor-pointer"
          onClick={() => setShowModel(false)}
        >
          Cancel
        </p>
        <button
          className="py-3 px-11 bg-darkDust text-white rounded-xl font-medium"
          onClick={() => todoForm(title, description, tags)}
        >
          Add
        </button>
      </div>
      {/* title */}
      <div className="title flex flex-col gap-3" htmlFor="title">
        <label className="font-medium text-lg" name="title">
          Title
        </label>
        <input
          type="text"
          placeholder="add a title..."
          className="bg-snow py-3 px-4 rounded-[10px] placeholder:text-darkDust"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {/* description */}
      <div className="Description flex flex-col gap-3" htmlFor="title">
        <label className="font-medium text-lg" name="title">
          Description
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="bg-snow py-3 px-4 rounded-[10px] placeholder:text-darkDust"
          placeholder="add a description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      {/* tags */}
      <div className="Description flex flex-col gap-3">
        <p className="font-medium text-lg">Tags</p>
        <div className="flex items-center gap-7">
          {tags.map((tag) => (
            <div
              key={tag.id}
              className={`tag ${
                tag.selected ? "bg-snow" : ""
              } px-3 py-2 flex gap-3 items-center cursor-pointer rounded-lg`}
              onClick={() => handleTagClick(tag.id)}
            >
              <div className={`w-7 h-7 bg-${tag.color} rounded-full`} />
              {tag.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoModel;
