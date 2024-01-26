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

        case "SEARCH_TASK":
            return {
                ...state,
                taskList: state.taskList.filter((task) =>
                    task.title
                        .toLowerCase()
                        .includes(action.payload.searchTerm.toLowerCase())
                ),
            };

        /* test block */
        case "SEARCH_TEST_TASK": {
            const mergedTaskList = [...TASK_LIST, ...state.taskList];
            const updatedTaskList = [...new Set(mergedTaskList)];

            return {
                ...state,
                taskList: updatedTaskList.filter((task) =>
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
