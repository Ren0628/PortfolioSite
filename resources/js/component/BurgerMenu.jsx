import { useState } from "react";
import NavSidebar from "@/component/NavSidebar";
import GrayWrap from "@/component/GrayWrap";

function BurgerMenu() {
    const [NavSidebarOpen, setNavSidebarOpen] = useState(false);

    const handleNavSidebarOpen = () => {
        setNavSidebarOpen(true);
    }

    const handleNavSidebarClose = () => {
        setNavSidebarOpen(false);
    }

    return (
        <>
            <div onClick={handleNavSidebarOpen} className="md:hidden mr-8 py-4">
                <i className="fa-solid fa-bars fa-2x cursor-pointer"></i>
            </div>
            <NavSidebar handleClose={handleNavSidebarClose} NavSidebarOpen={NavSidebarOpen} />
            {NavSidebarOpen && <GrayWrap handleClose={handleNavSidebarClose} />}
        </>
    );
}

export default BurgerMenu;
