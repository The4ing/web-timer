
function Buttons({onStart, onStop, onReset,isRunning}) {
    return (
        <div className="button-container">
            <button
                className="my-button" onClick={onStart}>START
            </button>
            <button
                className="my-button" onClick={onStop}>STOP
            </button>
            <button
                className="my-button" onClick={onReset}>RESET
            </button>
        </div>
    );
}
export default Buttons;