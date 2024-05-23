import { useState } from "react";
import NavSidebar from "@/component/NavSidebar";
import GrayWrap from "@/component/GrayWrap";

function BurgerMenu() {
    const [NavSidebarOpen, setNavSidebarOpen] = useState(false);
    const [WrapOn, setWrapOn] = useState(false);

    const handleNavSidebarOpen = () => {
        setWrapOn(true);
        setNavSidebarOpen(true);
    }

    const handleNavSidebarClose = () => {
        setWrapOn(false);
        setNavSidebarOpen(false);
    }

    return (
        <>
            <div onClick={handleNavSidebarOpen} className="md:hidden mr-8 py-4">
                <i className="fa-solid fa-bars-staggered fa-2x cursor-pointer"></i>
            </div>
            <NavSidebar NavSidebarOpen={NavSidebarOpen} />
            {WrapOn && <GrayWrap handleClose={handleNavSidebarClose} />}
        </>
    );
}

export default BurgerMenu;
