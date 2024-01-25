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

        default:
            throw Error(`Unknown action type: ${action.type}`);
    }
};
