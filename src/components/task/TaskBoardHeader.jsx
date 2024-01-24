/* eslint-disable react/prop-types */

import TaskBoardAction from "./TaskBoardAction";

export default function TaskBoardHeader() {
    return (
        <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>

            <TaskBoardAction />
        </div>
    );
}
