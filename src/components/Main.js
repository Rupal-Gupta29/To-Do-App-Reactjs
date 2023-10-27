import React, { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";
import styles from "./styles/main.module.css";
import sun from "../Assets/sun.png";
import moon from "../Assets/moon.png";

function Main() {
  const [tasks, setTasks] = useState([]);
  const [lightTheme, setLightTheme] = useState(false);

  const getTask = (taskName) => {
    if (taskName.trim() === "") {
      alert("Task cannot be empty!");
      return;
    } else {
      let newTask = { name: taskName.trim(), iscompleted: false };
      setTasks([...tasks, newTask]);
    }
  };

  const getDeletedTask = (index) => {
    let allTasks = tasks.filter((task, i) => i !== index);
    setTasks(allTasks);
  };

  const getEditedTask = (index, edditedName) => {
    let allTask = [...tasks];
    allTask[index].name = edditedName;
    setTasks(allTask);
  };

  const toggleTask = (index) => {
    let allTask = [...tasks];
    allTask[index].iscompleted = !allTask[index].iscompleted;
    setTasks(allTask);
  };

  useEffect(() => {
    if(lightTheme){
      document.body.classList.add('light');
    }
    else{
      document.body.classList.remove('light');
    }
  }, [lightTheme]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.themeContainer}>
        {lightTheme ? (
          <img
            src={moon}
            alt="light-theme"
            width={45}
            onClick={() => setLightTheme(false)}
          />
        ) : (
          <img
            src={sun}
            alt="light-theme"
            width={45}
            onClick={() => setLightTheme(true)}
          />
        )}
      </div>
      <h2 className={styles.heading}>Hi User,</h2>
      <h3 className={styles.subHeading}>Be productive today</h3>
      <CreateTask getTaskHandler={getTask} />
      <TaskList
        taskList={tasks}
        getDeletedTaskHandler={getDeletedTask}
        getEditedTaskHandler={getEditedTask}
        toggleTaskHandler={toggleTask}
      />
    </div>
  );
}

export default Main;
