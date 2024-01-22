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
        </>
    );
}

export default App;
