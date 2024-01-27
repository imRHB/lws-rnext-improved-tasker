/* eslint-disable react/prop-types */

import { useTaskContext } from "../../hooks";

export default function AddTaskButton() {
    const { setShowModal } = useTaskContext();

    return (
        <button
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
            onClick={() => setShowModal(true)}
        >
            Add Task
        </button>
    );
}
