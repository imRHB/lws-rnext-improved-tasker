import { useReducer, useState } from "react";

import { TaskContext } from "../../context/index.js";
import { initialState, taskReducer } from "../../reducers/taskReducer.js";
import AddTaskModal from "../ui/AddTaskModal.jsx";
import ConfirmationModal from "../ui/ConfirmationModal.jsx";
import TaskBoardHeader from "./TaskBoardHeader.jsx";
import TaskList from "./TaskList";

export default function TaskBoard() {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    const [showModal, setShowModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const [onClickAction, setOnClickAction] = useState(null);

    return (
        <TaskContext.Provider
            value={{
                state,
                dispatch,
                taskToEdit,
                setTaskToEdit,
                setShowModal,
                confirmModal,
                setConfirmModal,
                onClickAction,
                setOnClickAction,
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
                {confirmModal && <ConfirmationModal />}
            </section>
        </TaskContext.Provider>
    );
}
