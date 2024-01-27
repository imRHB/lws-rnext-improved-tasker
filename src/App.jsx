import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Hero from "./components/Hero";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import TaskBoard from "./components/task/TaskBoard";
import TaskProvider from "./components/TaskProvider";

function App() {
    return (
        <TaskProvider>
            <Navbar />
            <Hero />
            <TaskBoard />
            <Footer />

            <ToastContainer
                position="bottom-right"
                theme="dark"
                toastStyle={{
                    backgroundColor: "#191D26",
                    border: "1px solid rgba(206,206,206,0.12)",
                }}
                stacked
                hideProgressBar
            />
        </TaskProvider>
    );
}

export default App;
