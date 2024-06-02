import ScrollFadeIn from "./ScrollFadeIn";
import AboutMeItem from "./AboutMeItem";

function AboutMeSection() {
    return (
        <div id="AboutMe" className="about_me py-32 md:py-36 px-12 md:px-24">
            <ScrollFadeIn>
                <h2 className="text-4xl md:text-5xl text-center font-bold mb-10">
                    About me
                </h2>
                <p className="mx-auto text-center leading-8">
                    簡単に自己紹介をさせていただきます。
                </p>
            </ScrollFadeIn>
            <div className="flex flex-col md:flex-row md:flex-wrap mt-12 max-w-screen-xl mx-auto">
                <div className=" md:w-1/2">
                    <ScrollFadeIn>
                        <div className="border-black border-t-2 md:border-t-0 md:border-r-2 border-b-2 md:border-b-0 h-full">
                            <AboutMeItem
                                heading={"Introduce"}
                                content={
                                    "広島県出身の田和蓮と申します。Web開発を中心にフロントエンド、バックエンド、インフラと幅広く学習してきました。"
                                }
                            />
                        </div>
                    </ScrollFadeIn>
                </div>
                <div className=" md:w-1/2">
                    <ScrollFadeIn>
                        <div className="border-black border-b-2 md:border-b-0 h-full">
                            <AboutMeItem
                                heading={"Experience"}
                                content={
                                    "各言語の基礎文法を学び、Webアプリを再現することで応用力を身に着けてきました。様々な仕様のWebアプリを制作する過程で、実際にWeb上で動くものを完成させることを常に意識して取り組んできました。"
                                }
                            />
                        </div>
                    </ScrollFadeIn>
                </div>
                <div className=" md:w-1/2">
                    <ScrollFadeIn>
                        <div className="border-black border-b-2 md:border-b-0 md:border-r-2 md:border-t-2 h-full">
                            <AboutMeItem
                                heading={"Hobby"}
                                content={
                                    "プログラミング以外では、PCオンラインゲームや、8歳から続けているゴルフが趣味です。"
                                }
                            />
                        </div>
                    </ScrollFadeIn>
                </div>
                <div className=" md:w-1/2">
                    <ScrollFadeIn>
                        <div className="border-black border-b-2 md:border-b-0 md:border-t-2 h-full">
                            <AboutMeItem
                                heading={"Vision"}
                                content={
                                    "将来的には、多くのプロジェクトに挑戦し、技術力を高め続け、様々な領域で活躍できるようになりたいと考えています。新しい技術や手法を積極的に取り入れ、ユーザーにとって価値のあるものを作れるエンジニアを目指しています。"
                                }
                            />
                        </div>
                    </ScrollFadeIn>
                </div>
            </div>
        </div>
    );
}

export default AboutMeSection;
