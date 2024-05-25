import { useState } from "react";
import GrayWrap from "./GrayWrap";
import WorkModal from "./WorkModal";

function WorksItem({
    imageUrl,
    imageName,
    appName,
    technicalStack,
    gitHubUrl,
    appLink,
    appComment,
}) {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className="works_item w-96 md:mx-5 my-10">
                <div
                    onClick={handleModalOpen}
                    className="flex flex-wrap cursor-pointer"
                >
                    <img src={`${imageUrl}/${imageName}1.png`} alt="" />
                    <img src={`${imageUrl}/${imageName}2.png`} alt="" />
                    <img src={`${imageUrl}/${imageName}3.png`} alt="" />
                    <img src={`${imageUrl}/${imageName}4.png`} alt="" />
                </div>
                <div className="flex justify-center">
                    <p className="text-center font-bold mt-6 text-lg">
                        {appName}
                    </p>
                </div>
            </div>
            {modalOpen && <GrayWrap handleClose={handleModalClose} />}
            {modalOpen && (
                <WorkModal
                    appName={appName}
                    technicalStack={technicalStack}
                    gitHubUrl={gitHubUrl}
                    appLink={appLink}
                    appComment={appComment}
                    imageUrl={imageUrl}
                    imageName={imageName}
                    handleClose={handleModalClose}
                />
            )}
        </>
    );
}

export default WorksItem;
