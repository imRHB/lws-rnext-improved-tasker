import { useContext } from "react";
import { toast } from "react-toastify";

import { TaskContext } from "../../context";

export default function ConfirmationModal() {
    const { dispatch, setConfirmModal } = useContext(TaskContext);

    function handleDeleteAllTasks() {
        event.preventDefault();

        dispatch({
            type: "DELETE_ALL_TASKS",
        });

        setConfirmModal(false);
        toast.success("All tasks has been deleted!");
    }

    return (
        <>
            <div className="bg-[#191D26] bg-opacity-90 h-full w-full z-50 absolute top-0 left-0" />

            <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
                    Delete Task
                </h2>

                <div className="space-y-9 text-white lg:space-y-10">
                    <p>
                        Are you sure you want to delete this task? This action
                        cannot be undone.
                    </p>
                </div>

                <div className="mt-16 flex items-center justify-between lg:mt-20">
                    <button
                        type="button"
                        className="rounded bg-zinc-700 px-4 py-2 text-white transition-all hover:opacity-80"
                        onClick={() => setConfirmModal(false)}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
                        onClick={handleDeleteAllTasks}
                    >
                        Confirm
                    </button>
                </div>
            </form>
        </>
    );
}
