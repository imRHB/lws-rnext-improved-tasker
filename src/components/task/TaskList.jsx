/* eslint-disable react/prop-types */

import { useContext } from "react";

import { TaskContext } from "../../context";
import NotFound from "../shared/NotFound";
import TaskCard from "./TaskCard";

export default function TaskList() {
    const { taskList } = useContext(TaskContext);

    return (
        <>
            {taskList.length <= 0 ? (
                <NotFound>Task List is empty!</NotFound>
            ) : (
                <div className="overflow-auto">
                    <table className="table-fixed overflow-auto xl:w-full">
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
                        <tbody>
                            {taskList.map((task) => (
                                <TaskCard key={task.id} task={task} />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}
