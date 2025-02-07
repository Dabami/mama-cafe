import { Grid } from "../grid/Grid";
import { Product, ProductProps } from "../product/Product";
import './Section.css'

export interface SectionProps {
    title: string;
    products: ProductProps[];
}

export function Section({ title, products }: SectionProps) {
    return (
        <div className="section" id={title}>
            <p className="section-title">{title}</p>
            <Grid
                items={products}
                renderItem={(product) => <Product key={product.title} {...product} />}
                className="products-grid"
            />
        </div>
    )
}