
function NavSidebar({ handleClose, NavSidebarOpen }) {

  return (
    <div className={`NavSidebar pt-8 pl-20 ${NavSidebarOpen && 'active'}`}>
      <div className="flex justify-end pr-20 mb-4"><i onClick={handleClose} className="fa-solid fa-xmark fa-2x cursor-pointer"></i></div>
        <ul className="font-bold text-lg">
            <li><a className="inline-block mb-3" href="#">Top</a></li>
            <li><a className="inline-block mb-3" href="#AboutThisSite">About this site</a></li>
            <li><a className="inline-block mb-3" href="#AboutMe">About me</a></li>
            <li><a className="inline-block mb-3" href="#Works">Works</a></li>
            <li><a className="inline-block mb-3" href="#Skills">Slills</a></li>
            <li><a className="inline-block mb-3" href="#Contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default NavSidebar