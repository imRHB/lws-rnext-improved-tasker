/* eslint-disable react/prop-types */

import { useReducer, useState } from "react";

import { TaskContext } from "../context";
import { initialState, taskReducer } from "../reducers/taskReducer";

export default function TaskProvider({ children }) {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    const [showModal, setShowModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const [taskToDelete, setTaskToDelete] = useState(null);

    return (
        <TaskContext.Provider
            value={{
                state,
                dispatch,
                taskToEdit,
                setTaskToEdit,
                showModal,
                setShowModal,
                confirmModal,
                setConfirmModal,
                taskToDelete,
                setTaskToDelete,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}
