import React from "react";

export const Footer = ({ tasks, setTasks }) => {
  const completedTask = tasks.filter((task) => {
    return task.completed === true;
  });
  const deletedAll = () => {
    if (window.confirm("Are you sure to delete all completed tasks") === true) {
      const activeTasks = tasks.filter((task) => task.completed === false);
      setTasks(activeTasks);
    } else {
      return;
    }
  };
  return (
    <div className="pt-4 flex justify-between border-t border-t-[#e4e4e7] w-full">
      <div className="text-[14px] text-[#6b7280] font-normal">{`${completedTask.length} of ${tasks.length}`}</div>
      <div
        className="text-[14px] text-[#ef4444] font-normal cursor-pointer"
        onClick={deletedAll}
      >
        Clear completed
      </div>
    </div>
  );
};
