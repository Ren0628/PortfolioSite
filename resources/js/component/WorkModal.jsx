function WorkModal({
    appName,
    technicalStack,
    gitHubUrl,
    appLink,
    appComment,
    imageUrl,
    imageName,
    handleClose,
}) {
    return (
        <div className="work_modal rounded-xl overflow-scroll md:overflow-auto">
            <div className="close_icon">
                <i
                    onClick={handleClose}
                    className="fa-solid fa-xmark fa-2x cursor-pointer"
                ></i>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <p className="font-bold text-center mb-2">{appName}</p>
                    <a href={appLink} className="flex flex-wrap cursor-pointer border-black border-2 mb-4">
                        <img src={`${imageUrl}/${imageName}1.png`} alt="" />
                        <img src={`${imageUrl}/${imageName}2.png`} alt="" />
                        <img src={`${imageUrl}/${imageName}3.png`} alt="" />
                        <img src={`${imageUrl}/${imageName}4.png`} alt="" />
                    </a>
                    <div>
                        <p className="text-center font-bold mb-2">
                            技術スタック
                        </p>
                        <p className="leading-8 border-black border-2 rounded-xl p-2">
                            {technicalStack}
                        </p>
                    </div>
                    <div className="mt-8">
                        <div className="flex justify-center">
                            <a className="link_logo text-3xl" href={gitHubUrl}>
                                <i className="fa-brands fa-github"></i>GitHub
                            </a>
                        </div>
                        <div className="flex justify-center mt-4">
                            <a className="link_logo text-3xl" href={appLink}>
                                App{" "}
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="md:px-4 leading-8 mt-8 flex justify-center">
                        <p className="font-light">{appComment}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkModal;
