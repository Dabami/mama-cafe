import { Product } from "./Product"
import './ProductsGrid.css'

interface Props {
	products: {
		title: string;
		description: string;
		img: string;
	}[]
}

export function ProductsGrid({ products }: Props) {
	return (
		<div className="grid-container">
			{products.map((product) => {
				return <Product title={product.title} description={product.description} img={product.img}></Product>
			})}
		</div>
	)
}