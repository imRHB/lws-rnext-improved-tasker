import { useTaskContext } from "../../hooks/index.js";
import AddTaskModal from "../ui/AddTaskModal.jsx";
import ConfirmationModal from "../ui/ConfirmationModal.jsx";
import TaskBoardHeader from "./TaskBoardHeader.jsx";
import TaskList from "./TaskList";

export default function TaskBoard() {
    const { showModal, confirmModal } = useTaskContext();

    return (
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
    );
}
