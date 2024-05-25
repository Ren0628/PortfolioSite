import { Head } from "@inertiajs/react";
import Header from "../component/Header";
import TopSection from "@/component/TopSection";
import AboutThisSiteSection from "@/component/AboutThisSiteSection";
import Footer from "@/component/Footer";
import ContactSection from "@/component/ContactSection";
import AboutMeSection from "@/component/AboutMeSection";
import WorksSection from "@/component/WorksSection";
import SkillsSection from "@/component/SkillsSection";

export default function Welcome({ imageUrl }) {

    return (
        <>
            <Head title="Tawa's Dev Portfolio" />
            <Header />
            <TopSection />
            <AboutThisSiteSection />
            <AboutMeSection />
            <WorksSection imageUrl={imageUrl} />
            <SkillsSection />
            <ContactSection />
            <Footer />
        </>
    );
}
