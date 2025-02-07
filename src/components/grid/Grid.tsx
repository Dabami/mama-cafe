import './Grid.css'

interface GridProps<T> {
	items: T[];
	renderItem: (item: T) => React.ReactNode;
	className?: string;
}

export function Grid<T>({ items, renderItem, className = "" }: GridProps<T>) {
	return <div className={`grid-container ${className}`}>{items.map(renderItem)}</div>;
}
