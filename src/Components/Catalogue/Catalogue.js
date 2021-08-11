import React, { useState } from "react";
import Product from "../Product";
import Switch from "../Switch/Switch";

import { products } from "../../Utils/products";

import "./catalogue.css";

const productsInStock = products.filter(({ stock }) => stock === true);
const sortByStock = [...products].sort((x, y) => y.stock - x.stock);

const Catalogue = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div className="catalogue">
			<div className="title">
				<h1>Catalogo de Productos</h1>
			</div>

			<Switch isChecked={isChecked} setIsChecked={setIsChecked} />

			{isChecked ? (
				<div className="list-container">
					{productsInStock.map((product) => (
						<Product key={product.id} product={product} />
					))}
				</div>
			) : (
				<div className="list-container">
					{sortByStock.map((product) => (
						<Product key={product.id} product={product} />
					))}
				</div>
			)}
		</div>
	);
};
export default Catalogue;
