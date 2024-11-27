import { sections } from '../data/products.json'
import { Logo } from './Logo'
import { SectionsList } from './SectionsList'
import './Home.css'

export function Home() {

	return (
		<div>
			<Logo img='./logo.png'></Logo>
			<SectionsList sections={sections}></SectionsList>
		</div>
	)
}
