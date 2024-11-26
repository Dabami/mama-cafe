import { Section, SectionProps } from "./Section"

interface SectionsListProps {
	sections: SectionProps[]
}

export function SectionsList({ sections }: SectionsListProps) {
	return (
		<div className="sections-list">
			{sections.map((section) => {
				return <Section title={section.title} products={section.products}></Section>
			})}
		</div>
	)
}