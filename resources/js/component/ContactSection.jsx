import ContactForm from "./ContactForm";
import ScrollFadeIn from "./ScrollFadeIn";

function ContactSection() {
    return (
        <div id="Contact" className="py-28 px-12 md:px-24">
            <ScrollFadeIn>
                <h2 className="text-4xl md:text-5xl text-center font-bold mb-10">
                    Contact
                </h2>
                <p className="mx-auto leading-8">
                    ここまでご覧いただき、ありがとうございます。私のポートフォリオや私自身についてご質問やご意見がありましたら、ぜひ以下のフォームからご連絡ください。お待ちしております。
                </p>
            </ScrollFadeIn>
            <ScrollFadeIn>
                <ContactForm />
            </ScrollFadeIn>
        </div>
    );
}

export default ContactSection;
