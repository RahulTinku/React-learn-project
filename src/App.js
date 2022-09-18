
import './App.css';
import Board from './Board';
import Info from './Info';

import { useState } from 'react';

export default function App() {
    //creating reset state to Reset the game to original state
    const [reset, setReset] = useState(false);
    // state for storing Winner of the game
    const [winner, setWinner] = useState('');

    // Reset board function, which reset the board
    const resetBoard = () => {
        setReset(true);
    }

    return (
        <div className="App">
            {/* Shrink the Section when there is no Winner */}
            <div className={`winner ${winner !== '' ? '' : 'shrink'} `}>
                {/* Display the current winner */}
                <div className="winner-text">
                    {winner}
                </div>
                {/** Button to reset the board */}
                <button onClick={() => resetBoard()}>
                    Reset Board
                </button>
            </div>
            <Board reset={reset} setReset={setReset} winner={winner} 
                setWinner={setWinner}/>
            <Info />
        </div>
    )
}