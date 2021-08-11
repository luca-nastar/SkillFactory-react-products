import React from "react";
import "./product.css";

const Product = ({ product }) => {
	const { name, description, price, stock } = product;

	return (
		<div className="product">
			<div className="product-header">
				<span className="product-title">{name}</span>
				<span className="product-price">
					Precio: ${price}
					<span
						className="product-indicator"
						style={stock ? { color: "#28A745" } : { color: "#DC3545" }}
					>
						{stock ? "In Stock" : "Out of Stock"}
					</span>
				</span>
			</div>

			<p className="product-description">{description}</p>
		</div>
	);
};
export default Product;
