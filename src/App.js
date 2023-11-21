import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';

const App = () => {
	const [turn, setTurn] = useState('x'); // siempre comenzaran las X
	const [squares, setSquares] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, null]);
	//representa a los cuadrados con un array
	//de 9 espacios que empiezan en null - .fill = cambia los valores de un array por un valor estatico
	const [score, setScore] = useState({
		x: 0,
		o: 0,
	}); //aqui se guardaran los resultados de la partida

	const checkForWinner = (squares) => {
		setTurn(turn === 'x' ? 'o' : 'x'); //cambio de quien es el turno (uso ternario: el turno el = a x ?
		// entonces lo remplazo por el turno de o y si no se cumople sera por defecto de x )
	};

	const handleClick = (square) => {
		//modifica los cuadradados de la tabla
		let newSquares = [...squares]; //necesito modificar el estado 'squares' a traves de
		//'newSquares' que es una nueva varible que COPIA el estado inicial para modificarlo
		newSquares.splice(square, 1, turn);
		// en el luga de square (num de pocicion que puede ser del 0 al 8) modifica un elemento
		//y dale el valor de turn
		setSquares(newSquares);
		checkForWinner(newSquares);
	};

	return (
		<div className="Container">
			<Board turn={turn} squares={squares} onCLick={handleClick} />
		</div>
	);
};

export default App;
