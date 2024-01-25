import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Hero from "./components/Hero";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import TaskBoard from "./components/task/TaskBoard";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <TaskBoard />
            <Footer />

            <ToastContainer
                position="bottom-right"
                theme="dark"
                stacked
                hideProgressBar
            />
        </>
    );
}

export default App;
