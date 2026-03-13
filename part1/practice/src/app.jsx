import { useState } from "react"

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            button press history: {props.allClicks.join(" ")}
        </div>
    )
}

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const App = () => {
    const [allClicks, setAll] = useState([])

    const handleClick = (letter) => {
        setAll(allClicks.concat(letter))
    }

    return (
        <div>
            <Button onClick={() => handleClick("L")} text="left" />
            <Button onClick={() => handleClick("R")} text="right" />
            <History allClicks={allClicks}/>
        </div>
    )
}

export default App
