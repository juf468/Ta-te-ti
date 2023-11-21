import Square from '../Square/Square';
import './Board.css';

//recive el state de los squares
const Board = ({ squares, onClick, turn }) => {
	const createSquares = (values) => {
		return values.map((value, index) => (
			// <div key={index}>{squares[value]}</div>
			<Square
				turn={turn}
				onClick={() => onClick(value)} //el value es la pocicion del tablero
				value={squares[value]}
				key={`squares_${value}`}
			/>
		));
	};
	//funcion que recibe valores y los manda a html
	return (
		<div className="board">
			<div className="row">{createSquares([0, 1, 2])}</div>
			<div className="row">{createSquares([3, 4, 5])}</div>
			<div className="row">{createSquares([6, 7, 8])}</div>
		</div>
	);
};
export default Board;
