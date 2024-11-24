import './App.css'
import { ProductsGrid } from './components/ProductsGrid'
import { products } from './data/products.json'
import { Logo } from './components/Logo'

function App() {

	return (
		<div>
			<Logo img='./logo.png'></Logo>
			<ProductsGrid products={products}></ProductsGrid>
		</div>
	)
}

export default App
