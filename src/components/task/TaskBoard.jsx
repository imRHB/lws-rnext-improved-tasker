import { useReducer, useState } from "react";

import { TaskContext } from "../../context/index.js";
import { initialState, taskReducer } from "../../reducers/taskReducer.js";
import AddTaskModal from "../ui/AddTaskModal.jsx";
import TaskBoardHeader from "./TaskBoardHeader.jsx";
import TaskList from "./TaskList";

export default function TaskBoard() {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    const [showModal, setShowModal] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);

    return (
        <TaskContext.Provider
            value={{
                state,
                dispatch,
                taskToEdit,
                setTaskToEdit,
                setShowModal,
            }}
        >
            <section className="mb-20" id="tasks">
                <div className="container mx-auto">
                    <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                        <TaskBoardHeader />

                        <TaskList />
                    </div>
                </div>

                {showModal && <AddTaskModal />}
            </section>
        </TaskContext.Provider>
    );
}

/* function handleAddTask(newTask, isAdding) {
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
    } */

/* function handleDeleteAllTasks() {
        if (window.confirm("Delete all tasks?")) {
            taskList.length = 0;
            setTaskList([...taskList]);
        }
    } */

/* function handleToggleFavorite(taskId) {
        const taskIdx = taskList.findIndex((task) => task.id === taskId);
        const clonedTaskList = [...taskList];

        clonedTaskList[taskIdx].isFavorite =
            !clonedTaskList[taskIdx].isFavorite;
        setTaskList(clonedTaskList);
    } */

/* function handleEditTask(editedTask) {
        event.preventDefault();

        setTaskToEdit(editedTask);
        setShowModal(true);
    } */

/* function handleDeleteTask(taskId) {
        if (window.confirm("Delete task?")) {
            const updatedTaskList = taskList.filter(
                (task) => task.id !== taskId
            );
            setTaskList(updatedTaskList);
        }
    } */

/* function handleModalShow() {
        setTaskToEdit(null);
        setShowModal(false);
    } */

/* function handleSearchTask(searchTerm) {
        event.preventDefault();

        const clonedTaskList = [...TASK_LIST];
        const searchedTaskList = clonedTaskList.filter((task) =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setTaskList(searchedTaskList);
    } */
