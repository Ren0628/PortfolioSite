import WorksItem from "./WorksItem";

function WorksSection({ imageUrl }) {
    return (
        <div id="Works" className="works py-32 md:py-36 px-8 md:px-0">
            <div className="mx-auto  max-w-6xl">
                <h2 className="text-4xl md:text-5xl text-center font-bold mb-10">
                    Works
                </h2>
                <p className="mx-auto leading-8 text-center">
                    学習の過程で制作したプロジェクトです。
                </p>
                <div className="flex flex-wrap justify-center">
                    <WorksItem
                        imageUrl={imageUrl}
                        imageName={"bill"}
                        appName={"手形帳入力アプリ"}
                        technicalStack={"HTML/CSS, BootStrap, JavaScript, PHP, Laravel, domPDF, MySQL"}
                        gitHubUrl={"https://github.com/Ren0628/bill-book-app"}
                        appLink={""}
                        appComment={"このアプリは、手形帳の入力を簡単にしたいという依頼を受けて作成したものです。LaravelとMySQLを使用してCRUD機能を実装し、JavaScriptのfetch APIを利用して入力フォームで振出人を入力すると関連情報が非同期で自動補完されるようにしました。さらに、前月の入力データをdomPDFでPDF化する処理をコマンドとして実装し、そのコマンドを呼び出すbatファイルを作成しました。これにより、Windowsのタスクスケジューラーを使って毎月自動的にPDFが保存されるようにしました。"}
                    />
                </div>
            </div>
        </div>
    );
}

export default WorksSection;
