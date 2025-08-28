import React, { useState } from 'react'

const RandomizerPage = () => {
    const [randomNumbers, setRandomNumbers] = useState([77, 77, 77]);
    const [randomNumbers1, setRandomNumbers1] = useState([77, 77, 77]);
    const [randomNumbers2, setRandomNumbers2] = useState([77, 77, 77]);
    const [loadingTop, setLoadingTop] = useState(false);
    const [loadingMiddle, setLoadingMiddle] = useState(false);
    const [loadingBottom, setLoadingBottom] = useState(false);

    const Randomizer = [77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 101, 103];

    const getRandomNumbers = () => {
        setLoadingTop(true);
        setTimeout(() => {
            const shuffled = [...Randomizer].sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 3);
            setRandomNumbers(selected);
            setLoadingTop(false);
        }, 1000);
    };

    const getRandomNumbers1 = () => {
        setLoadingMiddle(true);
        setTimeout(() => {
            const shuffled = [...Randomizer].sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 3);
            setRandomNumbers1(selected);
            setLoadingMiddle(false);
        }, 1000);
    };

    const getRandomNumbers2 = () => {
        setLoadingBottom(true);
        setTimeout(() => {
            const shuffled = [...Randomizer].sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 3);
            setRandomNumbers2(selected);
            setLoadingBottom(false);
        }, 1000);
    };
    return (
        <div className="flex flex-col w-full h-full">
            {/* Top Part */}
            <div className="w-full h-1/3 overflow-hidden cursor-pointer relative" onClick={getRandomNumbers}>
                {loadingTop ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-white">
                        <div className="w-10 h-10 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
                    </div>
                ) : (<img
                    src={`/book-pages/page${randomNumbers[0]}.jpg`}
                    alt={`Page ${randomNumbers[0]}`}
                    className="w-full relative"
                    style={{ height: "300%", top: "0%" }} // show top section
                />)}
            </div>

            {/* Middle Part */}
            <div className="w-full h-1/3 overflow-hidden cursor-pointer relative" onClick={getRandomNumbers1}>
                {loadingMiddle ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-white">
                        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                    </div>
                ) : (<img
                    src={`/book-pages/page${randomNumbers1[1]}.jpg`}
                    alt={`Page ${randomNumbers1[1]}`}
                    className="w-full relative"
                    style={{ height: "300%", top: "-100%" }} // move up to show middle
                />)}
            </div>

            {/* Bottom Part */}
            <div className="w-full h-1/3 overflow-hidden cursor-pointer relative" onClick={getRandomNumbers2}>
                {loadingBottom ? (

                    <div className="absolute inset-0 flex items-center justify-center bg-white">
                        <div className="w-10 h-10 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
                    </div>
                ) : (<img
                    src={`/book-pages/page${randomNumbers2[2]}.jpg`}
                    alt={`Page ${randomNumbers2[2]}`}
                    className="w-full relative"
                    style={{ height: "300%", top: "-200%" }} // move up to show bottom
                />)}
            </div>
        </div>

    )
}

export default RandomizerPage
