import React from "react";

export const Tasks = ({ allTasks, completed, taskName, setTasks, id }) => {
  const toggletask = () => {
    setTasks(
      allTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deletedTask = () => {
    if (window.confirm("Are you sure to delete this task") === true) {
      const filteredTask = allTasks.filter((task) => task.id !== id);
      setTasks(filteredTask);
    } else {
      return;
    }
  };
  return (
    <div className="text-base w-[345px] h-[62px] bg-[#F9FAFB] rounded-md flex items-center pl-3 hover:bg-[#f3f3f3] transition-all duration-300 justify-between p-3">
      <div className="flex gap-2">
        <input
          type="checkbox"
          id={id}
          checked={completed}
          onChange={toggletask}
          className="w-5 h-5 rounded accent-[#3C82F6] cursor-pointer"
        ></input>

        <p className="text-black peer-checked:line-through peer-checked:text-gray-400">
          {taskName}
        </p>
      </div>
      <div
        onClick={deletedTask}
        className="w-[67px] h-[30px] bg-[#FEF2F2] rounded-sm text-[#EF4444] flex justify-center items-center cursor-pointer"
      >
        Delete
      </div>
    </div>
  );
};
