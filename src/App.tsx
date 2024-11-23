import { useState } from 'react'
import './App.css'
import { ProductsGrid } from './components/ProductsGrid'
import { products } from './data/products.json'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Mama Café</h1>
            <ProductsGrid products={products}></ProductsGrid>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
        </>
    )
}

export default App
