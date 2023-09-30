import { useEffect } from 'react';

export default function ScoreKeeperComponent({ player1, player2, tie , xIsNext, winner, draw }) {
    useEffect(() => {
        const playerX = document.getElementById("X");
        const playerO = document.getElementById("O");

        if ( (!playerX && !playerO) || winner || draw) return;
      
        if (xIsNext) {
            playerX.style.color = "red";
            playerO.style.color = "white";
        } else {
            playerO.style.color = "red";
            playerX.style.color = "white";
        }
    }, [xIsNext]);

    return (
        <footer>
            <div className="scoreboard">
                <div className="scoreboard-player-container">
                    <div className="scoreboard-player-name">
                        <h2 className="scoreboard-player player-one">Player 1</h2>
                        <h2 id="X" className="scoreboard-player symbol">(X)</h2>
                    </div>
                    <h3 className="scoreboard-player-score">{player1}</h3>
                </div>
                <div className="scoreboard-player-container">
                    <h2 className="scoreboard-player-name tie">Tie</h2>
                    <h3 className="scoreboard-player-score">{tie}</h3>
                </div>
                <div className="scoreboard-player-container">
                    <div className="scoreboard-player-name">
                        <h2 className="scoreboard-player player">Player 2</h2>
                        <h2 id="O" className="scoreboard-player symbol">(O)</h2>
                    </div>
                    <h3 className="scoreboard-player-score">{player2}</h3>
                </div>
            </div>
        </footer>
    );
}