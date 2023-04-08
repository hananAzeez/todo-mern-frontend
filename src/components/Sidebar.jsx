import { useEffect, useState } from "react";

const Sidebar = ({ setSelectedTag }) => {
  const tagsInitial = [
    { id: 1, name: "work", color: "violet", selected: false },
    { id: 2, name: "study", color: "skyBlue", selected: false },
    { id: 3, name: "entertainment", color: "pink", selected: false },
    { id: 4, name: "family", color: "green", selected: false },
  ];
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

  useEffect(() => {
    setSelectedTag(tags);
  }, [tags, setSelectedTag]);

  return (
    <div className="flex flex-col lg:gap-16 lg:py-16 lg:w-56">
      <p className="font-medium text-[32px] text-darkDust p-4 lg:p-0">todo</p>
      <div className="flex lg:flex-col lg:gap-5">
        {tags.map((tag) => (
          <div
            key={tag.id}
            className={`${
              tag.selected ? "bg-gray-100" : ""
            } flex gap-3 items-center rounded-lg p-2 cursor-pointer`}
            onClick={() => handleTagClick(tag.id)}
          >
            <div className={`w-8 h-8 bg-${tag.color} rounded-full`} />
            <p className="text-base text-darkDust">{tag.name}</p>
          </div>
        ))}
        {/* <div className="flex gap-3 items-center">
          <div className={`w-8 h-8 bg-violet rounded-full`} />
          <p className="text-base text-darkDust">work</p>
        </div>
        <div className="flex gap-3 items-center">
          <div className={`w-8 h-8 bg-skyBlue rounded-full`} />
          <p className="text-base text-darkDust">study</p>
        </div>
        <div className="flex gap-3 items-center">
          <div className={`w-8 h-8 bg-pink rounded-full`} />
          <p className="text-base text-darkDust">entertainment</p>
        </div>
        <div className="flex gap-3 items-center">
          <div className={`w-8 h-8 bg-green rounded-full`} />
          <p className="text-base text-darkDust">family</p>
        </div> */}
      </div>
      <div className="hidden lg:flex gap-2 ">
        <input type="checkbox" name="" id="" className="" />
        <p className="text-lightDust text-sm">Hide done tasks</p>
      </div>
    </div>
  );
};

export default Sidebar;
