import Search from "../shared/Search";
import AddTaskButton from "../ui/AddTaskButton";
import DeleteTasksButton from "../ui/DeleteTasksButton";

export default function TaskBoardAction() {
    return (
        <div className="flex items-center space-x-5">
            <Search />
            <AddTaskButton />
            <DeleteTasksButton />
        </div>
    );
}
