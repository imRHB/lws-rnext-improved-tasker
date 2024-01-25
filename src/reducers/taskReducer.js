import { TASK_LIST } from "../data/tasks";

export const initialState = {
    taskList: [...TASK_LIST],
};

export const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                taskList: [...state.taskList, action.payload.newTask],
            };

        case "EDIT_TASK":
            return {
                ...state,
                taskList: state.taskList.map((task) => {
                    if (task.id === action.payload.newTask.id) {
                        return action.payload.newTask;
                    }
                    return task;
                }),
            };

        case "DELETE_TASK":
            return {
                ...state,
                taskList: state.taskList.filter(
                    (task) => task.id !== action.payload.taskId
                ),
            };

        case "TOGGLE_FAVORITE_TASK": {
            const updatedTaskList = state.taskList.map((task) => {
                if (task.id === action.payload.taskId) {
                    return {
                        ...task,
                        isFavorite: !task.isFavorite,
                    };
                }
                return task;
            });

            return {
                ...state,
                taskList: updatedTaskList,
            };
        }

        case "DELETE_ALL_TASKS":
            return {
                ...state,
                taskList: [],
            };

        case "SEARCH_TASK": {
            /* const clonedTaskList = [...TASK_LIST];
            const mergedTaskList = clonedTaskList.concat(
                state.taskList.filter(
                    (task) => clonedTaskList.indexOf(task.id) === -1
                )
            ); */

            return {
                ...state,
                // taskList: mergedTaskList.filter((task) =>
                //     task.title
                //         .toLowerCase()
                //         .includes(action.payload.searchTerm.toLowerCase())
                // ),
                taskList: state.taskList.filter((task) =>
                    task.title
                        .toLowerCase()
                        .includes(action.payload.searchTerm.toLowerCase())
                ),
            };
        }

        default:
            throw Error(`Unknown action type: ${action.type}`);
    }
};
