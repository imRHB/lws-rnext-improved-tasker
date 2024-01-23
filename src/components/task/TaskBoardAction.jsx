/* eslint-disable react/prop-types */

import Search from "../shared/Search";
import AddTaskButton from "../ui/AddTaskButton";
import DeleteTasksButton from "../ui/DeleteTasksButton";

export default function TaskBoardAction({
    onModalOpen,
    onDeleteAll,
    onSearchTask,
}) {
    return (
        <div className="flex items-center space-x-5">
            <Search onSearchTask={onSearchTask} />
            <AddTaskButton onModalOpen={onModalOpen} />
            <DeleteTasksButton onDeleteAll={onDeleteAll} />
        </div>
    );
}
