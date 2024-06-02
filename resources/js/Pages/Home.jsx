import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Header from "../component/Header";
import TopSection from "@/component/TopSection";
import AboutThisSiteSection from "@/component/AboutThisSiteSection";
import Footer from "@/component/Footer";
import ContactSection from "@/component/ContactSection";
import AboutMeSection from "@/component/AboutMeSection";
import WorksSection from "@/component/WorksSection";
import SkillsSection from "@/component/SkillsSection";
import GrayWrap from "@/component/GrayWrap";
import FormSuccessMordal from "@/component/FormSuccessMordal";

export default function Welcome(props) {

    const [formSuccess, setFormSuccess] = useState(false);
    const { success } = props;

    useEffect(() => {
        if(success) {
            setFormSuccess(true);
        }
    }, [success]);

    const handleClose = () => {
        setFormSuccess(false);
    }
    
    return (
        <>
            <Head title="Tawa's Dev Portfolio" />
            <Header />
            <TopSection />
            <AboutThisSiteSection />
            <AboutMeSection />
            <WorksSection imageUrl={props.imageUrl} />
            <SkillsSection />
            <ContactSection />
            <Footer />
            {formSuccess && <GrayWrap handleClose={handleClose} />}
            {formSuccess && <FormSuccessMordal handleClose={handleClose} />}
        </>
    );
}
