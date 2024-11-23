import { useState } from "react"
import './Product.css'

interface Props {
    description: string
    img: string
}

export function Product({ description, img }: Props) {

    const [isSelected, setSelected] = useState(false)

    function handleClick() {
        setSelected(!isSelected)
    }

    return (
        <div onClick={handleClick} className={isSelected ? 'grid-item is-selected' : 'grid-item'}>
            <img className="item-image" src={img}></img>
            <p className="item-description">{description}</p>
        </div>
    )
}