/* eslint-disable react/prop-types */

import { useTaskContext } from "../../hooks";

export default function DeleteTasksButton() {
    const { state, setConfirmModal, setTaskToDelete } = useTaskContext();

    const taskCount = state.taskList.length;

    function handleDeleteAllTasks() {
        setTaskToDelete("ALL_TASKS");
        setConfirmModal(true);
    }

    return (
        <button
            className={`rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold ${
                taskCount === 0 && "bg-opacity-50 cursor-not-allowed"
            }`}
            onClick={handleDeleteAllTasks}
            disabled={taskCount === 0}
        >
            Delete All
        </button>
    );
}
