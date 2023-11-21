import './Square.css';

const Square = ({ value, onclick, turn }) => {
	const handleClick = () => {
		//validciones:
		turn !== null && value === null && onclick();
		//si el valor es null ejecutar onclilck, tambien valido el turn =
		//es el turno de alguien y elvalor de ese cuadrado es null? entonces permito onclick
	};

	return <div className="square" onclick={() => handleClick}></div>;
};
export default Square;
