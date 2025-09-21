import { useState, useRef } from "react"

function ChildComponent() {
    console.log('render');
    return <div>Child Component</div>
}


function Hooks () {
    const [show, setShow] = useState(true)
    const inputRef = useRef('')

    return <div>
        <ChildComponent/>
        <input type="text" ref={inputRef} />
        <button onClick={() => {setShow(!show)}}></button>
    </div>
}

export default Hooks