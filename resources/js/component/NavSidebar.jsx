
function NavSidebar({ NavSidebarOpen }) {

  return (
    <div className={`NavSidebar pt-8 pl-20 ${NavSidebarOpen && 'active'}`}>
        <ul className="font-bold text-lg">
            <li><a className="inline-block mb-3" href="#">Top</a></li>
            <li><a className="inline-block mb-3" href="#AboutThisSite">About this site</a></li>
            <li><a className="inline-block mb-3" href="#">About me</a></li>
            <li><a className="inline-block mb-3" href="#">Works</a></li>
            <li><a className="inline-block mb-3" href="#">Slills</a></li>
            <li><a className="inline-block mb-3" href="#">Contact</a></li>
        </ul>
    </div>
  )
}

export default NavSidebar