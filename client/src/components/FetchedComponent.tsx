import React, {useEffect, useState} from "react"
import {IData} from "../interfaces"
import {ListUnit} from "./ListUnit";

type FetchedComponentProps = {
    fetched: IData
}

export const FetchedComponent: React.FC<FetchedComponentProps> = ({fetched}) => {
    const [hintName, setHintName] = useState<string | null>(null)
    const listArrays = []

    for (let code in fetched.Valute) {
        const example = fetched.Valute[code]
        listArrays.push(example)
    }

    const onMouseToHandler = (e: React.MouseEvent<HTMLDivElement>, name: string) => {
        const showed = document.getElementById('hint')
        showed!.style.display = 'block'
        showed!.style.left = e.pageX + 'px'
        showed!.style.top = e.pageY + 40 + 'px';
        setHintName(name)
    }

    const onMouseFromHandler = () => {
        const showed = document.getElementById('hint')
        showed!.style.display = 'none'
    }

    return (
        <>
            <ul className="mainWrapper">
                {
                    listArrays.map((unit, index) =>
                        <li>
                            <ListUnit
                                key={`${unit.ID}_${index}`}
                                name={unit.CharCode}
                                value={unit.Value}
                                previous={unit.Previous}
                                onMouseTo={(e) => onMouseToHandler(e, unit.Name)}
                                onMouseFrom={() => onMouseFromHandler()}
                            />
                        </li>
                    )
                }
            </ul>
            <div id="hint" className="hint">
                {hintName}
            </div>
        </>
    )
}