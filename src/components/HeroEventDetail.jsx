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

const formatNumber = (num, isPrize) => {
    if (isPrize) return num + "k+";
    return num;
};

function Counter({ endValue, isPrize, startCounting }) {
    const [count, setCount] = useState(0);
    const [duration] = useState(5);

    useEffect(() => {
        let start = count;
        const end = endValue;
        const incrementTime = Math.abs(Math.floor(duration * 1000 / endValue));

        if (!startCounting) return;

        const counterInterval = setInterval(() => {
            if (start < end) {
                start++;
                setCount(start);
            } else {
                clearInterval(counterInterval);
            }
        }, incrementTime);

        return () => clearInterval(counterInterval);
    }, [endValue, duration, startCounting, count]);

    return <motion.h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-gold">{formatNumber(count, isPrize)}</motion.h6>;
}

function HeroEventDetail() {
    const [startCounting, setStartCounting] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setStartCounting(true);
                    } else {
                        setStartCounting(false);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-10 py-10"
            ref={sectionRef}
        >
            <motion.div variants={fadeInUp} className="flex items-center justify-center">
                <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center font-bold pt-20 capitalize">
                    Events
                </h1>
            </motion.div>
            <div className="px-0 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
                <motion.div variants={staggerContainer} className="grid grid-cols-2 row-gap-8 md:grid-cols-4 gap-8">
                    {[
                        { label: "Days", value: 2, isPrize: false },
                        { label: "Events", value: 14, isPrize: false },
                        { label: "Prizes", value: 100, isPrize: true },
                        { label: "Stalls", value: 20, isPrize: false },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className={`text-center ${index % 2 === 0 ? "md:border-r" : ""} last:border-none`}
                        >
                            <Counter endValue={item.value} isPrize={item.isPrize} startCounting={startCounting} />
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
