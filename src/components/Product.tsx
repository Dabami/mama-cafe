import { useState } from "react"
import './Product.css'

export interface ProductProps {
	title: string;
	description: string;
	img: string;
}

export function Product({ title, description, img }: ProductProps) {

	const [isSelected, setSelected] = useState(false)

	function handleClick() {
		setSelected(!isSelected)
	}

	return (
		<div onClick={handleClick} className={isSelected ? 'product is-selected' : 'product'}>
			<img className="product-image" src={img}></img>
			<p className="product-title">{title}</p>
			<p className="product-description">{description}</p>
		</div>
	)
}