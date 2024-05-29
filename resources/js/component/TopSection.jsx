function TopSection() {
    return (
        <div className="top_section h-screen flex flex-col justify-center items-center">
            <div className="top_logo font-bold inline-block scale-75 md:scale-100 flex">
                <span className="top_logo_D">D</span>
                <span className="top_logo_e">e</span>
                <span className="top_logo_v">v</span>
                <span className="top_logo_dot">.</span>
                <span className="top_logo_bg"></span>
            </div>
            <div className="top_text font-bold text-5xl md:text-7xl">Portfolio</div>
        </div>
    );
}

export default TopSection;
