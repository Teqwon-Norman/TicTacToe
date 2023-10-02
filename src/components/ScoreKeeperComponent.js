import { useEffect } from 'react';

// { player1, player2, tie , xIsNext, winner, draw }

export default function ScoreKeeperComponent(props) {
    useEffect(() => {
        const playerX = document.getElementById("X");
        const playerO = document.getElementById("O");

        if ( (!playerX && !playerO) || props.winner || props.draw) return;
      
        if (props.xIsNext) {
            playerX.style.color = "red";
            playerO.style.color = "white";
        } else {
            playerO.style.color = "red";
            playerX.style.color = "white";
        }
    }, [props.xIsNext, props.draw, props.winner]);

    return (
        <footer>
            <div className="scoreboard">
                <div className="scoreboard-player-container">
                    <div className="scoreboard-player-name">
                        <h2 className="scoreboard-player player-one">Player 1</h2>
                        <h2 id="X" className="scoreboard-player symbol">(X)</h2>
                    </div>
                    <h3 className="scoreboard-player-score">{ props.player1 }</h3>
                </div>
                <div className="scoreboard-player-container">
                    <h2 className="scoreboard-player-name tie">Tie</h2>
                    <h3 className="scoreboard-player-score">{ props.tie }</h3>
                </div>
                <div className="scoreboard-player-container">
                    <div className="scoreboard-player-name">
                        <h2 className="scoreboard-player player">Player 2</h2>
                        <h2 id="O" className="scoreboard-player symbol">(O)</h2>
                    </div>
                    <h3 className="scoreboard-player-score">{ props.player2 }</h3>
                </div>
            </div>
        </footer>
    );
}