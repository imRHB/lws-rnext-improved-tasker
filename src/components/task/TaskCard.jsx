/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa";

import TagBadge from "../ui/TagBadge";

export default function TaskCard({ task, onFavorite }) {
    return (
        <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
            <td>
                <span
                    className="cursor-pointer"
                    onClick={() => onFavorite(task.id)}
                >
                    {task.isFavorite ? (
                        <FaStar color="#FFFF00" size="20" />
                    ) : (
                        <FaStar size="20" />
                    )}
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
                    <button className="text-red-500">Delete</button>
                    <button className="text-blue-500">Edit</button>
                </div>
            </td>
        </tr>
    );
}
