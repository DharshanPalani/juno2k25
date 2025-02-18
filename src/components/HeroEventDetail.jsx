import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const formatNumber = (num, isPrize, isStall) => {
    if (isPrize) return `${num}k+`;
    if (isStall) return `${num}+`;
    return num;
};

function Counter({ endValue, isPrize, isStall, startCounting }) {
    const [count, setCount] = useState(0);
    const duration = 5;

    useEffect(() => {
        if (!startCounting) return;

        let start = 0;
        const incrementTime = Math.floor((duration * 1000) / endValue);

        const counterInterval = setInterval(() => {
            setCount((prev) => {
                if (prev < endValue) return prev + 1;
                clearInterval(counterInterval);
                return prev;
            });
        }, incrementTime);

        return () => clearInterval(counterInterval);
    }, [endValue, startCounting]);

    return <motion.h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-gold">{formatNumber(count, isPrize, isStall)}</motion.h6>;
}

function HeroEventDetail() {
    const [startCounting, setStartCounting] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setStartCounting(entry.isIntersecting),
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    const eventStats = [
        { label: "Days", value: 2, isPrize: false, isStall: false },
        { label: "Events", value: 15, isPrize: false, isStall: false },
        { label: "Prizes", value: 100, isPrize: true, isStall: false },
        { label: "Stalls", value: 20, isPrize: false, isStall: true },
    ];

    return (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-10 py-10" ref={sectionRef}>
            <motion.div variants={fadeInUp} className="flex items-center justify-center">
                <h1 className="text-white font-black text-center font-bold pt-20 capitalize md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Events
                </h1>
            </motion.div>
            <div className="px-0 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
                <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {eventStats.map((item, index) => (
                        <motion.div key={index} variants={fadeInUp} className={`text-center ${index % 2 === 0 ? "md:border-r" : ""}`}>
                            <Counter endValue={item.value} isPrize={item.isPrize} isStall={item.isStall} startCounting={startCounting} />
                            <p className="text-sm font-medium tracking-widest text-gold uppercase lg:text-base">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}

export default HeroEventDetail;
