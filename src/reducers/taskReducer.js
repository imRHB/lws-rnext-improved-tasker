import { TASK_LIST } from "../data/tasks";

export const initialState = {
    taskList: TASK_LIST,
    message: "Task reducer",
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
            const taskIdx = state.taskList.findIndex(
                (task) => task.id === action.payload.taskId
            );

            const clonedTaskList = [...state.taskList];
            clonedTaskList[taskIdx].isFavorite =
                !clonedTaskList[taskIdx].isFavorite;

            console.log(clonedTaskList);

            return {
                ...state,
                taskList: [...state.taskList],
            };
        }

        case "DELETE_ALL_TASKS":
            return {
                ...state,
                taskList: [],
            };

        case "SEARCH_TASK": {
            // const mergedTaskList = state.taskList.concat(
            //     TASK_LIST.filter((task) => state.taskList.indexOf(task) < 0)
            // );

            return {
                ...state,
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
