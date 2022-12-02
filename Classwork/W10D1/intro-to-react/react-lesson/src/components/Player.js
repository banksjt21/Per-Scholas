function Player(props) {
    console.log(props.whichPlayer);

    // Rendering props:
    // We can use JS inside our JSX.
    return(
        <div className={props.whichPlayer}>
            <h2>Player {props.whichPlayer}</h2>
            <h3>Wins:</h3>
        </div>
    )
}

export default Player;