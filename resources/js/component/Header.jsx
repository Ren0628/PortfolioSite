import BurgerMenu from "./BurgerMenu";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-60">
            <nav className="flex justify-between mx-auto container">
                <div className="text-3xl ml-8 font-bold"><a className="flex h-full items-center" href="#">Portfolio</a></div>
                <ul className="space-x-10 font-bold mr-8 text-lg hidden md:flex">
                    <li><a className="flex h-full items-center py-4" href="#">Top</a></li>
                    <li><a className="flex h-full items-center py-4" href="#AboutThisSite">About this site</a></li>
                    <li className="relative group">
                        <a className="flex h-full items-center py-4" href="#">About me</a>
                        <ul className="w-28 absolute inset-x-1/2 bg-white bg-opacity-60 rounded-b-md invisible group-hover:visible opacity-0 group-hover:opacity-100 -translate-y-2 -translate-x-1/2 group-hover:translate-y-0 ease-in-out duration-500">
                            <li><a className="flex h-full items-center justify-center py-2 mx-8" href="#">Works</a></li>
                            <li><a className="flex h-full items-center justify-center py-2 mx-9" href="#">Slills</a></li>
                        </ul>
                    </li>
                    <li><a className="flex h-full items-center py-4" href="#">Contact</a></li>
                </ul>
                <BurgerMenu />
            </nav>
        </header>
    );
}

