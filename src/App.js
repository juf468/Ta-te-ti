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

	const winningPositions = [
		//estas son las posiciones ganadoras tomando los lugares del cuadro
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const checkForWinner = (newSquares) => {
		for (let i = 0; i < winningPositions.length; i++) {
			const [a, b, c] = winningPositions[i]; // se guardan las winningPositions en 3 variables distintas

			if (
				newSquares[a] &&
				newSquares[a] === newSquares[b] &&
				newSquares[a] === newSquares[c]
			) {
				//si hay valor a y el valor a es = b y ademas el valor a es igual al c, hay ganador xq    => a b c => x x x
				endGame(newSquares[a], winningPositions[i]);
				return;
			}
			// el sig es para empate =
			if (!newSquares.includes(null)) {
				//todos los cuadrados ya estan ocupados x O u X y no hay ganador xq me saltee el primer if
				endGame(null, Array.from(Array(10).keys())); //le paso null xq no hay ganador y un array del 0 al 9 para animar nuevamente los casilleros
				return;
			}
		}
		setTurn(turn === 'X' ? 'O' : 'X'); //cambio de quien es el turno (uso ternario: el turno el = a x ?
		// entonces lo remplazo por el turno de o y si no se cumople sera por defecto de x )
	};

	const handleClick = (square) => {
		let newSquares = [...squares];
		newSquares.splice(square, 1, turn);
		setSquares(newSquares);
		checkForWinner(newSquares);
	};

	const endGame = (result, winningPositions) => {
		//result = newSquares[a] o null, winningPositions=winningPositions[i] o  Array.from(Array(10).keys())
		setTurn(null); //bloqueo los clicks
		if (result !== null) {
			//sin empate
			setScore({
				...score,
				[result]: score[result] + 1,
				//desestructure el score,  seleccione result y le doy al velor del score (x /o) y le sumo 1
			});
		}
	};
	return (
		<div className="Container">
			<Board turn={turn} squares={squares} onClick={handleClick} />
		</div>
	);
};

export default App;
