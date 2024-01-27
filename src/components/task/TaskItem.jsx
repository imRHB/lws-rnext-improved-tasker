/* eslint-disable react/prop-types */

import { useTaskContext } from "../../hooks";
import FavoriteIcon from "../ui/FavoriteIcon";
import TagBadge from "../ui/TagBadge";

export default function TaskItem({ task }) {
    const {
        dispatch,
        setShowModal,
        setTaskToEdit,
        setTaskToDelete,
        setConfirmModal,
    } = useTaskContext();

    function handleToggleFavorite(taskId) {
        event.preventDefault();

        dispatch({
            type: "TOGGLE_FAVORITE_TASK",
            payload: {
                taskId,
            },
        });
    }

    function handleDeleteTask(taskId) {
        event.preventDefault();

        setTaskToDelete(taskId);
        setConfirmModal(true);
    }

    function handleEditTask(editedTask) {
        event.preventDefault();

        setTaskToEdit(editedTask);
        setShowModal(true);
    }

    return (
        <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
            <td>
                <span
                    className="cursor-pointer"
                    onClick={() => handleToggleFavorite(task.id)}
                >
                    <FavoriteIcon isFavorite={task.isFavorite} />
                </span>
            </td>
            <td>{task.title}</td>
            <td>
                <div>{task.description}</div>
            </td>
            <td>
                <ul className="flex justify-center gap-1.5 flex-wrap">
                    {task.tags.map((tag) => (
                        <TagBadge key={tag} tag={tag} />
                    ))}
                </ul>
            </td>
            <td className="text-center capitalize">{task.priority}</td>
            <td>
                <div className="flex items-center justify-center space-x-3">
                    <button
                        className="text-red-500"
                        onClick={() => handleDeleteTask(task.id)}
                    >
                        Delete
                    </button>
                    <button
                        className="text-blue-500"
                        onClick={() => handleEditTask(task)}
                    >
                        Edit
                    </button>
                </div>
            </td>
        </tr>
    );
}
