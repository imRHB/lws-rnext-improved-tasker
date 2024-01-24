import { TASK_LIST } from "../data/tasks";

export const initialState = {
    taskList: TASK_LIST,
};

export const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return "addTask";

        case "EDIT_TASK":
            return "editTask";

        case "DELETE_TASK":
            return "deleteTask";

        case "DELETE_ALL_TASKS":
            return "deleteAllTasks";

        default:
            console.error("An unknown error occurred!");
    }
};
