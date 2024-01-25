/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { toast } from "react-toastify";

import { TaskContext } from "../../context";

const taskDefaultState = {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    isFavorite: false,
};

export default function AddTaskModal() {
    const { taskToEdit, setTaskToEdit, setShowModal, dispatch } =
        useContext(TaskContext);

    const [task, setTask] = useState(taskToEdit || taskDefaultState);
    const [isAdding, setIsAdding] = useState(Object.is(taskToEdit, null));

    const handleChange = (evt) => {
        const name = evt.target.name;
        let value = evt.target.value;

        if (name === "tags") {
            value = value.split(",");
        }
        setTask({ ...task, [name]: value });
    };

    function handleAddTask(newTask, isAdding) {
        event.preventDefault();

        /* if (isAdding) {
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
            setTaskToEdit(null);
        } */

        if (isAdding) {
            dispatch({
                type: "ADD_TASK",
                payload: {
                    newTask,
                },
            });

            toast.success("A new task has been added successfully!");
        } else {
            dispatch({
                type: "EDIT_TASK",
                payload: {
                    newTask,
                },
            });

            toast.success(`A task has been updated with ${newTask.id} ID!`);
        }

        setShowModal(false);
    }

    function handleModalClose() {
        setTaskToEdit(null);
        setShowModal(false);
    }

    return (
        <>
            <div className="bg-[#191D26] bg-opacity-90 h-full w-full z-50 absolute top-0 left-0" />

            <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
                    {isAdding ? "Add New Task" : "Edit Task"}
                </h2>

                <div className="space-y-9 text-white lg:space-y-10">
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="title">Title</label>
                        <input
                            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                            type="text"
                            name="title"
                            id="title"
                            value={task.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                            type="text"
                            name="description"
                            id="description"
                            value={task.description}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="tags">Tags</label>
                            <input
                                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                                type="text"
                                name="tags"
                                id="tags"
                                value={task.tags}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="priority">Priority</label>
                            <select
                                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                                name="priority"
                                id="priority"
                                value={task.priority}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex items-center justify-between lg:mt-20">
                    <button
                        type="button"
                        className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
                        onClick={handleModalClose}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
                        onClick={() => handleAddTask(task, isAdding)}
                        // onClick={() => handleAddNewTask(task)}
                    >
                        {isAdding ? "Create new Task" : "Update Task"}
                    </button>
                </div>
            </form>
        </>
    );
}
