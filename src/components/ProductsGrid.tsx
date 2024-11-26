import { Product, ProductProps } from "./Product"
import './ProductsGrid.css'

interface ProductsGridProps {
	products: ProductProps[]
}

export function ProductsGrid({ products }: ProductsGridProps) {
	return (
		<div className="products-grid">
			{products.map((product) => {
				return <Product title={product.title} description={product.description} img={product.img}></Product>
			})}
		</div>
	)
}