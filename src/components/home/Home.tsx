import { HashLink } from 'react-router-hash-link'
import { sections } from '../../data/products.json'
import { List } from '../list/List'
import { Logo } from '../logo/Logo'
import './Home.css'
import { Section } from '../section/Section'

export function Home() {

	return (
		<div>
			<Logo img='./logo.png'></Logo>
			<List
				items={sections}
				renderHeader={(section) => (
					<HashLink to={`/mama-cafe/#${section.title}`} className="index-link">{section.title}</HashLink>
				)}
				renderContent={(section) => <Section title={section.title} products={section.products} />}
				className="sections-list"
			/>
		</div>
	)
}
