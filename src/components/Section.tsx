import { ProductProps } from "./Product";
import { ProductsGrid } from "./ProductsGrid";
import './Section.css'

export interface SectionProps {
    title: string;
    products: ProductProps[];
}

export function Section({ title, products }: SectionProps) {
    return (
        <div className="section" id={title}>
            <p className="section-title">{title}</p>
            <ProductsGrid products={products}></ProductsGrid>
        </div>
    )
}