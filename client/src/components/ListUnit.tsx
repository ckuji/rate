import React from 'react'

type ListUnitProps = {
    name: string
    value: number
    previous: number
    onMouseTo(e: React.MouseEvent<HTMLDivElement>): void
    onMouseFrom(): void
    onClickItem(): void
}

export const ListUnit: React.FC<ListUnitProps> = (
    {name, value, previous, onMouseTo, onMouseFrom, onClickItem}) => {
    const percentChangeTemporary: number = (value / previous) * 100000
    const percentChange: number = Math.trunc(percentChangeTemporary) / 1000
    let percentChangeBool = null

    if (percentChange > 100) {
        percentChangeBool = true
    } else if (percentChange <= 100) {
        percentChangeBool = false
    }

    return (
        <div
            className="listUnit"
            onMouseEnter={onMouseTo}
            onMouseLeave={onMouseFrom}
            onClick={onClickItem}
        >
            <div className="cell">{name}</div>
            <div className="cell">{value}</div>
            <div className="cell">
                {percentChange}
                <div className="percentWrapper">%</div>
            </div>
            <div>
                {percentChangeBool && <div className="arrow arrow_toTop"></div>}
                {!percentChangeBool && <div className="arrow arrow_toBot"></div>}
            </div>
        </div>
    )
}
