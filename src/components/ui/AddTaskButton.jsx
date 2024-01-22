/* eslint-disable react/prop-types */

export default function AddTaskButton({ onModalOpen }) {
    return (
        <button
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
            onClick={onModalOpen}
        >
            Add Task
        </button>
    );
}
