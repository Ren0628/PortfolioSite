import ScrollFadeIn from "./ScrollFadeIn";

function AboutThisSiteSection() {
    return (
        <div id="AboutThisSite" className="about_this_site py-32 md:py-36 px-12 md:px-24">
            <ScrollFadeIn>
                <h2 className="text-4xl md:text-5xl text-center font-bold mb-10">
                    About this site
                </h2>
                <p className="mx-auto leading-8">
                    このポートフォリオサイトは、エンジニアになるために約1年間にわたり学んできた内容をまとめたものです。
                    学習の成果や制作物、私自身について詳しく紹介しています。
                    ぜひご覧いただき、私の成長の過程とスキルを見ていただければと思います。
                </p>
            </ScrollFadeIn>
        </div>
    );
}

export default AboutThisSiteSection;
