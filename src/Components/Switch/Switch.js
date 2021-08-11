import React from "react";
import "./switch.css";

const Switch = ({ isChecked, setIsChecked }) => {
	return (
		<div className="switch-container">
			<label className="switch">
				<input
					type="checkbox"
					checked={isChecked}
					onChange={() => setIsChecked(!isChecked)}
				/>
				<span className="slider"></span>
			</label>
			<label>{isChecked ? "In Stock" : "Todos los productos"}</label>
		</div>
	);
};
export default Switch;
