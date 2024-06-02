import ScrollFadeIn from "./ScrollFadeIn";

function SkillItem({ heading, sub, text }) {
    return (
        <div className="md:w-1/2 mb-20 flex justify-center">
            <ScrollFadeIn>
                <div className="h-full mx-5 md:mx-2 bg-white rounded-lg">
                    <h3 className="text-center font-bold text-2xl mb-2 p-5">
                        {heading}
                    </h3>
                    <div className="text-xl text-center">({sub})</div>
                    <p className="mt-2 leading-8 font-light p-5">{text}</p>
                </div>
            </ScrollFadeIn>
        </div>
    );
}

export default SkillItem;
