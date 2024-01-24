/* eslint-disable react/prop-types */

import { useContext } from "react";

import { TaskContext } from "../../context";

export default function DeleteTasksButton() {
    const { taskList, setTaskList } = useContext(TaskContext);

    function handleDeleteAllTasks() {
        if (window.confirm("Delete all tasks?")) {
            taskList.length = 0;
            setTaskList([...taskList]);
        }
    }

    return (
        <button
            className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
            onClick={handleDeleteAllTasks}
        >
            Delete All
        </button>
    );
}
