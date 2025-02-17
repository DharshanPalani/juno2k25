import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const location = useLocation();
    const { pathname, search } = location; // Get both pathname & query params

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100); // Tiny delay ensures content loads first
    }, [pathname, search]); // Triggers on any URL change (path OR query)

    return null;
};

export default ScrollToTop;
