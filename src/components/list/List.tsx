interface ListProps<T> {
    items: T[];
    renderHeader: (item: T) => React.ReactNode;
    renderContent: (item: T) => React.ReactNode;
    className?: string;
}

export function List<T>({ items, renderHeader, renderContent, className = "" }: ListProps<T>) {
    return (
        <div className={`list-container ${className}`}>
            <ul className="index">
                {items.map((item) => (
                    <li key={JSON.stringify(item)} className="index-link">
                        {renderHeader(item)}
                    </li>
                ))}
            </ul>
            {items.map((item) => (
                <div key={JSON.stringify(item)}>{renderContent(item)}</div>
            ))}
        </div>
    );
}
