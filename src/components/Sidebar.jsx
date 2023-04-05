const tags = [
  {
    title: "work",
    color: "violet",
  },
  {
    title: "study",
    color: "skyBlue",
  },
  {
    title: "entertainment",
    color: "pink",
  },
  {
    title: "family",
    color: "green",
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-16 lg:py-16 lg:w-56">
      <p className="font-medium text-[32px] text-darkDust">todo</p>
      <div className="flex lg:flex-col lg:gap-9">
        {tags.map((tag) => (
          <div key={tag.title} className="flex gap-3">
            <div className={`w-8 h-8 bg-${tag.color} rounded-full`} />
            <p className="text-base text-darkDust">{tag.title}</p>
          </div>
        ))}
      </div>
      <div className="hidden lg:flex gap-2 ">
        <input type="checkbox" name="" id="" />
        <p className="text-light-dust text-sm">Hide done tasks</p>
      </div>
    </div>
  );
};

export default Sidebar;
