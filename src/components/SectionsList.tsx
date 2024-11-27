import { Section, SectionProps } from "./Section"
import { HashLink } from 'react-router-hash-link'
import './SectionsList.css'

interface SectionsListProps {
	sections: SectionProps[]
}

export function SectionsList({ sections }: SectionsListProps) {
	return (
		<div className="sections-list">
			<ul className="index">
				{sections.map((section) => {
					return <li className="index-link"><HashLink to={'/mama-cafe/#' + section.title}>{section.title}</HashLink></li>
				})}
			</ul>
			{sections.map((section) => {
				return <Section title={section.title} products={section.products}></Section>
			})}
		</div>
	)
}