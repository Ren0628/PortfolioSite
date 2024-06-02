import ScrollFadeIn from "./ScrollFadeIn";
import SkillItem from "./SkillItem";

function SkillsSection() {
    return (
        <div id="Skills" className="skills py-32 md:py-36 md:px-12">
            <ScrollFadeIn>
                <h2 className="text-4xl md:text-5xl text-center font-bold mb-10">
                    Slills
                </h2>
                <p className="mx-auto text-center leading-8">
                    これまでに習得した技術を紹介します。
                </p>
            </ScrollFadeIn>
            <div className="mt-20 mx-auto flex flex-col md:flex-row md:flex-wrap max-w-screen-xl">
                <SkillItem
                    heading={"HTML&CSS"}
                    sub={"Bootstrap, Tailwind CSS"}
                    text={
                        "基本的な知識を学んだ後、模写コーディングを通じて様々なデザインのサイトを再現し、応用力を身につけました。また、作成したWebサイトをBootstrapやTailwind CSSを用いてリファクタリングすることで、これらのフレームワークも習得しました。"
                    }
                />
                <SkillItem
                    heading={"JavaScript"}
                    sub={"jQuery, React"}
                    text={
                        "基礎文法を学んだ後、電卓やタイピングゲームなどを作成することで、関数や配列、オブジェクトの使い方に慣れました。また、DOM操作やjQueryを学ぶことでモーダルやカルーセルなどが実装された動きあるWeb制作ができるようになりました。さらに、Reactのコンポーネント化やstate、Hooksを学ぶことで、SPA（シングルページアプリケーション）の実装ができるようになりました。"
                    }
                />
                <SkillItem
                    heading={"PHP"}
                    sub={"Laravel, WordPress"}
                    text={
                        "基礎文法を学んだ後、Todoアプリなど簡単なCRUD機能をLaravelで実装することで、フレームワークの使い方に慣れました。さらに、Laravel/uiやBreezeを使った認証機能の実装や、メールでの二段階認証の導入により、認証に関する知識を身につけました。また、マルチ認証やカート機能の実装を通じて、データベースのリレーションの強力さも学ぶことができました。WordPressでは、既存のWebサイトをWordPress化することで、WordPressの機能を学び、サイト管理の簡略化が実現できるようになりました。"
                    }
                />
                <SkillItem
                    heading={"SQL"}
                    sub={"MySQL"}
                    text={
                        "MySQLの基本的なSQL文での操作を学び、ユーザーの作成やデータベースの作成方法を習得しました。さらに、Laravelと連携し、Eloquentを用いたデータベース操作も習得しました。"
                    }
                />
                <SkillItem
                    heading={"Linux"}
                    sub={"Ubuntu, Amazon Linux"}
                    text={
                        "VirtualBoxでUbuntuを用いて、Apache、MySQL、PHP、Composer、Node.jsを使ったWebサーバー上でのLaravelの環境構築を行いました。これにより、基本的なコマンド操作を学び、環境構築中に発生したエラーを解決する過程で、php.iniやhttpd.confの設定方法を習得しました。そして、AWSのEC2のAmazon Linux上にWebサーバーを構築し、Route 53でのドメイン取得、Certificate Managerでの証明書取得、ロードバランサーの作成を行いました。これにより、このポートフォリオサイトやサンプルアプリを公開しています。"
                    }
                />
            </div>
        </div>
    );
}

export default SkillsSection;
