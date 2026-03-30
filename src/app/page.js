"use client";

import { Tab } from "./components/Tab";
import { useState } from "react";
import { Input } from "./components/Input";
import { Tasks } from "./components/Tasks";
import { Footer } from "./components/Footer";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (inputValue.trim() === "") return;
    const newTasks = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTasks([newTasks, ...tasks]);
    setInputValue("");
  };

  const [activeTab, setActiveTab] = useState("all");
  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "active") return !task.completed;
    else if (activeTab === "completed") return task.completed;
    return true;
  });
  const completedTask = tasks.filter((task) => {
    return task.completed === true;
  });

  const tabList = [
    {
      text: "all",
      isActive: true,
      wSize: "38px",
    },
    {
      text: "active",
      isActive: false,
      wSize: "60px",
    },
    {
      text: "completed",
      isActive: false,
      wSize: "87px",
    },
  ];
  return (
    <div className="bg-[#808080] w-full h-screen flex justify-center items-center">
      <div className="w-[377px] h-auto bg-white shadow-md rounded-md flex flex-col justify-center items-center pt-5 pb-5">
        <div className="text-xl font-medium flex flex-col justify-center items- center w-[345px] h-auto overflow-y-auto gap-5">
          <h1 className="text-center">To-Do List</h1>
          <div className="flex gap-[6px]">
            <Input setInputValue={setInputValue} inputValue={inputValue} />
            <button
              onClick={handleClick}
              className="w-[59px] h-[40px] bg-[#3C82F6] rounded-md flex justify-center items-center text-sm text-white hover:bg-[#2b65c1] transition-all duration-200"
            >
              Add
            </button>
          </div>
          <div className="flex gap-[10px]">
            {tabList.map((element, key) => {
              return (
                <Tab
                  key={key}
                  text={element.text}
                  isActive={activeTab === element.text}
                  onClick={() => setActiveTab(element.text)}
                  wSize={element.wSize}
                />
              );
            })}
          </div>
          <div className=" ">
            {filteredTasks.map((task, index) => {
              return (
                <Tasks
                  key={index}
                  setTasks={setTasks}
                  id={task.id}
                  taskName={task.text}
                  completed={task.completed}
                  allTasks={tasks}
                />
              );
            })}
          </div>
        </div>
        <div className="w-86.25 pt-5">
          <Footer tasks={tasks} setTasks={setTasks} />
        </div>
        <div>
          <p className="text-[#6b7280] pt-3">
            Powered by <span className="text-[#3b73ed]">Pinecone Academy</span>
          </p>
        </div>
      </div>
    </div>
  );
}
