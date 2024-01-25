/* eslint-disable react/prop-types */

import { useContext } from "react";

import { TaskContext } from "../../context";

export default function DeleteTasksButton() {
    const { state, setConfirmModal } = useContext(TaskContext);

    const taskCount = state.taskList.length;

    return (
        <button
            className={`rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold ${
                taskCount === 0 && "bg-opacity-50 cursor-not-allowed"
            }`}
            onClick={() => setConfirmModal(true)}
            disabled={taskCount === 0}
        >
            Delete All
        </button>
    );
}
