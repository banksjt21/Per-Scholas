export default function Play( {getTrivia, setQuestion} ) {

    const handleGetTrivia = () => {
        getTrivia();
        setQuestion("");
        
        // document.querySelector("#reveal .value").textContent = ""; // Change this using state?
    }


    return (
        <>
            <div id="play">
                <span className="title">Let's Play!</span>
            </div>
            <button onClick={handleGetTrivia} id="playButton" className="colorYellow">Get Trivia</button>
        </>
    )
}