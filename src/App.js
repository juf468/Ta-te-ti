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

	return (
		<div className="Container">
			<Board squares={squares} />
		</div>
	);
};

export default App;
