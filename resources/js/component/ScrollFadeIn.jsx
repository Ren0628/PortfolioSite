import { useInView } from "react-intersection-observer";

function ScrollFadeIn({ children }) {
    const { ref, inView } = useInView({
        rootMargin: "-100px",
        triggerOnce: true,
    });

    return (
        <div ref={ref} className={`scroll_fade_in ${inView ? "scroll_fade_in_active" : ""}`}>
            {children}
        </div>
    );
}

export default ScrollFadeIn;
