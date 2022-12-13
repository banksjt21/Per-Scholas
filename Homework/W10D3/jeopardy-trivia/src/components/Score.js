import { useState } from 'react';

export default function Score() {

    const [score, setScore] = useState(0);

    const handleDecrease = () => {
        setScore(score - 100);
    }

    const handleIncrease = () => {
        setScore(score + 100);
    }

    const handleReset = () => {
        setScore(0);
    }


    return (
        <>
            <div id="score" className='centerText'>
                <span className="title displayBlock">Score:</span>
                <span className="value">{score}</span>
            </div>
            <div id="scoreButtons">
                <button onClick={handleDecrease} className="colorPink">Decrease</button>
                <button onClick={handleIncrease} className="colorBlue">Increase</button>
                <button onClick={handleReset}    className="colorRed">Reset</button>
            </div>
        </>
    )
}