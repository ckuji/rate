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

    const onMouseHandler = (e: any, name: string) => {
        const showed = document.getElementById('hint')
        showed!.style.display = 'block'
        showed!.style.left = e.pageX + 40 + 'px'
        showed!.style.top = e.pageY + 'px';
        setHintName(name)

    }

    // useEffect(() => {
    //     const hovered: any = document.querySelector('.listUnit')
    //     const showed = document.getElementById('hint')
    //     hovered.addEventListener('mouseover', (e: React.MouseEvent) => {
    //         showed!.style.display = 'block'
    //     })
    //
    // }, [])

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
                                onMouse={(e) => onMouseHandler(e, unit.Name)}
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