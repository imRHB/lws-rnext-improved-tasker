/* eslint-disable react/prop-types */

import { toast } from "react-toastify";

import Search from "../shared/Search";
import AddTaskButton from "../ui/AddTaskButton";
import DeleteTasksButton from "../ui/DeleteTasksButton";

export default function TaskBoardAction() {
    const notify = () => toast("Wow so easy !");

    return (
        <div className="flex items-center space-x-5">
            <Search />
            <button onClick={notify}>Click me</button>
            <AddTaskButton />
            <DeleteTasksButton />
        </div>
    );
}
