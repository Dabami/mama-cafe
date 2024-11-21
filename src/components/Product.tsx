interface Props {
    isSelected: boolean
    index: BigInteger
  }

export function Square ({ isSelected, index} : Props) {
    let className: string = `square ${isSelected ? 'is-selected' : ''}`
  
    return (
      <div className={className}>
      </div>
    )
  }