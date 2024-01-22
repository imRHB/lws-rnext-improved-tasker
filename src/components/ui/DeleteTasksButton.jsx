/* eslint-disable react/prop-types */

export default function DeleteTasksButton({ onDeleteAll }) {
    return (
        <button
            className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
            onClick={onDeleteAll}
        >
            Delete All
        </button>
    );
}
