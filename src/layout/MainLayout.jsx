import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";


const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer>

            </footer>


        </div>
    );
};

export default MainLayout;