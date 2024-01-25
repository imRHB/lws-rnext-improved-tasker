/* eslint-disable react/prop-types */

import { useContext } from "react";

import { TaskContext } from "../../context";

export default function AddTaskButton() {
    const { setShowModal } = useContext(TaskContext);

    return (
        <button
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
            onClick={() => setShowModal(true)}
        >
            Add Task
        </button>
    );
}
