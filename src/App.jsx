// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Todolist from "./components/Todo";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  const handleTabChange = (newTab) => {
    setSelectedTab(newTab);
  };

  return (
    <div className="app-container">
      <div className="tabs">
        <button onClick={() => handleTabChange("home")}>Home</button>
        <button onClick={() => handleTabChange("todolist")}>Todo List</button>
      </div>

      {selectedTab === "home" && <Home />}
      {selectedTab === "todolist" && <Todolist />}
    </div>
  );
}

export default App;
