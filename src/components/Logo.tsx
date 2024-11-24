import './Logo.css'

interface Props {
	img: string
}

export function Logo({ img }: Props) {
	return (
		<img className="logo" src={img}></img>
	)
}