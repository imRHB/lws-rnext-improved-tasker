import { useState } from "react";

import { TASK_LIST } from "../../data/tasks.js";
import NotFound from "../shared/NotFound.jsx";
import AddTaskModal from "../ui/AddTaskModal.jsx";
import TaskBoardAction from "./TaskBoardAction";
import TaskList from "./TaskList";

export default function TaskBoard() {
    const [taskList, setTaskList] = useState(TASK_LIST);
    const [showModal, setShowModal] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);

    function handleAddTask(newTask, isAdding) {
        event.preventDefault();

        if (isAdding) {
            setTaskList([...taskList, newTask]);
        } else {
            setTaskList(
                taskList.map((task) => {
                    if (task.id === newTask.id) {
                        return newTask;
                    }
                    return task;
                })
            );
        }

        setShowModal(false);
    }

    function handleDeleteAllTasks() {
        if (window.confirm("Delete all tasks?")) {
            taskList.length = 0;
            setTaskList([...taskList]);
        }
    }

    function handleToggleFavorite(taskId) {
        const taskIdx = taskList.findIndex((task) => task.id === taskId);
        const clonedTaskList = [...taskList];

        clonedTaskList[taskIdx].isFavorite =
            !clonedTaskList[taskIdx].isFavorite;
        setTaskList(clonedTaskList);
    }

    function handleEditTask(editedTask) {
        event.preventDefault();

        setTaskToEdit(editedTask);
        setShowModal(true);
    }

    function handleDeleteTask(taskId) {
        if (window.confirm("Delete task?")) {
            const updatedTaskList = taskList.filter(
                (task) => task.id !== taskId
            );
            setTaskList(updatedTaskList);
        }
    }

    function handleModalShow() {
        setTaskToEdit(null);
        setShowModal(false);
    }

    function handleSearchTask(searchTerm) {
        event.preventDefault();

        const clonedTaskList = [...TASK_LIST];
        const searchedTaskList = clonedTaskList.filter((task) =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setTaskList(searchedTaskList);
    }

    return (
        <section className="mb-20" id="tasks">
            {showModal && (
                <AddTaskModal
                    onAddTask={handleAddTask}
                    taskToEdit={taskToEdit}
                    onModalClose={handleModalShow}
                />
            )}

            <div className="container mx-auto">
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <div className="mb-14 items-center justify-between sm:flex">
                        <h2 className="text-2xl font-semibold max-sm:mb-4">
                            Your Tasks
                        </h2>

                        <TaskBoardAction
                            onModalOpen={() => setShowModal(true)}
                            onDeleteAll={handleDeleteAllTasks}
                            onSearchTask={handleSearchTask}
                        />
                    </div>

                    {taskList.length <= 0 ? (
                        <NotFound>Task List is empty!</NotFound>
                    ) : (
                        <TaskList
                            tasks={taskList}
                            onFavorite={handleToggleFavorite}
                            onDeleteTask={handleDeleteTask}
                            onEditTask={handleEditTask}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
