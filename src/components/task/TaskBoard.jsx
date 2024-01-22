import { useState } from "react";

import { TASK_LIST } from "../../data/tasks.js";
import AddTaskModal from "../ui/AddTaskModal.jsx";
import TaskBoardAction from "./TaskBoardAction";
import TaskList from "./TaskList";

export default function TaskBoard() {
    const [taskList, setTaskList] = useState(TASK_LIST);
    const [showModal, setShowModal] = useState(false);

    function handleAddTask() {}

    function handleToggleFavorite(taskId) {
        const taskIdx = taskList.findIndex((task) => task.id === taskId);
        const clonedTaskList = [...taskList];

        clonedTaskList[taskIdx].isFavorite =
            !clonedTaskList[taskIdx].isFavorite;
        setTaskList(clonedTaskList);
    }

    return (
        <section className="mb-20" id="tasks">
            {showModal && (
                <AddTaskModal onModalOpen={() => setShowModal(false)} />
            )}

            <div className="container mx-auto">
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <div className="mb-14 items-center justify-between sm:flex">
                        <h2 className="text-2xl font-semibold max-sm:mb-4">
                            Your Tasks
                        </h2>

                        <TaskBoardAction
                            onModalOpen={() => setShowModal(true)}
                        />
                    </div>

                    <TaskList
                        tasks={taskList}
                        onFavorite={handleToggleFavorite}
                    />
                </div>
            </div>
        </section>
    );
}
