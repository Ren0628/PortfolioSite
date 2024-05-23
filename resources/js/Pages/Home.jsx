import { Head } from "@inertiajs/react";
import Header from "../component/Header";
import TopSection from "@/component/TopSection";
import AboutThisSiteSection from "@/component/AboutThisSiteSection";

export default function Welcome() {

    return (
        <>
            <Head title="Tawa's Dev Portfolio" />
            <Header />
            <TopSection />
            <AboutThisSiteSection />
            <div className="box"></div>
        </>
    );
}
