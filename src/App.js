import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';

const App = () => {
	const [turn, setTurn] = useState('X');
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [score, setScore] = useState({
		X: 0,
		O: 0,
	});

	const checkForWinner = (squares) => {
		setTurn(turn === 'X' ? 'O' : 'X'); //cambio de quien es el turno (uso ternario: el turno el = a x ?
		// entonces lo remplazo por el turno de o y si no se cumople sera por defecto de x )
	};

	const handleClick = (square) => {
		let newSquares = [...squares];
		newSquares.splice(square, 1, turn);
		setSquares(newSquares);
		checkForWinner(newSquares);
	};

	return (
		<div className="Container">
			<Board turn={turn} squares={squares} onClick={handleClick} />
		</div>
	);
};

export default App;
