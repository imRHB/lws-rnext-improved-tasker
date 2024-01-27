/* eslint-disable react/prop-types */

import { useTaskContext } from "../../hooks";
import NotFound from "../shared/NotFound";
import TaskItem from "./TaskItem";

export default function TaskList() {
    const { state } = useTaskContext();

    return (
        <>
            {state.taskList.length <= 0 ? (
                <NotFound>Task List is empty!</NotFound>
            ) : (
                <div className="overflow-auto">
                    <table className="table-fixed overflow-auto xl:w-full">
                        <TaskItemHead />
                        <tbody>
                            {state.taskList.map((task) => (
                                <TaskItem key={task.id} task={task} />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

function TaskItemHead() {
    return (
        <thead>
            <tr>
                <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                    {" "}
                    Title{" "}
                </th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                    {" "}
                    Description{" "}
                </th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                    {" "}
                    Tags{" "}
                </th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                    {" "}
                    Priority{" "}
                </th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                    {" "}
                    Options{" "}
                </th>
            </tr>
        </thead>
    );
}
