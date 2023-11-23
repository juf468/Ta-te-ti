import './Square.css';
import classNames from 'classnames';

const Square = ({ value, onClick, turn, winner }) => {
	const handleClick = () => {
		if (turn !== null && value === null) {
			onClick();
		}
	};

	let squareClass = classNames({
		square: true,
		[`square--${value}`]: value !== null,

		winner: winner, //traigo la prop wiiner para poder animar al ganado a traves de classNames.asi el square sabra si es el ganador o no
		//para esto utilizo los estilos de css
	});

	return <div className={squareClass} onClick={() => handleClick()}></div>;
};

export default Square;
