import './App.css'
import { sections } from './data/products.json'
import { Logo } from './components/Logo'
import { SectionsList } from './components/SectionsList'

function App() {

	return (
		<div>
			<Logo img='./logo.png'></Logo>
			<SectionsList sections={sections}></SectionsList>
		</div>
	)
}

export default App
