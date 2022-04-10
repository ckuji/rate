import React, {useEffect, useState} from "react"
import axios from "axios"
import {IData} from "./interfaces"
import {FetchedComponent} from "./components/FetchedComponent";

const App: React.FC = () => {
    const [currentData, setCurrentData] = useState<IData | null>(null)

    useEffect(() => {
        axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then(({data}) => {
            setCurrentData(data)
        })
    }, [])

    return (
        <div>
            <h2 className="mainTitle">Rates</h2>
            {currentData &&
                <FetchedComponent fetched={currentData} />
            }
        </div>
    )
}

export default App
