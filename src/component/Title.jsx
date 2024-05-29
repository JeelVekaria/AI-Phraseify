import { useState } from "react";
import "./Title.css"

const Title = () => {
    const [text, setText] = useState('')

    return (
         <div>
            <h1 className="honk"> Paraphrasing Tool</h1>
        </div>
    )
}


export default Title