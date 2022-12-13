export default function Reveal( {trivia, setQuestion, question} ) {

    const handleClick = () => {
        setQuestion(trivia.answer);
    }
    
    return (
        <div id="reveal" className="centerText">
            <button onClick={handleClick} className="colorNavy">Click to Reveal Question</button>
            <div className="centerText">
                <span className="title">Question</span>
                <span className="value">{question}</span>
            </div>
        </div>
    )
}