function AboutMeItem({ heading, content }) {
    return (
        <>
            <h3 className="text-center font-bold text-2xl pt-3">{heading}</h3>
            <p className="px-10 pt-5 pb-10 leading-8 font-light">
                {content}
            </p>
        </>
    );
}

export default AboutMeItem;
