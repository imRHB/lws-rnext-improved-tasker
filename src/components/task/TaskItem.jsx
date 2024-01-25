/* eslint-disable react/prop-types */

import { useContext } from "react";

import { TaskContext } from "../../context";
import FavoriteIcon from "../ui/FavoriteIcon";
import TagBadge from "../ui/TagBadge";

export default function TaskItem({ task }) {
    const { taskList, setTaskList, setTaskToEdit, setShowModal } =
        useContext(TaskContext);

    function handleToggleFavorite(taskId) {
        const taskIdx = taskList.findIndex((task) => task.id === taskId);
        const clonedTaskList = [...taskList];

        clonedTaskList[taskIdx].isFavorite =
            !clonedTaskList[taskIdx].isFavorite;
        setTaskList(clonedTaskList);
    }

    function handleDeleteTask(taskId) {
        if (window.confirm("Delete task?")) {
            const updatedTaskList = taskList.filter(
                (task) => task.id !== taskId
            );
            setTaskList(updatedTaskList);
        }
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
