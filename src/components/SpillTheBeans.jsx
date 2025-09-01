import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'

const SpillTheBeansFirstPage = ({ clickedBeans, setClickedBeans }) => {
    return (
        <>
            <img
                src="/beans/clean plate bg.png"
                alt="Clean Page"
                className="w-full h-full object-cover absolute inset-0 z-0"
            />

            {/* Beans - with individual size control */}
            {[
                { id: 1, src: "/beans/Layer 1.png", x: 28, y: 30, rotation: 2, width: 90, height: 80 },
                { id: 2, src: "/beans/Layer 2.png", x: 47, y: 30, rotation: 0, width: 60, height: 80 },
                { id: 3, src: "/beans/Layer 3.png", x: 60, y: 30, rotation: 3, width: 75, height: 90 },
                { id: 4, src: "/beans/Layer 4.png", x: 28, y: 44, rotation: 2, width: 60, height: 80 },
                { id: 5, src: "/beans/Layer 5.png", x: 40, y: 40, rotation: -5, width: 70, height: 80 },
                { id: 6, src: "/beans/Layer 6.png", x: 55, y: 45, rotation: -3, width: 77, height: 53 },
                { id: 7, src: "/beans/Layer 7.png", x: 56, y: 54, rotation: 1, width: 72, height: 80 },
                { id: 8, src: "/beans/Layer 8.png", x: 52, y: 66, rotation: 90, width: 55, height: 90 },
                { id: 9, src: "/beans/Layer 9.png", x: 41, y: 53.5, rotation: 3, width: 70, height: 90 },
                { id: 10, src: "/beans/Layer 10.png", x: 29, y: 60, rotation: 1, width: 70, height: 80 },
            ].map(bean => {
                const isClicked = clickedBeans.includes(bean.id);
                return (

                    <AnimatePresence>
                        return !isClicked &&
                        <motion.img
                            key={`bean-${bean.id}`}
                            src={bean.src}
                            alt={`Bean ${bean.id}`}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: isClicked ? 0 : 1 }}

                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            onClick={() => {
                                if (!isClicked) {
                                    setClickedBeans((prev) => [...prev, bean.id]);
                                }
                            }}
                            style={{
                                left: `${bean.x}%`,
                                top: `${bean.y}%`,
                                width: `${bean.width}px`,
                                height: `${bean.height}px`,
                                transform: `rotate(${bean.rotation}deg)`,
                                zIndex: 10,
                            }}
                            className="absolute cursor-pointer"
                        />
                    </AnimatePresence>

                )
            })}
        </>
    )
}

const SpillTheBeansSecondPage = ({ clickedBeans }) => {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <img src="/book-pages/page53.jpg" alt="Page 53" className="w-full h-full object-cover" />
            {[
                { id: 1, src: "/beans/Layer 1.png", x: 28, y: 30, rotation: 2, width: 90, height: 80 },
                { id: 2, src: "/beans/Layer 2.png", x: 47, y: 30, rotation: 0, width: 60, height: 80 },
                { id: 3, src: "/beans/Layer 3.png", x: 60, y: 30, rotation: 3, width: 75, height: 90 },
                { id: 4, src: "/beans/Layer 4.png", x: 28, y: 44, rotation: 2, width: 60, height: 80 },
                { id: 5, src: "/beans/Layer 5.png", x: 40, y: 40, rotation: -5, width: 70, height: 80 },
                { id: 6, src: "/beans/Layer 6.png", x: 55, y: 45, rotation: -3, width: 77, height: 53 },
                { id: 7, src: "/beans/Layer 7.png", x: 56, y: 54, rotation: 1, width: 72, height: 80 },
                { id: 8, src: "/beans/Layer 8.png", x: 52, y: 66, rotation: 90, width: 55, height: 90 },
                { id: 9, src: "/beans/Layer 9.png", x: 41, y: 53.5, rotation: 3, width: 70, height: 90 },
                { id: 10, src: "/beans/Layer 10.png", x: 29, y: 60, rotation: 1, width: 70, height: 80 },
            ].map(bean => {
                const isVisible = clickedBeans.includes(bean.id);
                return (
                    <AnimatePresence>
                        <motion.img
                            key={`bean-${bean.id}`}
                            src={bean.src}
                            alt={`Bean ${bean.id}`}
                            initial={{ 
                                opacity: 0, 
                                scale: 0.5,
                                y: -120,
                                rotate: bean.rotation + 270
                            }}
                            animate={{ 
                                opacity: isVisible ? 1 : 0, 
                                scale: isVisible ? 1 : 0.5,
                                y: isVisible ? 0 : -120,
                                rotate: bean.rotation
                            }}
                            exit={{ opacity: 1 }}
                            transition={{ 
                                duration: 0.9,
                                type: "spring",
                                stiffness: 120,
                                damping: 14,
                                delay: (bean.id - 1) * 0.08
                            }}
                            className={`absolute transition-opacity duration-500 ease-in-out  ${clickedBeans.includes(bean.id) ? "opacity-100" : "opacity-0"}`}
                            style={{
                                left: `${bean.x}%`,
                                top: `${bean.y}%`,
                                width: `${bean.width}px`,
                                height: `${bean.height}px`,
                                zIndex: 10,
                            }}
                        />
                    </AnimatePresence>
                )
            })}

        </div>
    )

}

export { SpillTheBeansFirstPage, SpillTheBeansSecondPage }